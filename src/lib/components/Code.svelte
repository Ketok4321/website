// NOTE: If i ever will readd this component somewhere, i will need to add font awesome back

<script>
    export let copy_button = false;
</script>

<div>
    <pre><code><slot/></code></pre>
    {#if copy_button}
        <button type="button" onclick="navigator.clipboard.writeText(this.parentNode.querySelector('code').innerText)"><i class="fa-solid fa-copy"></i></button>
    {/if}
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        width: fit-content;
        max-width: 100%;
        margin: 0.5em auto;

        font-size: 1rem;
        background-color: rgb(32, 32, 32);
        color: var(--color-text-light);
        border: 0.2em solid rgb(16, 16, 16);
        border-radius: 0.5em;

        transition: 0.3s;
    }

    pre {
        margin: 0.25em;
        overflow: hidden;
    }

    code {
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    button {
        --color-background: rgb(24, 24, 24);

        margin: 0;
        width: 2em;
        margin-left: 0.25em;
        background-color: var(--color-background);
        color: var(--color-text-light);
        border: none;
        border-left: 0.2em solid var(--color-background);
        font-size: 1em;

        transition: 0.3s;
    }

    button:hover {
        --color-background: rgb(16, 16, 16);
    }

    button:active {
        --color-background: rgb(32, 32, 32);
        transition: 0.1s;
    }

    div:has(button:active) {
        background-color: rgb(48, 48, 48);
        transition: 0.1s;
    }
</style>
