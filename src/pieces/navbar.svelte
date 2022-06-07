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

<div class="relative md:flex md:items-center md:justify-between py-3 ">
	<div class="flex items-center justify-between md:mr-5 mb-1 ">
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
		<div class="absolute md:static md:flex md:items-center md:justify-end bg-gray-900 w-full">
			<SearchBar />

			<a href="" class="pb-1 pt-2 hover:text-gray-400 flex-none"> Sign In </a>
		</div>
	{/if}
</div>
