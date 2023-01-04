<script>
	import DarkMode from '$lib/common/buttons/DarkMode.svelte';
	import NavLink from '$lib/common/links/NavLink.svelte';
	import { title } from '$lib/metadata';
</script>

<header class="text-inherit flex w-full justify-center py-2">
	<div class="flex w-full max-w-6xl justify-between align-middle">
		<a href="/" class="hover:cursor-pointer"><h2 class="text-2xl font-semibold">{title}</h2></a>
		<div class="flex gap-4">
			<nav class="flex gap-2  align-middle">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
			</nav>
			<DarkMode />
		</div>
	</div>
</header>
