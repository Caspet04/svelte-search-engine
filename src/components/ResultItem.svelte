<script>
    export let data;

    function clampLength(maxLength, text) {
        return text.length < maxLength ? text : text.substring(0, maxLength).split(' ').slice(0, -1).join(' ') + ' ...';
    }
</script>

<div class="result-item nes-container with-title">
    <p class="title"><a href={data.url}>{data.name}</a></p>
    <div class="description">
        {#if data.description}
            {clampLength(150, data.description)}
        {:else}
            <i>No description found</i>
        {/if}
    </div>
    <div class="publishing">
        Published {data.published_at.split('T')[0]}
        {#if data.publisher}
            by {data.publisher}
        {/if}
    </div>
</div>

<style>
    .nes-container.with-title .title {
        display: block;

        color: blue;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        width: min-content;
        max-width: 100%;
    }

    .result-item:not(:last-child) {
        margin-bottom: 32px;
    }
</style>