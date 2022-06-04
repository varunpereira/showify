<script>
	import { MenuIcon } from 'svelte-feather-icons';
	import { goto } from '$app/navigation';
	var menuStatus = false;
	var width;
</script>

<svelte:window bind:innerWidth={width} />

<header class="relative mb-10 min-w-min bg-white py-4 md:flex md:items-center md:justify-between">
	<div class="md:mr-5 mb-1 px-0 flex items-center justify-between">
		<h1 class="text-xl">
			<a href="/" class="flex font-bold no-underline hover:text-gray-400">
				<img src="/favicon.jpg" alt="logo" class="rounded-sm w-5 h-5 mt-1 mr-2" />
				<span class="pb-1">Ramify</span>
			</a>
		</h1>
		<button
			on:click={() => {
				menuStatus = !menuStatus;
			}}
		>
			<MenuIcon class="mb-1 h-7 w-7 hover:text-gray-400 md:hidden" />
		</button>
	</div>
	{#if menuStatus === true || width >= 768}
		<ul
			class="absolute bg-white w-full md:static list-reset md:flex md:items-center md:justify-end"
		>
			<li class="nav-item">
				<a href="#projects" class="hover:text-gray-400">
					<span class="pr-1">About</span>
				</a>
			</li>
			<li class="nav-item md:pl-5">
				<a href="#skills" class="hover:text-gray-400">
					<span class="pr-1">Contact</span>
				</a>
			</li>
		</ul>
	{/if}
</header>
