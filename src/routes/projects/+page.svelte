<script>
    import Box from "$lib/components/Box.svelte"
	import Link from "$lib/components/Link.svelte"
	import Flex from "$lib/components/Flex.svelte"
    import Title from "$lib/components/Title.svelte"
</script>

<svelte:head>
    <title>Ketok's projects</title>
</svelte:head>

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
	<Title title="Speedtest" subtitle="Done" />
	<p>
		A <a href="https://librespeed.org">librespeed</a> client using gtk4+libadwaita.
	</p>
	<Flex type="horizontal">
		<Link href="https://github.com/Ketok4321/speedtest" label="Repo" icon="github/f0f0f0" alt="github"/>
		<Link href="https://flathub.org/apps/xyz.ketok.Speedtest" label="Install" icon="flatpak/f0f0f0" alt="flathub"/>
	</Flex>
</Box>

<Box>
	<Title title="Wilderness" subtitle="Alpha released" />
	<p>
		A minecraft mod that enhances minecraft's forests by adding new, wilder variants of them.
	</p>
	<Flex type="horizontal">
		<Link href="https://github.com/Ketok4321/wilderness" label="Repo" icon="github/f0f0f0" alt="github"/>
		<Link href="https://modrinth.com/mod/ketok-wilderness" label="Download" icon="modrinth/f0f0f0" alt="modrinth"/>
	</Flex>
</Box>

<Box>
	<Title title="Advanced Esolang" subtitle="Development paused" />
	<p>
		An object oriented esolang. The name comes from the fact that it has no primitives.
	</p>
	<Flex type="horizontal">
		<Link href="https://github.com/Ketok4321/AdvancedEsolang" label="Repo (Legacy)" icon="github/f0f0f0" alt="github"/>
		<Link href="https://github.com/Ketok4321/advrs" label="Repo (Rewrite)" icon="github/f0f0f0" alt="github"/>
	</Flex>
</Box>

<Box>
	<Title title="The end" />
	<p>
		I have also created a few other small things, and made some minor contributions to a few FOSS projects, but I don't think they are that noteworthy.<br>
		If you want to see them, check out my <a href="https://github.com/Ketok4321">GitHub</a> profile.
	</p>
</Box>
