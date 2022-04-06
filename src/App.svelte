<script>
	import SearchForm from './components/SearchForm.svelte';
	import ResultList from './components/ResultList.svelte';

	import { writable } from 'svelte/store';
	let result = writable();
	let query = "";
</script>

<main>
	<div id="background"></div>

	<div id="bar">
		{#if $result != undefined}
			<SearchForm bind:result={result} bind:query={query} />
		{/if}
	</div>

	{#if $result == undefined}
		<div class="center fill-height">
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
	:global(main) {
		height: 100%;
	}

	:global(body) {
		padding: 0;
		margin: 0;
	}

	#background {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		animation: gradient 10s ease infinite;
		background-size: 400% 400%;

		z-index: -10;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#bar {
		display: flex;
		flex-direction: column;
		justify-content: center;

		position: sticky;
		top: 0;
		bottom: calc(100vh - 40px);
		left: 0;
		right: 0;

		height: 40px;
		max-height: 40px;

		background-color: grey;
	}

	.fill-height {
		height: calc(100% - 40px);
	}
</style>