<script lang="ts">
	import { page } from '$app/stores';

	const status = $derived($page.status);
	const message = $derived($page.error?.message || 'Something went wrong');
</script>

<svelte:head>
	<title>{status} Error</title>
	<meta name="robots" content="noindex, nofollow">
</svelte:head>

<div class="error-page">
	<div class="container">
		<h1>{status}</h1>
		<p class="message">{message}</p>
		<a href="/" class="home-link">Back to home</a>
	</div>
</div>

<style>
	.error-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
		text-align: center;
	}

	h1 {
		font-size: var(--font-size-2xl);
		margin-bottom: var(--space-sm);
		color: var(--color-text);
	}

	.message {
		font-size: var(--font-size-lg);
		color: #666;
		margin-bottom: var(--space-lg);
	}

	.home-link {
		display: inline-block;
		padding: var(--space-sm) var(--space-md);
		background-color: var(--color-accent);
		color: white;
		text-decoration: none;
		border-radius: 4px;
		transition: opacity 0.2s;
	}

	.home-link:hover {
		opacity: 0.9;
	}
</style>
