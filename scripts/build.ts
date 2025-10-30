import { readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const rootDir = fileURLToPath(new URL('..', import.meta.url));
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');

async function collectEntryPoints(dir: string, acc: string[] = []): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;

    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await collectEntryPoints(entryPath, acc);
      continue;
    }

    if (!entry.name.endsWith('.ts')) continue;
    if (entry.name.endsWith('.d.ts')) continue;

    acc.push(entryPath);
  }

  return acc;
}

async function main() {
  await rm(distDir, { recursive: true, force: true });

  const entryPoints = await collectEntryPoints(srcDir);

  if (entryPoints.length === 0) {
    throw new Error('No TypeScript entry points found under src/');
  }

  await build({
    entryPoints,
    outbase: srcDir,
    outdir: distDir,
    platform: 'node',
    format: 'esm',
    target: ['node18'],
    sourcemap: false,
    bundle: false,
    packages: 'external',
    logLevel: 'info',
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
