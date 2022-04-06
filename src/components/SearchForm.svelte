<script>
    import { writable } from 'svelte/store';

    export let result = writable();

    export let query = "";

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

<style>
    form {
        display: flex;

        border: 1px solid grey;
        border-radius: 10px;
        overflow: hidden;

        width: min-content;
    }

    form * {
        margin: 0;

        outline: none;
        border: none;
        border-radius: 0;
    }

    form input {
        width: 250px;
    }
</style>