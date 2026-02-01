<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="container">
	<h1>Welcome to Suikerspin Boilerplate</h1>
	<p>
		This is your homepage. Try visiting <a href={resolve('/home')}>/home</a> to see a dynamic page.
	</p>
</div>

<style>
	h1 {
		font-size: var(--font-size-2xl);
		margin-bottom: var(--space-md);
	}

	p {
		font-size: var(--font-size-lg);
		color: #666;
	}

	a {
		color: var(--color-accent);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
