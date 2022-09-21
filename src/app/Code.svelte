<script>
    import { state } from "./state";

    export let selected;
    let slice = state[selected];
</script>

{#await slice?.code}
    <pre><code>getting code...</code></pre>
{:then code} 
    <pre><code>{code.replace(/\/\/#.*/gm, '')}</code></pre>
{/await}