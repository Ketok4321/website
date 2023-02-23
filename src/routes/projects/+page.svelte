<script>
    import Box from "$lib/components/Box.svelte"
	import Link from "$lib/components/Link.svelte"
	import Flex from "$lib/components/Flex.svelte"
</script>

<Box>
	<h1>My projects</h1>
	<p>Things I made or still work on</p>
</Box>

<Box>
	<h1>Where Esolang</h1>
	<p>
		An esolang where memory is accessible only by using "WHERE" statement.
		For example WHERE &lt;2 SET 0 sets all memory cells with value lower than 2 to 0.
	</p>
	<Flex type="horizontal">
		<Link href="https://github.com/Ketok4321/WhereEsolang" label="Repo" icon="github/f0f0f0" alt="github"/>
		<Link href="https://esolangs.org/wiki/Where" label="Wiki" icon="wikipedia/f0f0f0" alt="wiki"/>
	</Flex>
</Box>

<Box>
	<p>WIP</p>
</Box>