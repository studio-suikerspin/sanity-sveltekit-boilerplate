import { client } from '$lib/cms/client';
import { pageBySlugQuery } from '$lib/cms/queries.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const page = await client.fetch(pageBySlugQuery, { slug: params.slug });

	if (!page) {
		throw error(404, 'Page not found');
	}

	return { page };
};
