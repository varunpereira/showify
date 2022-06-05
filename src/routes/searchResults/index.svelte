<script>
	import axios from 'axios';
	import Product from '@src/pieces/product.svelte';
	import { auth } from '@src/utils/store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import cookie from 'js-cookie';
	import { goto } from '$app/navigation';

	var searchResults = null;
	var error = null;
	var searchTerm = $page.url.searchParams.get('searchTerm').trim();

	onMount(async function () {
		if (cookie.get('auth')) {
			$auth = JSON.parse(cookie.get('auth'));
		}
		getSearchResults();
	});

	async function getSearchResults() {
		var res = await axios.post($page.url.pathname, {
			searchTerm: $page.url.searchParams.get('searchTerm').trim()
		});
		if (res.data.error) {
			error = res.data.error;
		}
		searchResults = res.data.products;
	}

	$: if (searchTerm !== $page.url.searchParams.get('searchTerm').trim()) {
		getSearchResults();
	}
</script>

<svelte:head><title>Search Results</title></svelte:head>

{#if searchResults}
	<div class="flex flex-wrap text-white">
		{#if searchResults.length === 0}
			<h2>No results found.</h2>
		{:else}
			{#each products as product}
				<Product {product} />
			{/each}
		{/if}
	</div>
{:else}
	<h1>Loading...</h1>
{/if}
