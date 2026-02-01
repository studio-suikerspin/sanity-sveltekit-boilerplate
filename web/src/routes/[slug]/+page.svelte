<script lang="ts">
	import SanityImage from '$lib/components/SanityImage.svelte';
	import { PortableText } from '@portabletext/svelte';

	const { data } = $props();
</script>

<h1>{data.page.title}</h1>

{#if data.page.featuredImage}
     <SanityImage source={data.page.featuredImage} alt={data.page.title} width={800} />
{/if}

{#if data.page.content}
	<div class="content">
		<PortableText value={data.page.content} />
	</div>
{/if}
