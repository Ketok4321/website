<script>
    import Box from "$lib/components/Box.svelte"
    import Flex from "$lib/components/Flex.svelte"
    import Title from "$lib/components/Title.svelte"
    import Avatar from "$lib/components/Avatar.svelte"
</script>

<svelte:head>
    <title>Ketok's other stuff</title>
</svelte:head>

<Box>
	<Title title="Other stuff"/>
	<p>Just things</p>
</Box>

<Box>
	<Title title="Cool websites" subtitle="(by cool i mean those of my friends)"/>
	<Flex type="horizontal">
        <Avatar href="https://kefir.ovh" img="https://kefir.ovh/assets/favicon.ico" alt="Henior's profile picture">
            <p>Henior</p>
        </Avatar>
        <Avatar href="https://fira.jest.gay" img="https://fira.jest.gay/sog/images (11).jpg" alt="Fira's profile picture">
            <p>Fira</p>
        </Avatar>
    </Flex>
</Box>
