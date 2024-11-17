<script lang="ts">
  import { onMount } from "svelte";
  import { get } from 'svelte/store';
  import mermaid from "mermaid";
  import { fade } from "svelte/transition";
  import Loading from "$lib/components/markdown/loading.svelte";
  import { mermaidRendered } from "$lib/stores";
  
  export let height = 400;

  onMount(async () => {
    if (!get(mermaidRendered)) {
      mermaid.initialize({ theme: 'neutral', startOnLoad: false });
      await mermaid.run();
      mermaidRendered.set(true);
    }
  });
</script>

<div class="container" style:height={$mermaidRendered ? 'auto' : `${height}px`}>
  {#if $mermaidRendered}
    <pre in:fade={{ delay: 1000, duration: 300 }} class="mermaid" style:height={`${height}px`} style:width={`${height}px`}>
      <slot />
    </pre>
  {:else}
    <div out:fade={{ duration: 300 }} class="placeholder" style:height={`${height}px`} style:width={`${height}px`}>
      <Loading loading={true} />
    </div>
  {/if}
</div>

<style lang="scss">
  .mermaid {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .placeholder {
    position: absolute;
    display: flex;
    flex-grow: 1;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
