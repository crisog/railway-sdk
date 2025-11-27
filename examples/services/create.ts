import { createRailwayFromEnv, unwrapField } from '@crisog/railway-sdk';

async function main() {
  const railway = createRailwayFromEnv();

  const projectId = '554e1d8a-4087-4955-9d70-cb66dfe78834';
  const environmentId = 'bd1e400e-21f9-45b6-9f8d-9e02f19fef03';

  const result = await railway.services.create({
    variables: {
      input: {
        projectId,
        environmentId,
        name: 'my-new-service',
      },
    },
  });

  if (result.isErr()) throw result.error;

  const service = unwrapField(result, 'serviceCreate', 'Service creation failed');
  if (service.isErr()) throw service.error;

  console.log(`Created service: ${service.value.name} (${service.value.id})`);
}

main().catch(console.error);
