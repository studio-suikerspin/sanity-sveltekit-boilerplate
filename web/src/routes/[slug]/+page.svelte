<script lang="ts">
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';

	let data: PageData = $props();
	const { page } = data;
</script>

<h1>{page.title}</h1>

{#if page.content}
	<div class="content">
		<PortableText value={page.content} />
	</div>
{/if}
