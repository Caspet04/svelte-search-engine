<script>
    import ResultItem from './ResultItem.svelte';

    export let items;
</script>

<div id="result-list" class="nes-container">
    {#each items as data}
        <ResultItem data={data} />
    {/each}
</div>

<style>
    #result-list {
        width: 60%;
    }
</style>