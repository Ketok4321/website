<script>
    import Box from "$lib/components/Box.svelte"
	import Flex from "$lib/components/Flex.svelte"
    import Title from "$lib/components/Title.svelte"
    import Friend from "./Friend.svelte"
</script>

<Box>
	<Title title="Other stuff"/>
	<p>Just things</p>
</Box>

<Box>
	<Title title="Cool websites" subtitle="(by cool i mean those of my friends)"/>
	<Flex type="horizontal">
        <Friend name="Henior" href="https://henior.kefir.ovh" img="https://henior.kefir.ovh/assets/favicon.ico"/>
        <Friend name="Musaszi" href="https://musaszi7.kefir.ovh" img="https://avatars.akamai.steamstatic.com/6c01eeb1a8ee2bad8bedfe051d3c77aa5f8556ba_full.jpg"/>
        <Friend name="Xila" href="https://xina.pl" img="http://xina.pl/assets/img/avatar.png"/>
    </Flex>
</Box>
