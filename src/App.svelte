<script>
	import SearchForm from './components/SearchForm.svelte';
	import ResultList from './components/ResultList.svelte';

	import { writable } from 'svelte/store';
	let result = writable();
</script>

<main>
	<SearchForm bind:result={result}/>

	{#await $result}
		<!-- Displayed while waiting for a result -->
		Wait
	{:then result}
		<!-- Displayed once a result has been found, if it is a "legal" result -->
		{#if result && "data" in result && "items" in result.data}
			<ResultList items={result.data.items} />
			{console.log(result.data.items)}
		{/if}
	{:catch error}
		<!-- Displayed if an error has occurred -->
		<h1>An <span style="color:red;">Error</span> Has Ocurred!</h1>
		{JSON.stringify(error)}
	{/await}
</main>

<style>
	:global(body) {
		padding: 0;
		margin: 0;
	}
</style>