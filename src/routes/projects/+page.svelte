<script>
    import Box from "$lib/components/Box.svelte"
	import Link from "$lib/components/Link.svelte"
	import Flex from "$lib/components/Flex.svelte"
    import Title from "$lib/components/Title.svelte"
</script>

<Box>
	<h1>My projects</h1>
	<p>Things I made or still work on</p>
</Box>

<Box>
	<Title title="Where Esolang" subtitle="Done" />
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
	<Title title="Advanced Esolang" subtitle="Work in progress" />
	<p>
		An object oriented esolang. The name comes from the fact that it has no primitives.
	</p>
	<Flex type="horizontal">
		<Link href="https://github.com/Ketok4321/AdvancedEsolang" label="Repo" icon="github/f0f0f0" alt="github"/>
	</Flex>
</Box>

<Box>
	<Title title="Wilderness" subtitle="Development paused" />
	<p>
		A minecraft mod that enhances minecraft's forests by adding new, wilder variants of them, like old growth forest, or mixed forest.
	</p>
	<Flex type="horizontal">
		<Link href="https://github.com/Ketok4321/wilderness" label="Repo" icon="github/f0f0f0" alt="github"/>
	</Flex>
</Box>

<Box>
	<Title title="The end" subtitle="That's all" />
	<p>
		Well, I have also created a few other small things, and made some minor contributions to other projects, but I don't think they are that noteworthy.
		If you want to see them, you can check my <a href="https://github.com/Ketok4321">GitHub</a> profile.
	</p>
</Box>