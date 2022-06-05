<script>
	import {
		ShoppingBagIcon,
		ShoppingCartIcon,
		MenuIcon,
		UserIcon,
		TvIcon
	} from 'svelte-feather-icons';
	import { auth } from '@src/utils/store';
	import cookie from 'js-cookie';
	import { goto } from '$app/navigation';
	import SearchBar from '@src/pieces/searchbar.svelte';

	var dropdownSelected = false;
	var menuStatus = false;
	var width;

	function signOut() {
		cookie.remove('auth');
		$auth = {};
		goto('/');
	}
</script>

<svelte:window bind:innerWidth={width} />

<header class="relative min-w-min  py-3  md:flex md:items-center md:justify-between">
	<div class="md:mr-5 mb-1 flex items-center justify-between ">
		<a href="/" class="flex text-orange-600 rounded-md pt-1">
			<TvIcon class="w-6 h-6 mr-1 pt-1" />
			<p class="justify-end text-lg font-bold">Showify</p>
		</a>
		<button
			on:click={() => {
				menuStatus = !menuStatus;
			}}
		>
			<MenuIcon class="mb-1 h-7 w-7 md:hidden" />
		</button>
	</div>

	{#if menuStatus === true || width >= 768}
		<ul
			class="absolute bg-gray-900 w-full md:static list-reset md:flex md:items-center md:justify-end"
		>

			<SearchBar />

			<li class="nav-item pb-1 rounded-b">
				<a href="#" class="hover:text-gray-400">
					<span class="pr-1">Sign</span>in
				</a>
			</li>
		</ul>
	{/if}
</header>
