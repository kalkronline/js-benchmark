<script>
    import { state } from "./state";
    import { test } from "./utils";

    export let id;
    export let selected;
    let slice = state[id];

    function set_result(res) {
        res = Math.floor(res * 1000).toString();

        if (res.length >= 4) {
            res = res.slice(0, -3) + '.' + res.slice(-3) + 'ms'
        } else {
            res = res + 'μs'
        }

        slice.result = res;
    }

    function log_err(e) {
        console.error(e);
        return '';
    }
</script>

{#if slice.result}
    <tr class:sel={id == selected} on:click={() => selected = id}>
        <td width="auto" style='white-space: nowrap'>Benchmark {id + 1}</td>
        <td width="100%"></td>
        <td width="auto" style='text-align: right'>{slice.result}</td>
    </tr>
{:else}
{#await test(slice.run)}
    <tr>
        <td width="auto" style='white-space: nowrap'>Running Benchmark...</td>
        <td width="100%"></td>
    </tr>
{:then val} 
    {set_result(val)}
{:catch e}
    <tr class:sel={id == selected} on:click={() => selected = id}>
        {log_err(e)}
        <td width="auto" style='white-space: nowrap'>Benchmark {id+1} Failed</td>
        <td width="100%"></td>
        <td width="auto"></td>
    </tr>
{/await}
{/if}

<style>
    .sel {
        background-color: lightgray;
        
    }

    tr > * {
        padding: 3px;
        user-select: none;
    }

</style>