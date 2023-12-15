<script>
    import Box from "$lib/components/Box.svelte"
    import Link from "$lib/components/Link.svelte"
	import Flex from "$lib/components/Flex.svelte"
	import Avatar from "$lib/components/Avatar.svelte"
</script>

<svelte:head>
    <title>Ketok's website</title>
</svelte:head>

<Box>
    <div style:margin-top="1em">
        <Avatar img="/img/avatar.png" alt="It's me!" href="/" size="4em"/>
    </div>

	<h1 style:margin-top="0">Hi! I'm Ketok</h1>
	<p>I'm a silly creature that likes computer stuff</p>
	
	<Flex type="vertical">
		<Link href="https://github.com/Ketok4321" label="Ketok4321" icon="github/f0f0f0" alt="github"/>
	</Flex>
</Box>

<Box>
	<h2><a href="projects">My projects &gt;&gt;&gt;</a></h2>
	<p>Things I made or still work on</p>
</Box>

<Box>
	<h2><a href="https://playground.ketok.xyz">The playground &gt;&gt;&gt;</a></h2>
	<p>Run some of my projects, all inside a linux virtual machine running inside your browser!</p>
</Box>

<Box>
	<h2><a href="other_stuff">Other things &gt;&gt;&gt;</a></h2>
	<p>Just things</p>
</Box>

<Box>
	<h2>Contact</h2>
	<p>Email: <a href="mailto:ketok@ketok.xyz">ketok@ketok.xyz</a></p>
</Box>
