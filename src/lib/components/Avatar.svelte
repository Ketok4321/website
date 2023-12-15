<script>
    export let img;
    export let alt;
    export let size = "3em";
    export let href;
</script>

<div>
    <a href={href}>
        <img style:width={size} style:height={size} src={img} alt={alt} />
        <slot></slot>
    </a>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5em;
    }

    img {
        --color-border: var(--color-background-border);

        border-radius: 50%;
        border: solid var(--color-border) 0.15em;
        background: var(--color-border);
        filter: saturate(90%);
        transition: 0.3s;
    }

    a:hover img {
        --color-border: var(--color-background-0);

        filter: saturate(100%) drop-shadow(0 0 0.5em var(--color-accent-25));;
    }

    :global(p) {
        margin: 0.25em;
        font-size: 0.75em;
    }

    a {
        text-decoration: none;
    }
</style>
