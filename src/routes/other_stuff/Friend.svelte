<script>
    export let name;
    export let href;
    export let img;
</script>

<div>
    <a href={href}>
        <img src={img} alt="{name}'s profile picture" />
        <p>{name}</p>
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

        width: 3em;
        height: 3em;
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

    p {
        margin: 0.25em;
        font-size: 0.75em;
    }

    a {
        text-decoration: none;
    }
</style>