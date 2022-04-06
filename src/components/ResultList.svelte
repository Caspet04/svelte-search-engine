<script>
    import ResultItem from './ResultItem.svelte';

    export let items;
</script>

<div id="result-list">
    {#each items as data}
        <ResultItem data={data} />
    {/each}
</div>

<style>
    #result-list {
        padding-top: 50px;
        padding-left: 50px;
        padding-right: 50px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;

        min-height: 100%;

        background-color: darkgrey;
    }
</style>