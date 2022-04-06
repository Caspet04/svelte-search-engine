<script>
    export let data;

    function clampLength(maxLength, text) {
        return text.length < maxLength ? text : text.substring(0, maxLength).split(' ').slice(0, -1).join(' ') + ' ...';
    }
</script>

<div class="item">
    <a class="url" href={data.url}>{data.name}</a>
    <div class="description">
        {#if data.description}
            {clampLength(150, data.description)}
        {:else}
            <i>No description found</i>
        {/if}
    </div>
    <h6 class="publishing">
        Published {data.published_at.split('T')[0]}
        {#if data.publisher}
            by {data.publisher}
        {/if}
    </h6>
</div>

<style>
    .item {
        width: 800px;

        border: 1px solid black;
    }

    .item:not(:last-child) {
        margin-bottom: 20px;
    }

    h6 {
        margin-top: 2px;
    }
</style>