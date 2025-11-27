import { createRailwayFromEnv, unwrapField } from '../../src/index';

async function main() {
  const railway = createRailwayFromEnv();

  const workflowId = 'deployTemplate/project/554e1d8a-4087-4955-9d70-cb66dfe78834/abc123';

  const result = await railway.projects.workflows.status({
    variables: { workflowId },
  });

  if (result.isErr()) throw result.error;

  const workflow = unwrapField(result, 'workflowStatus', 'Workflow not found');
  if (workflow.isErr()) throw workflow.error;

  console.log(`Workflow status: ${workflow.value.status}`);
  if (workflow.value.error) {
    console.log(`Error: ${workflow.value.error}`);
  }
}

main().catch(console.error);
