<script>
	import '../css/colorPalette.css';

    import ResultItem from './ResultItem.svelte';

    export let items;
</script>

<div id="result-list" class="!nes-container">
    {#each items as data}
        <ResultItem data={data} />
    {/each}
</div>

<style>
    #result-list {
        margin-top: 16px;

        width: 100%;
        max-width: 700px;
    }
</style>