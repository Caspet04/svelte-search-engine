<script>
	import { writable } from 'svelte/store';
	let result = writable();

	import SearchForm from './components/SearchForm.svelte';
</script>

<main>
	<SearchForm bind:result={result}/>

	{#await $result}
		Wait
	{:then result}
		{JSON.stringify(result)}
	{:catch error}
		{JSON.stringify(error)}
	{/await}
</main>

<style>
	:global(body) {
		padding: 0;
		margin: 0;
	}
</style>