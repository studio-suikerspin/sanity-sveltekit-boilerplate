<script lang="ts">
	import { createImageUrlBuilder } from '@sanity/image-url';
	import { client } from '$lib/cms/client';
	import type { SanityImageSource } from '@sanity/image-url';

	interface SanityImageProps {
		source: SanityImageSource;
		alt: string;
		width?: number;
		height?: number;
	}

	let { source, alt = '', width, height }: SanityImageProps = $props();

	const builder = createImageUrlBuilder(client);

	function urlFor(source: SanityImageSource) {
		let img = builder.image(source);
		if (width) img = img.width(width);
		if (height) img = img.height(height);

		return img.url();
	}

	let imageUrl = $derived(urlFor(source));
</script>

{#if imageUrl}
	<img src={imageUrl} {alt} {width} {height} />
{/if}
