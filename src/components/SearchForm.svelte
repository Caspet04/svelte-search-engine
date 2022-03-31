<script>
    import { writable } from 'svelte/store';

    export let result = writable();

    let query = "";

    async function search() {
        const response = await fetch(`https://demo.dataverse.org/api/search?q=${query}`);
        const jsonResponse = await response.json();

        if (response.ok) {
            return jsonResponse;
        } else {
            throw new Error(jsonResponse);
        }
    }
</script>

<form id="search-form" on:submit|preventDefault={() => {
    $result = search();
}}>
    <input type="text" bind:value={query} />
    <button type="submit">🔎︎</button>
</form>