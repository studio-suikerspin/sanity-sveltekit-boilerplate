<script lang="ts">
	import '$lib/styles/global.css';

	import { PreviewMode, QueryLoader, VisualEditing } from '@sanity/sveltekit';
	import { client } from '$lib/cms/client';
	import { ScrollSmoother } from '$lib/utils/gsap';
	import type { LayoutProps } from './$types';

	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	const { children, data }: LayoutProps = $props();
	const { previewEnabled } = data;

	onMount(() => {
		ScrollSmoother.create({
			smooth: 1,
			effects: true
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<PreviewMode enabled={previewEnabled}>
	<VisualEditing enabled={previewEnabled}>
		<QueryLoader enabled={previewEnabled} {client}>
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<Header />

					<main>
						{@render children()}
					</main>

					<Footer />
				</div>
			</div>
		</QueryLoader>
	</VisualEditing>
</PreviewMode>
