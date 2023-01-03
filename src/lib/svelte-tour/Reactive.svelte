<script>
	let message = '';

	$: reverse = message.split('').reverse().join('');

	const handleClear = () => {
		message = '';
	};
</script>

<input type="text" placeholder="Write your message here" bind:value={message} />
<button on:click={handleClear}>Clear</button>

<p>
	You wrote: &quot;{message}&quot;
</p>

<p>
	But I am Leonardo... so I wrote: &quot;{reverse}&quot;
</p>
