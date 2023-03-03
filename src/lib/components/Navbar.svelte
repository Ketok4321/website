<nav>
    <a href="projects">Projects</a>
    <a href="self_hosted">Self Hosted</a>
    <a href="/" id="title">ketok.xyz</a>
    <a href="todo">About Me</a>
    <a href="todo">Other Stuff</a>
</nav>

<style>
    nav {
        width: 100%;
        height: 3em;

        background-color: var(--color-background-85);
        backdrop-filter: blur(0.5rem);
        border-bottom: 0.5rem solid var(--color-background-100);
        box-shadow: 0 0.75rem 1rem rgba(0, 0, 0, 0.4);

        display: flex;
        justify-content: center;
        gap: 1em;
    }

    a {
        width: 8em;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    a:not(#title):hover {
        background-color: var(--color-background-50);
    }

    #title {
        color: var(--color-accent);

        font-style: italic;
        font-size: 1.25em;
        font-weight: 600;
        letter-spacing: 0.2em;

        text-shadow: 0.1em 0.1em 0 rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 45em) {
        nav a:not(#title) {
            display: none;
        }
    }
</style>