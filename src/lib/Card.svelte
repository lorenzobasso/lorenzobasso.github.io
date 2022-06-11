<article>
	<slot />
</article>

<style>
	article {
		border: 1px solid var(--sd);
		border-radius: 1rem;
		box-shadow: 6px 6px 6px black;
		padding: 1rem;
		margin: 1rem;
		overflow-wrap: break-word;
		word-wrap: break-word;
	}

	article:hover {
		box-shadow: 6px 6px 6px var(--p);
	}
</style>
