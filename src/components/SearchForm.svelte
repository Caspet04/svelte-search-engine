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

<form on:submit|preventDefault={() => {
    $result = search();
}}>
    <input type="text" class="nes-input" bind:value={query} />
    <button type="submit" class="nes-btn">Search</button>
</form>

<style>
    form {
        display: flex;

        width: min-content;
    }

    form input {
        margin-right: 16px;

        width: 250px;
    }
</style>