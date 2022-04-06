<script>
	import SearchForm from './components/SearchForm.svelte';
	import ResultList from './components/ResultList.svelte';

	import { writable } from 'svelte/store';
	let result = writable();
	let query = "";
</script>

<main>
	<div id="background"></div>
	<div id="bar" class="nes-container">
		{#if $result != undefined}
			<SearchForm bind:result={result} bind:query={query} />
		{/if}
	</div>
	{#if $result == undefined}
		<div class="center-both fill-height">
			<SearchForm bind:result={result} bind:query={query} />
		</div>
	{:else}
		<div class="center fill-height">
			{#await $result}
				<!-- Displayed while waiting for a result -->
				Wait
			{:then result}
				<!-- Displayed once a result has been found, if it is a "legal" result -->
				{#if result && "data" in result && "items" in result.data}
					<ResultList items={result.data.items} />
				{/if}
			{:catch error}
				<!-- Displayed if an error has occurred -->
				<h1>An <span style="color:red;">Error</span> Has Ocurred!</h1>
				{JSON.stringify(error)}
			{/await}
		</div>
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

	#bar {
		padding: 8px;
		display: flex;
		flex-direction: column;
		justify-content: center;

		height: 72px;
	}

	.center-both {
		height: 100%;
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
</style>