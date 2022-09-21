
<script lang='ts'>
    export let row;
    export let col;
    export let explicit = false;

    export let style = '';

    if (explicit) 
        style = `grid: ${row} / ${col}; ${style}`
    else
        style = `grid: repeat(${row}, minmax(0, 1fr)) / repeat(${col}, minmax(0, 1fr)); ${style}`
</script>

<div {style}>
    <slot/>
</div>

<style>
    /* the grid */
    div {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        /* grid stuff */
        display: grid;
    }
</style> 