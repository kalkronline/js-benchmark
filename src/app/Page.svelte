
<script>
    import { state, push, hmr_skip } from "./state";

    import Code from "./Code.svelte";
    import Test from "./Test.svelte";

    import Grid from "./layout/Grid.svelte";
    import Overflow from "./layout/Overflow.svelte";
    
    import { run } from '../TEST_HERE';
    // @ts-ignore dude idk
    import _ from '../TEST_HERE.ts?raw';
    // @ts-ignore
    import code from '../TEST_HERE.ts?url';

    async function get_code() {
        return await (await fetch(code, {cache: "no-store"})).text();
    }

    if (hmr_skip.ct++ % 3 == 0) { // todo: scuffed, fix.
        push({run, code: get_code()})
    }

    let selected = state.length-1;
</script>

<Grid explicit row='1fr' col='minmax(0, 1fr) minmax(0, 5fr)'>
    <Overflow>
        <table width='100%'>
            {#each state as _, id (id)}
                <Test bind:selected id={state.length - 1 - id}/>
            {/each}
        </table>
    </Overflow>
    {#key selected}
        <Code {selected}/>
    {/key}
</Grid>


<style>
    table {
        border-collapse: collapse;
    }

    :global(html), :global(body) {
        height: 100%;
        overflow: hidden;
    }

    :global(*) {
        margin: 0;
        padding: 0;
        line-height: 120%;
    }
</style>