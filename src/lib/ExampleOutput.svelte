<p class="output-label">Output:</p>

<div class="code-output">
	<slot />
</div>

<style>
	.output-label {
		color: white;
		background: linear-gradient(to right, var(--pd), var(--p));
		font-family: var(--font-mono);
		margin-bottom: 0;
		padding: 0.5rem;
	}

	.code-output {
		color: black;
		background-color: whitesmoke;
		padding: 0.5rem;
	}
</style>
