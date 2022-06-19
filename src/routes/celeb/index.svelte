<script>
	import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, MinusIcon } from 'svelte-feather-icons';
	import { auth } from '@src/utils/store';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import cookie from 'js-cookie';

	var celeb = null;
	var shows = null;
	var tab = 0;
	var error = null;
	var celebId = $page.url.searchParams.get('celebId');

	onMount(async function () {
		var res = await axios.post($page.url.pathname, {
			celebId
		});
		if (res.data.error) {
			error = res.data.error;
		}
		celeb = res.data.celeb;
		shows = res.data.shows;
	});

	function leftArrow() {
		if (tab - 1 >= 0) {
			tab = tab - 1;
			return;
		}
		tab = product.images.length - 1;
	}

	function rightArrow() {
		if (tab + 1 < product.images.length) {
			tab = tab + 1;
			return;
		}
		tab = 0;
	}
</script>

<svelte:head><title>{celeb && celeb.title} - Showify</title></svelte:head>

{#if celeb}
	<p class="text-3xl">{celeb.title}</p>
	<p class="">{celeb.desc}</p>
	<p class="text-3xl">Shows</p>
	<div class="flex">
		{#each shows as show}
			<a href={'/show?showId=' + show._id} class="mr-10 hover:text-gray-400">{show.title}</a>
		{/each}
	</div>
{:else}
	<h1>Loading...</h1>
{/if}
