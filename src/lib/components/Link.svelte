<script>
    export let href, icon, label, alt;
</script>

<a href={href}>
    <img height="32" width="32" src="https://cdn.simpleicons.org/{icon}" alt={alt} />
    {label}
</a>

<style lang="scss">
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        
        text-decoration: none;
        font-size: 0.75em;
        color: var(--color-text-light);
    }

    a:hover {
        text-decoration: underline;

        img {
            filter: brightness(2) drop-shadow(0 0 0.15em var(--color-accent-75));
            transition: 0.3s;
        }
    }

    img {
        width: 1.5em;
        height: 1.5em;
        margin: 0.5em;

        transition: 0.5s;
    }
</style>