<div class="box">
    <div class="contents">
        <slot/>
    </div>
</div>

<style lang="scss">
    .box {
        width: 100%;
        margin: 10vh 0;
        padding: 1em 0;

        background-color: var(--color-background-2);
        backdrop-filter: blur(0.5rem);
        border-top: 0.5rem solid var(--color-background-border);
        border-bottom: 0.5rem solid var(--color-background-border);
    }

    .contents {
        width: 90%;
        max-width: 40em;
        margin: 0 auto;

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
            font-size: 0.75em;
        }
    }
</style>