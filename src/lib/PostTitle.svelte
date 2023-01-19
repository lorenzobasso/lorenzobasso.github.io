<script lang="ts">
	export let justify: 'left' | 'center' = 'center';

	$: alignClass = justify === 'center' ? 'items-center' : 'items-start';
</script>

<div class="flex flex-col gap-1 {alignClass}">
	<slot name="title" />
	<div class="brightness-75 text-sm mb-1 flex flex-col {alignClass}">
		<slot name="date" />
		<slot name="read-time" />
	</div>
	<slot name="description" />
</div>
