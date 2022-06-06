<script>
	import { goto } from '$app/navigation';
	import { XIcon } from 'svelte-feather-icons';
	import axios from 'axios';

	var searchTerm = '';
	var error = null;
	var searchResults = [];

	$: {
		// searchResults = ['Loading...']
		axios
			.post('/searchResults', {
				searchTerm: searchTerm.trim()
			})
			.then(function (res) {
				if (res.data.error) {
					error = res.data.error;
				}
				searchResults = res.data.searchResults;
			});
	}
</script>

<div class="mr-5 max-h-min w-full min-w-min pb-1 pt-1 md:pt-0 shadow-md md:flex grid">
	<form class="relative w-full">
		<input
			bind:value={searchTerm}
			on:input={function (event) {
				searchTerm = event.target.value;
			}}
			type="text"
			placeholder="search for movies, tv, celebs and more..."
			class="focus:shadow-outline w-full min-w-max bg-white py-2  pl-3 text-sm leading-tight text-black focus:outline-none rounded-md"
		/>
		{#if searchTerm.trim() !== ''}
			<button
				on:click={function () {
					searchTerm = '';
				}}
				class="absolute inset-y-0 right-2 w-10  max-w-min items-center justify-center"
				type="button"
			>
				<XIcon class="h-4 w-4 text-black" />
			</button>
			<div class="absolute px-2 w-full bg-black text-white rounded-b-md">
				<a href={'/harrypotter'} class="block py-2 rounded hover:text-gray-400">
					<!-- {JSON.stringify(searchResults)} -->
					{#if searchResults.length === 0}
						<p>No results found.</p>
					{:else if searchResults.length > 0}
					{#each searchResults as searchResult}
					{searchResult.title}
					{/each}
					{:else}
					<p>Loading..</p>
					{/if}
				</a>
			</div>
		{/if}
	</form>
</div>
