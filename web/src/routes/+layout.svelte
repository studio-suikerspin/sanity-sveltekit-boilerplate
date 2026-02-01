<script lang="ts">
	import { PreviewMode, QueryLoader, VisualEditing } from '@sanity/sveltekit';
	import { client } from '$lib/cms/client';
	import type { LayoutProps } from './$types';

	import favicon from '$lib/assets/favicon.svg';

	const { children, data }: LayoutProps = $props();
	const { previewEnabled } = data;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<PreviewMode enabled={previewEnabled}>
	<VisualEditing enabled={previewEnabled}>
		<QueryLoader enabled={previewEnabled} {client}>
			{@render children()}
		</QueryLoader>
	</VisualEditing>
</PreviewMode>
