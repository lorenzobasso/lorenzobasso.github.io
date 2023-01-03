<script>
	import GreetPerson from './GreetPerson.svelte';

	let names = '';
	$: splitNames = names.split(',');

	const handleClear = () => {
		names = '';
	};
</script>

<div>Enter a comma-separated list of people I should greet:</div>

<div>
	<input type="text" placeholder="e.g., John Doe,Betty Smith" bind:value={names} />
	<button on:click={handleClear}>Clear</button>
</div>

{#each splitNames as name}
	<GreetPerson {name} />
{/each}
