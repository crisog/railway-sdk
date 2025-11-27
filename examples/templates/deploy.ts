import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  const templateResult = await railway.templates.get({
    variables: { code: 'postgres' },
  });

  if (templateResult.isErr()) throw templateResult.error;

  const template = unwrapField(templateResult, 'template', 'Template not found');
  if (template.isErr()) throw template.error;

  const result = await railway.templates.deploy({
    variables: {
      input: {
        templateId: template.value.id,
        serializedConfig: template.value.serializedConfig,
        projectId,
        environmentId,
      },
    },
  });

  if (result.isErr()) throw result.error;

  const deployment = unwrapField(result, 'templateDeployV2', 'Deploy failed');
  if (deployment.isErr()) throw deployment.error;

  console.log(`Deployed to project: ${deployment.value.projectId}`);
  if (deployment.value.workflowId) {
    console.log(`Workflow ID: ${deployment.value.workflowId}`);
  }
}

main().catch(console.error);
