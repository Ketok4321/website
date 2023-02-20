<div>
    <slot/>
</div>

<style>
    div {
        width: 100%;

        background-color: var(--color-background-75);
        backdrop-filter: blur(0.5rem);
        border-top: 0.5rem solid var(--color-background-100);
        border-bottom: 0.5rem solid var(--color-background-100);

        text-align: center;
        color: var(--color-text-light);
        margin: 10vh 0;
        padding: 1em 0;
    }

    div :global(h1) {
        font-size: 1.5em;
        margin-top: 0;
    }

    div :global(p) {
        width: 100%;
        max-width: 40em;
        margin: 1em auto;
        font-size: 0.75em;
    }
</style>