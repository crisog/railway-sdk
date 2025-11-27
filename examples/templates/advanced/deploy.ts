/**
 * Deploy a Railway template with type-safe configuration.
 *
 * Before running this example:
 * 1. Update config.ts with your desired template code
 * 2. Run: tsx --env-file=.env examples/templates/advanced/typegen.ts
 * 3. Update the imports below to match your generated types
 */

import { createRailwayFromEnv } from '../../../src/index';
import {
  createFfmpegRestApiConfig,
  FFMPEG_REST_API_DEFAULT_CONFIG,
} from './generated/ffmpeg-rest-api';
import { TEMPLATE_CODE, FFMPEG_SERVICE_ID } from './config';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  console.log(`Fetching ${TEMPLATE_CODE} template...`);
  const templateResult = await railway.templates.get({
    variables: { code: TEMPLATE_CODE },
  });

  if (templateResult.isErr()) {
    throw templateResult.error;
  }

  const { template } = templateResult.value;

  if (!template) {
    throw new Error(`Template "${TEMPLATE_CODE}" not found`);
  }

  console.log(`Template: ${template.name}\n`);

  const defaults = FFMPEG_REST_API_DEFAULT_CONFIG.services[FFMPEG_SERVICE_ID].variables;
  console.log('Variables that need configuration (empty values):');
  console.log(`  STORAGE_MODE: "${defaults.STORAGE_MODE.value}" <- empty, set to "s3" for S3 mode`);
  console.log(`  S3_BUCKET: "${defaults.S3_BUCKET.value}" <- empty`);
  console.log(`  S3_REGION: "${defaults.S3_REGION.value}" <- empty`);
  console.log(`  S3_ACCESS_KEY_ID: "${defaults.S3_ACCESS_KEY_ID.value}" <- empty`);
  console.log(`  S3_SECRET_ACCESS_KEY: "${defaults.S3_SECRET_ACCESS_KEY.value}" <- empty`);

  console.log('\nVariables with defaults (no changes needed):');
  console.log(`  PORT: "${defaults.PORT.value}"`);
  console.log(`  NODE_ENV: "${defaults.NODE_ENV.value}"`);
  console.log(`  MAX_FILE_SIZE: "${defaults.MAX_FILE_SIZE.value}"`);

  const config = createFfmpegRestApiConfig();
  const ffmpegRestVars = config.services[FFMPEG_SERVICE_ID].variables;

  ffmpegRestVars.STORAGE_MODE.value = 's3';
  ffmpegRestVars.S3_BUCKET.value = 'your-bucket-name';
  ffmpegRestVars.S3_REGION.value = 'us-east-1';
  ffmpegRestVars.S3_ENDPOINT.value = 'https://s3.us-east-1.amazonaws.com';
  ffmpegRestVars.S3_ACCESS_KEY_ID.value = 'your-access-key-id';
  ffmpegRestVars.S3_SECRET_ACCESS_KEY.value = 'your-secret-access-key';
  ffmpegRestVars.S3_PUBLIC_URL.value = 'https://your-bucket-name.s3.amazonaws.com';

  console.log('\n✓ Configured S3 variables');

  console.log('\nDeploying template...');
  const deployResult = await railway.templates.deploy({
    variables: {
      input: {
        templateId: template.id,
        serializedConfig: config,
        projectId,
        environmentId,
      },
    },
  });

  if (deployResult.isErr()) {
    throw deployResult.error;
  }

  const { templateDeployV2: deployment } = deployResult.value;

  if (!deployment) {
    throw new Error('Deployment response not returned');
  }

  console.log(`\nDeployed to project: ${deployment.projectId}`);

  if (deployment.workflowId) {
    const statusResult = await railway.projects.workflows.status({
      variables: { workflowId: deployment.workflowId },
    });

    if (statusResult.isOk()) {
      const { workflowStatus } = statusResult.value;
      console.log(`Workflow status: ${workflowStatus?.status ?? 'Unknown'}`);
    }
  }

  console.log(`\nView: https://railway.com/project/${deployment.projectId}`);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
