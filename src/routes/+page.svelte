<script>
	// import data from "$lib/index.js"
	import { CodeBlock, clipboard } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
    export let data;
	let kural;

	if(data.kural){
		kural = data.kural;
	}

</script>

{#if kural}
<div class="title p-40">
	<div>
		<h5 class="h5">
			{kural.paal} 
			<span class="ms-5 p-1 chip variant-filled">
				{kural.number}
			<span>	
		</h5>
	
		<p class="italic">
			{kural.iyal} ( {kural.athigaram} )
		</p>
	</div>

	<div class="kural card p-10 mt-5 relative">
		<div class="bg-gradient-to-r from-red-500 to-yellow-500 p-10">
			<div class="font-bold tracking-wide">
				{kural.line1} <br> {kural.line2}
			</div>

			<div class="mt-10 font-bold tracking-wide">
				{kural.translation}
			</div>
		</div>

		<div class="meaning">
			<div class="mt-10">
				{kural.urai1}
			</div>

			<div class="mt-2 mb-10 italic text-sm">
				-{kural.urai1Author}
			</div>

			<hr class="!border-t-2" />

			<div class="mt-10">
				{kural.urai2}
			</div>

			<div class="mt-2 mb-10 italic text-sm">
				-{kural.urai2Author}
			</div>

			<hr class="!border-t-2" />

			<div class="mt-10">
				{kural.urai3}
			</div>

			<div class="mt-2 mb-10 italic text-sm">
				-{kural.urai3Author}
			</div>
		</div>
	</div>
</div>
{:else}	
<h1>Loading...</h1>
{/if}
