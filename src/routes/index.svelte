<script>
	import { onMount } from 'svelte';
	import { auth } from '@src/utils/store';
	import cookie from 'js-cookie';
	import { goto } from '$app/navigation';
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';

	var tab = 1;
	var imagesLength = 4;

	onMount(async function () {
		if (cookie.get('auth')) {
			$auth = JSON.parse(cookie.get('auth'));
		}
	});

	function leftArrow() {
		if (tab > 1) {
			tab -= 1;
			return;
		}
		tab = imagesLength;
	}

	function rightArrow() {
		if (tab < imagesLength) {
			tab += 1;
			return;
		}
		tab = 1;
	}
</script>

<svelte:head><title>Home</title></svelte:head>

<div>
	<div class="">
		<img class="w-full rounded-lg" src={'/img' + tab + '.jpg'} alt={'image'} />
		<div class="flex justify-center">
			<button on:click={leftArrow} class="inset-y-0 left-0" type="button">
				<ChevronLeftIcon class="h-6 w-6 text-white bg-black rounded-full" />
			</button>
			<button on:click={rightArrow} class="nset-y-0 right-0" type="button">
				<ChevronRightIcon class="h-6 w-6 text-white bg-black rounded-full" />
			</button>
		</div>
	</div>
</div>
