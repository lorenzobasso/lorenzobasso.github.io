<script lang="ts">
	export let href: string = '';
</script>

<section>
	<a {href} target="_blank" rel="noopener noreferrer">
		<slot />
	</a>
</section>

<style>
	section {
		display: flex;
		align-items: center;
	}

	a {
		color: inherit;
		margin-right: 0.25rem;
	}
</style>
