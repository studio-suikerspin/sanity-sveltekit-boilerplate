<script lang="ts">
	interface Button {
		text: string;
		element: 'a' | 'button';
		variant: string;
		href?: string;
		onclick?: () => void;
		role?: string;
	}

	const {
		text,
		element = 'a',
		variant = 'default',
		href,
		onclick,
		role = 'button'
	}: Button = $props();
</script>

<svelte:element this={element} class={`btn btn--${variant}`} {href} {onclick} {role}>
	{text}
</svelte:element>
