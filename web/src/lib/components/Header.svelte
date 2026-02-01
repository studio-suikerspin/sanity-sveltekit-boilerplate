<script lang="ts">
	import { resolve } from '$app/paths';

	const navigation = [
		{ label: 'Home', url: '/' },
		{ label: 'About', url: '/about' }
	];
</script>

<header>
	<div class="container">
		<nav>
			<a href={resolve('/')} class="logo">Site Title</a>
			<ul class="nav-links">
				{#each navigation as item, key (key)}
					<li>
						<a href={resolve(item.url)}>{item.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		padding: var(--space-md) 0;
		border-bottom: 1px solid #e5e5e5;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: var(--font-size-lg);
		font-weight: 600;
		text-decoration: none;
		color: var(--color-text);
	}

	.nav-links {
		display: flex;
		gap: var(--space-md);
		list-style: none;
	}

	.nav-links a {
		text-decoration: none;
		color: var(--color-text);
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--color-accent);
	}
</style>
