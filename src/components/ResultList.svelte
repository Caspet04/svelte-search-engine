<script>
    import ResultItem from './ResultItem.svelte';

    export let items;
</script>

<div>
    {#each items as data}
        <ResultItem data={data} />
    {/each}
</div>

<style>

</style>