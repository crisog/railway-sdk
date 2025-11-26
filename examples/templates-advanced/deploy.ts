import { createRailwayFromEnv } from '../../src/index';
import {
  createFfmpegRestApiConfig,
  FFMPEG_REST_API_DEFAULT_CONFIG,
} from './generated/ffmpeg-rest-api';

// Service ID from the generated config - use this to access service-specific variables with full type safety
const FFMPEG_SERVICE_ID = '7a5f33d0-fc76-4ba3-a311-b46b17f050f0';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  console.log('Fetching ffmpeg-rest-api template...');
  const templateResult = await railway.templates.get({
    variables: { code: 'ffmpeg-rest-api' },
  });

  if (templateResult.isErr()) {
    throw templateResult.error;
  }

  const { template } = templateResult.value;

  if (!template) {
    throw new Error('Template "ffmpeg-rest-api" not found');
  }

  console.log(`Template: ${template.name}\n`);

  const defaults = FFMPEG_REST_API_DEFAULT_CONFIG.services[FFMPEG_SERVICE_ID].variables;
  console.log('Variables that need configuration (empty defaults):');
  console.log(
    `  STORAGE_MODE: "${defaults.STORAGE_MODE.defaultValue}" <- empty, set to "s3" for S3 mode`,
  );
  console.log(`  S3_BUCKET: "${defaults.S3_BUCKET.defaultValue}" <- empty`);
  console.log(`  S3_REGION: "${defaults.S3_REGION.defaultValue}" <- empty`);
  console.log(`  S3_ACCESS_KEY_ID: "${defaults.S3_ACCESS_KEY_ID.defaultValue}" <- empty`);
  console.log(`  S3_SECRET_ACCESS_KEY: "${defaults.S3_SECRET_ACCESS_KEY.defaultValue}" <- empty`);

  console.log('\nVariables with defaults (no changes needed):');
  console.log(`  PORT: "${defaults.PORT.defaultValue}"`);
  console.log(`  NODE_ENV: "${defaults.NODE_ENV.defaultValue}"`);
  console.log(`  MAX_FILE_SIZE: "${defaults.MAX_FILE_SIZE.defaultValue}"`);

  const config = createFfmpegRestApiConfig();
  const ffmpegVars = config.services[FFMPEG_SERVICE_ID].variables;

  ffmpegVars.STORAGE_MODE.defaultValue = 's3';
  ffmpegVars.S3_BUCKET.defaultValue = 'your-bucket-name';
  ffmpegVars.S3_REGION.defaultValue = 'us-east-1';
  ffmpegVars.S3_ENDPOINT.defaultValue = 'https://s3.us-east-1.amazonaws.com';
  ffmpegVars.S3_ACCESS_KEY_ID.defaultValue = 'your-access-key-id';
  ffmpegVars.S3_SECRET_ACCESS_KEY.defaultValue = 'your-secret-access-key';
  ffmpegVars.S3_PUBLIC_URL.defaultValue = 'https://your-bucket-name.s3.amazonaws.com';

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
