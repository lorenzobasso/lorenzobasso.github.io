<script lang="ts">
	import { page } from '$app/stores';

	export let to: string;

	$: active = $page.url.pathname.toLowerCase() === to.toLowerCase();
</script>

<a href={to} class:active class="my-auto"><slot>{to}</slot></a>

<style>
	.active {
		opacity: 90%;
		border-bottom: solid 1px;
	}
</style>
