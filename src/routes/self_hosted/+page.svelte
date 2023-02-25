<script>
    import Box from "$lib/components/Box.svelte"
    import Code from "$lib/components/Code.svelte"
</script>

<Box>
	<h1>Things I self-host</h1>
	<p>Things I self-host on my homeserver.</p>
</Box>

<Box>
	<h1>Flatpak remote (repo)</h1>
	<p>I host my own flatpak remote. I only created it for fun and learning purposes, there are no useful things downloadable from there.</p>
	<p>Add the remote to your <del>system</del> user:</p>
	<Code>flatpak remote-add --user --no-gpg-verify gowno http://gowno.ketok.xyz/gowno.flatpakrepo</Code>
	<p>List packages:</p>
	<Code>flatpak remote-ls gowno</Code>
</Box>

<Box>
	<p>WIP</p>
</Box>