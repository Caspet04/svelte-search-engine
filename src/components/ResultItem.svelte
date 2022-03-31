<script>
    export let data;

    function clampLength(maxLength, text) {
        return text.length < maxLength ? text : text.substring(0, maxLength).split(' ').slice(0, -1).join(' ') + ' ...';
    }
</script>

<div class="item">
    <a class="url" href={data.url}>{data.name}</a>
    {#if data.description}
        <div class="description">
            {clampLength(150, data.description)}
        </div>
    {/if}
    <h6 class="publishing">
        Published {data.published_at.split('T')[0]}
        {#if data.publisher}
            by {data.publisher}
        {/if}
    </h6>
</div>

<style>

</style>