<script>
	import { tweened } from 'svelte/motion';
	var y = 50;
	var x = 1;
	var move = 1;
	var original = 2 * 60; // TYPE NUMBER OF SECONDS HERE
	var timer = tweened(original);
	setInterval(function () {
		if ($timer > 1) {
			$timer -= 1;
		}
	}, 1000);
	$: seconds = Math.floor($timer);
	// key event
	function typeKey(e) {
		if (e.keyCode === 37 && x !== 0) {
			x -= move;
		} else if (e.keyCode === 38 && y !== 0) {
			y -= move;
		} else if (e.keyCode === 39) {
			x += move;
		} else if (e.keyCode === 40) {
			y += move;
		}
	}
</script>

<!-- get scroll x and y check if 0 and 0 -->
<p class="text-center">Level 1 : {seconds} seconds left!</p>
<div
	class="overflow-x-scroll overflow-y-scroll  w-[500px] h-[500px] m-auto relative rounded-lg border-2 border-black"
>
	<img
		style="left:{x}px; top:{y}px;"
		src="/car.jpg"
		alt="logo"
		class="w-[30px] h-[30px] absolute rounded-full"
	/>
</div>

<svelte:window on:keydown|preventDefault={typeKey} />
