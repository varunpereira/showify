<script>
	import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, MinusIcon } from 'svelte-feather-icons';
	import { auth } from '@src/utils/store';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import cookie from 'js-cookie';

	var show = null;
	var celebs = null;
	var tab = 0;
	var error = null;
	var showId = $page.url.searchParams.get('showId');

	onMount(async function () {
		var res = await axios.post($page.url.pathname, {
			showId
		});
		if (res.data.error) {
			error = res.data.error;
		}
		show = res.data.show;
		celebs = res.data.celebs;
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

<svelte:head><title>{show && show.title} - Showify</title></svelte:head>

{#if show}
	<p class="text-3xl">{show.title}</p>
	<div class="flex justify-between">
		<p class="">{show.relDate + ' ' + show.cert + ' ' + show.length + ' mins'}</p>
		<p class="">{show.rating} Stars</p>
	</div>
	<div class="flex">
		{#each show.cat as cat}
			<p class="mr-10">{cat}</p>
		{/each}
	</div>
	<img alt={show.title} src={show.pics[0]} class="object-cover h-96 mr-2 rounded-sm" />
	<p class="">{show.desc}</p>
	<p class="text-3xl">Cast</p>
	<div class="flex">
		{#each celebs as celeb}
			<a href={'/celeb?celebId=' + celeb._id} class="mr-10 hover:text-gray-400"
				><div class="items-start justify-start  md:flex ">
					<img
						alt={celeb.title}
						src={celeb.pics[0]}
						class="object-cover h-20 mr-2 rounded-sm"
					/>
					<p>{celeb.title}</p>
				</div>
			</a>
		{/each}
	</div>
{:else}
	<h1>Loading...</h1>
{/if}
