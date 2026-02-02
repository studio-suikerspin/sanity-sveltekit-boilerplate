import { handlePreviewMode, handleQueryLoader, setServerClient } from '@sanity/sveltekit';
import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { serverClient } from '$lib/cms/client.server';
import { SANITY_PREVIEW_SECRET } from '$env/static/private';

setServerClient(serverClient);

export const handle = sequence(
	handlePreviewMode({
		client: serverClient,
		preview: {
			redirect,
			secret: SANITY_PREVIEW_SECRET
		}
	}),
	handleQueryLoader()
);
