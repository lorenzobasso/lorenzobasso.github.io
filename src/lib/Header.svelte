<header>
	<a href="/" class="home">Lorenzo Basso</a>
	<nav>
		<a href="/blog">Blog</a>
		<a href="/projects">Projects</a>
		<a href="/about">About me</a>
	</nav>
</header>
<div class="spacer" />

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: var(--header-height);
		color: var(--st);
	}

	a {
		color: var(--st);
		text-decoration: none;
	}

	nav > a {
		margin-right: 1rem;
	}

	nav > a:last-of-type {
		margin: 0;
	}

	nav > a:hover {
		text-decoration: underline;
	}

	.home {
		font-size: 2rem;
		font-weight: bold;
	}

	.spacer {
		width: 80%;
		height: 4px;
		margin: 1rem auto;
		background-color: var(--sl);
	}
</style>
