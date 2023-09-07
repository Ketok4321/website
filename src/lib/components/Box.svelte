<div class="box">
    <hr/>
    <div class="contents">
        <slot/>
    </div>
    <hr/>
</div>

<style lang="scss">
    .box {
        width: 100%;
        margin: 10vh 0;

        background-color: var(--color-background-2);
        backdrop-filter: blur(0.5rem);
        border-top: 0.5rem solid var(--color-background-border);
        border-bottom: 0.5rem solid var(--color-background-border);
    }

    .contents {
        width: 90%;
        max-width: 25em;
        margin: 0.5em auto;

        text-align: center;
        color: var(--color-text-light);

        > :global(:first-child) {
            margin-top: 0;
        }

        > :global(:last-child) {
            margin-bottom: 0;
        }

        > :global(h1) {
            font-size: 1.5em;
        }

        > :global(p) {
            margin: 1em auto;
            font-size: 0.7em;
        }
    }

    hr {
        margin: 0.125em;
        border: 0.075em solid var(--color-background-border);
        opacity: 30%;
    }
</style>