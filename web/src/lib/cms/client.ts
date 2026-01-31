import { createClient } from '@sanity/sveltekit';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

export const sanityClient = createClient({
     apiVersion: '2026-01-31',
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false,
});
