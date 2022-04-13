<script>
	import './css/colorPalette.css';

	import SearchForm from './components/SearchForm.svelte';
	import ResultList from './components/ResultList.svelte';

	let result = undefined;
	let query = "";

	const starSizeProbability = {
		huge: 0.0,
		big: 0.0,
		medium: 0.05,
		small: 0.25,
		tiny: 0.7
	};

	let scrollY;
	let scrollRates = [
		0.2, 0.15, 0.1
	];

	function scrollCalc(n) {
		return n*4;
	}
</script>

<svelte:window bind:scrollY={scrollY}/>

<main>
	<div id="star-layer-background" class="background pixel-art" />
	<div id="star-layer-1"          class="background pixel-art" style="background-position: top -{scrollCalc(scrollY*scrollRates[0])}px left 0;"/>
	<div id="star-layer-2"          class="background pixel-art" style="background-position: top -{scrollCalc(scrollY*scrollRates[1])}px left 0;"/>
	<div id="star-layer-3"          class="background pixel-art" style="background-position: top -{scrollCalc(scrollY*scrollRates[2])}px left 0;"/>

	<div id="bar">
		{#if $result != undefined}
			<SearchForm bind:result bind:query />
			<img class="small-icon pixel-art" src="./assets/SmallTelescopeIcon/small_telescope_icon.png" width="16" height="16" alt="">
		{/if}
	</div>

	{#if $result == undefined}
		<div class="center-both">
			<div id="search-container" class="nes-container is-dark">
				<h1 id="logo-header">
					Telescope
					<img class="large-icon pixel-art" src="./assets/LargeTelescopeIcon/large_telescope_icon_1.png" width="32" height="32" alt="">
				</h1>
				<SearchForm bind:result bind:query />
			</div>
		</div>
	{:else}
		{#await $result}
			<!-- Displayed while waiting for a result -->
			<div id="loading-star-container">
				<img id="loading-star" class="pixel-art" src="./assets/Loading Star/loading_star.gif" alt="Wait">
			</div>
		{:then result}
			<!-- Displayed once a result has been found, if it is a "legal" result -->
			{#if result && "data" in result && "items" in result.data}
				<div class="center fill-height">
					<ResultList items={result.data.items} />
				</div>
			{/if}
		{:catch error}
			<!-- Displayed if an error has occurred -->
			<h1>An <span style="color:red;">Error</span> Has Ocurred!</h1>
			{JSON.stringify(error)}
		{/await}
	{/if}
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	:global(main) {
		width: 100%;
		height: 100%;
	}

	.background {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		background-size: calc(512px * 4) calc(512px * 4);
	}

	#star-layer-background {
		background-image: url("../assets/Stars/Background_star_1.png");
		background-repeat: repeat;
		z-index: -200;
	}
	
	#star-layer-1 {
		background-image: url("../assets/Stars/Layer 1_star_1.png");
		background-repeat: repeat;
		z-index: -190;
	}

	#star-layer-2 {
		background-image: url("../assets/Stars/Layer 2_star_1.png");
		background-repeat: repeat;
		z-index: -190;
	}

	#star-layer-3 {
		background-image: url("../assets/Stars/Layer 3_star_1.png");
		background-repeat: repeat;
		z-index: -190;
	}

	#logo-header {
		margin-bottom: 16px;
	}

	#bar {
		padding: 8px;
		display: flex;
		align-content: center;

		height: 80px;

		background-color: var(--nes-grey);
		border-bottom: 4px solid black;
	}

	#bar .small-icon {
		margin-left: 8px;
	}

	#search-container {
		background-color: var(--nes-grey);
	}

	.small-icon {
		width: calc(16px * 4);
		height: calc(16px * 4);
	}

	#loading-star {
		width: calc(31px * 4);
		height: calc(31px * 4);
	}

	.large-icon {
		width: calc(32px * 4);
		height: calc(32px * 4);
	}
	
	.pixel-art {
		image-rendering: -moz-crisp-edges;
		image-rendering: -webkit-crisp-edges;
		image-rendering: pixelated;
		image-rendering: crisp-edges;
	}

	.center-both {
		height: calc(100% - 80px);
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.center {
		width: 100%;

		display: flex;
		justify-content: center;
	}

	#loading-star-container {
		width: 100%;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>