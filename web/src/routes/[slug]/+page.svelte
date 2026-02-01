<script lang="ts">
	import { useQuery } from '@sanity/sveltekit';
	import SanityImage from '$lib/components/cms/SanityImage.svelte';
	import { PortableText } from '@portabletext/svelte';
	import type { PageProps } from './$types.js';

	const { data }: PageProps = $props();
	const query = useQuery(data);
	const page = $derived($query.data);
</script>

{#if page}
	<h1>{page.title}</h1>

	{#if page.featuredImage}
		<SanityImage source={page.featuredImage} alt={page.title} width={800} />
	{/if}

	{#if page.content}
		<div class="content">
			<PortableText value={page.content} />
		</div>
	{/if}
{/if}
