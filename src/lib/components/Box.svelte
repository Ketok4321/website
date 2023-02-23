<div class="box">
    <div class="contents">
        <slot/>
    </div>
</div>

<style>
    .box {
        width: 100%;
        margin: 10vh 0;
        padding: 1em 0;

        background-color: var(--color-background-75);
        backdrop-filter: blur(0.5rem);
        border-top: 0.5rem solid var(--color-background-100);
        border-bottom: 0.5rem solid var(--color-background-100);
    }

    .contents {
        width: 90%;
        max-width: 40em;
        margin: 0 auto;

        text-align: center;
        color: var(--color-text-light);
    }

    .contents > :global(:first-child) {
        margin-top: 0;
    }

    .contents > :global(:last-child) {
        margin-bottom: 0;
    }

    .box :global(h1) {
        font-size: 1.5em;
    }

    .box :global(p) {
        margin: 1em auto;
        font-size: 0.75em;
    }
</style>