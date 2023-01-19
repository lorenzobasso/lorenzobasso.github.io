<script lang="ts">
	export let gap = 0;
	export let col = false;
	export let wrap = false;
	export let className = '';

	$: directionClass = col ? 'flex-col' : '';
	$: wrapClass = wrap ? 'flex-wrap' : '';
</script>

<section class="flex {directionClass} gap-{gap} {wrapClass} {className}">
	<slot />
</section>
