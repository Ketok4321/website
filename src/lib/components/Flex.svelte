<script>
    export let type; // "horizontal" | "vertical"
</script>

<div style:display="flex" style:flex-direction={ type == "horizontal" ? "row" : "column" } style:justify-content="center" style:align-items="center" style:gap={ type == "horizontal" ? "0.5em" : "0" }>
    <slot/>
</div>