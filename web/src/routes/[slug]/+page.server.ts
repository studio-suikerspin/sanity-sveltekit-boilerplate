import { pageBySlugQuery } from '$lib/cms/queries.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params, locals: { sanity } }) => {
     const { loadQuery } = sanity;
     const initial = await loadQuery(pageBySlugQuery, { slug: params.slug })

	if (!initial.data) {
		throw error(404, 'Page not found');
	}

	return { query: pageBySlugQuery, params: { slug: params.slug}, options: { initial } };
};
