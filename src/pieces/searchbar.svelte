<script>
	import { goto } from '$app/navigation';
	import { XIcon } from 'svelte-feather-icons';
	import axios from 'axios';

	var searchTerm = '';
	var error = null;
	var searchResults = [];

	$: {
		searchResults = 'loading';
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

<div class="md:flex mr-5 pb-1 md:pb-0 pt-1 md:pt-0 w-full">
	<div class="relative w-full">
		<input
			bind:value={searchTerm}
			on:input={function (event) {
				searchTerm = event.target.value;
			}}
			type="text"
			placeholder="search for movies, tv, celebs and more..."
			class="w-full py-2 pl-3 bg-white rounded-md focus:outline-none text-sm text-black"
		/>
		{#if searchTerm.trim() !== ''}
			<button
				on:click={function () {
					searchTerm = '';
				}}
				class="absolute inset-y-0 right-2"
				type="button"
			>
				<XIcon class="h-4 w-4 text-black" />
			</button>
			<div class="absolute  w-full bg-gray-900 text-white rounded-b-md">
				<!-- {JSON.stringify(searchResults)} -->
				{#if searchResults === 'loading'}
					<p>Loading...</p>
				{:else if searchResults.length === 0}
					<p>No results found.</p>
				{:else if searchResults.length > 0}
					{#each searchResults as searchResult}
						<a
							href={searchResult.showIds
								? '/celeb?celebId=' + searchResult._id
								: '/show?showId=' + searchResult._id}
							on:click={function () {
								searchTerm = '';
							}}
							class="block hover:bg-gray-800 py-2 px-2"
						>
							<div class="items-start justify-start  md:flex ">
								<img
									alt={searchResult.title}
									src={searchResult.pics[0]}
									class="object-cover h-20 mr-2 rounded-sm"
								/>
								<p>{searchResult.title}</p>
							</div>
						</a>
					{/each}
				{/if}
			</div>
		{/if}
	</div>
</div>
