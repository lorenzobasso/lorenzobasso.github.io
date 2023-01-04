<script lang="ts">
	import { page } from '$app/stores';

	export let to: string;

	$: active = $page.url.pathname.toLowerCase() === to.toLowerCase();
</script>

<a>cya</a>
