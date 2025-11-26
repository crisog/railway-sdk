import { createRailwayFromEnv } from '../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  console.log('Fetching postgres template...');
  const templateResult = await railway.templates.get({
    variables: {
      code: 'postgres',
    },
  });

  if (templateResult.isErr()) {
    throw templateResult.error;
  }

  const { template } = templateResult.value;

  if (!template) {
    throw new Error('Template "postgres" not found');
  }

  console.log(`Found template: ${template.name} (${template.id})`);
  console.log(`Description: ${template.description}`);

  console.log('\nDeploying template...');
  const deployResult = await railway.templates.deploy({
    variables: {
      input: {
        templateId: template.id,
        serializedConfig: template.serializedConfig,
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

  console.log(`Deployed to project: ${deployment.projectId}`);

  if (deployment.workflowId) {
    console.log(`Workflow ID: ${deployment.workflowId}`);

    const statusResult = await railway.projects.workflows.status({
      variables: { workflowId: deployment.workflowId },
    });

    if (statusResult.isOk()) {
      const { workflowStatus } = statusResult.value;
      console.log(`Workflow status: ${workflowStatus?.status ?? 'Unknown'}`);
    }
  }

  console.log('\nTemplate deployed successfully!');
  console.log(`View your project: https://railway.com/project/${deployment.projectId}`);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
