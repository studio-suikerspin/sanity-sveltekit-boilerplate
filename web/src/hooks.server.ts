import { handlePreviewMode, handleQueryLoader, setServerClient } from '@sanity/sveltekit';
import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { serverClient } from '$lib/cms/client.server';
import { SANITY_PREVIEW_SECRET } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';

setServerClient(serverClient);

// Debug middleware - remove after fixing
const debugCookies: Handle = async ({ event, resolve }) => {
	const cookie = event.cookies.get('__sanity_preview');
	console.log('=== Preview Debug ===');
	console.log('Path:', event.url.pathname);
	console.log('Cookie value:', cookie?.substring(0, 20) + '...');
	console.log('Secret value:', SANITY_PREVIEW_SECRET?.substring(0, 20) + '...');
	console.log('Secret defined:', SANITY_PREVIEW_SECRET !== undefined);
	console.log('Match:', cookie === SANITY_PREVIEW_SECRET);
	console.log('====================');
	return resolve(event);
};

export const handle = sequence(
	debugCookies,
	handlePreviewMode({
		client: serverClient,
		preview: {
			redirect,
			secret: SANITY_PREVIEW_SECRET
		}
	}),
	handleQueryLoader()
);
