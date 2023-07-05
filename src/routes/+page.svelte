<script>
    import Box from "$lib/components/Box.svelte"
    import Link from "$lib/components/Link.svelte"
	import Flex from "$lib/components/Flex.svelte"
</script>

<Box>
	<h1>Hi! I'm Ketok</h1>
	<p>I like computer stuff</p>
	
	<Flex type="vertical">
		<Link href="https://github.com/Ketok4321" label="Ketok4321" icon="github/f0f0f0" alt="github"/>
	</Flex>
</Box>

<Box>
	<h1><a href="projects">My projects &gt;&gt;&gt;</a></h1>
	<p>Things I made or still work on</p>
</Box>

<Box>
	<h1><a href="self_hosted">Things I self-host &gt;&gt;&gt;</a></h1>
	<p>Things I host myself</p>
</Box>

<Box>
	<h1><a href="other_stuff">Other things &gt;&gt;&gt;</a></h1>
	<p>Just things</p>
</Box>

<Box>
	<h3>Contact</h3>
	<p>Email: <a href="mailto:ketok@ketok.xyz">ketok@ketok.xyz</a></p>
</Box>

<Box>
	<p>Note: This page is very WIP</p>
</Box>