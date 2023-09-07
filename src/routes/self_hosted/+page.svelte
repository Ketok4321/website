<script>
    import Box from "$lib/components/Box.svelte"
    import Code from "$lib/components/Code.svelte"
    import Title from "../../lib/components/Title.svelte"
</script>

<svelte:head>
    <title>Ketok's self-hosted stuff</title>
</svelte:head>

<Box>
	<h1>Things I self-host</h1>
	<p>Things I host myself</p>
</Box>

<Box>
	<Title title="Container registry"/>
	<p>
		I host my own docker regsitry at reg.ketok.xyz.<br>
		At the time of writing this, the only image hosted there is for my discord bot.
	</p>
</Box>

<Box>
	<Title title="Flatpak remote"/>
	<p>I host my own flatpak remote. I only created it for fun and learning purposes, there are no useful things downloadable from there.</p>
	<p>Add the remote to your <del>system</del> user:</p>
	<Code copy_button="true">flatpak remote-add --user --no-gpg-verify gowno http://gowno.ketok.xyz/gowno.flatpakrepo</Code>
	<p>List packages:</p>
	<Code copy_button="true">flatpak remote-ls gowno</Code>
</Box>

<Box>
	<Title title="The end"/>
	<p>
		I actually self-host a few more things, but a lot of them are just for me and my friends.<br>
		There will be more stuff on this page in the future tho.
	</p>
</Box>