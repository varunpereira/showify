<script>
	import { goto } from '$app/navigation';
	import { XIcon } from 'svelte-feather-icons';

	var searchTerm = '';
	$: {
		// post req here and use searchterm.trim()
		console.log(searchTerm);
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
		{#if searchTerm !== ''}
			<button
				on:click={function () {
					searchTerm = '';
				}}
				class="absolute inset-y-0 right-2 w-10  max-w-min items-center justify-center"
				type="button"
			>
				<XIcon class="h-4 w-4 text-black" />
			</button>
			<div class="absolute pl-3 w-full bg-black text-white rounded-b-md">
				<a href={'/harrypotter'} class="block py-2 rounded hover:text-gray-400"
					>harry potter</a
				>
			</div>
		{/if}
	</form>
</div>
