<script>
    import Box from "$lib/components/Box.svelte"
    import Flex from "$lib/components/Flex.svelte"
    import Title from "$lib/components/Title.svelte"
    import Friend from "./Friend.svelte"
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
        <Friend name="Henior" href="https://kefir.ovh" img="https://kefir.ovh/assets/favicon.ico"/>
        <Friend name="Fira" href="https://fira.jest.gay" img="https://fira.jest.gay/sog/images (11).jpg"/>
    </Flex>
</Box>
