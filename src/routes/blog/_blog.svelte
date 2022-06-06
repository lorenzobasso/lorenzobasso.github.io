<script>
	import Toc from 'svelte-toc';

	import './article.css';

	export let title;
	export let written;
	export let modified;
</script>

<article>
	<div class="main-content">
		<section>
			<h1>{title}</h1>
			<div class="dates">
				<div><small>CREATED: {written.split('T')[0]}</small></div>
				<div><small>LAST MODIFIED: {modified.split('T')[0]}</small></div>
			</div>
		</section>

		<div class="divider" />

		<slot />
	</div>

	<Toc />
</article>

<style>
	article {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
	}

	section {
		text-align: center;
	}

	h1 {
		margin-bottom: 0.5rem;
	}

	.divider {
		height: 0px;
		width: 75%;
		background-color: var(--sl);
		margin: 3rem auto;
	}

	.dates {
		margin-left: 1rem;
	}
</style>
