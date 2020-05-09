<script>
  //import { Icon, Button, Checkbox, Menu, Menuitem } from "svelte-mui";

  export let value;

  const browsers = [
    { name: "Safari", value: "Safari" },
    { name: "Firefox", value: "Mozilla Firefox" },
    { name: "Chrome", value: "Google Chrome" },
    { name: "Edge", value: "Microsoft Edge" },
    { name: "Brave", value: "Brave Browser" },
    { name: "Chrome Canary", value: "Google Chrome Canary" },
    { name: "Firefox Developer Edition", value: "Firefox Developer Edition" },
    { name: "Custom...", value: "custom" }
  ];

  let selected = undefined;
  let custom = "";

  $: value = selected !== "custom" ? selected : custom;
</script>

<select name="browser" required bind:value={selected}>
  {#each browsers as browser}
    <option value={browser.value} selected={selected === browser.value}>
      {browser.name}
    </option>
  {/each}
</select>

{#if selected === 'custom'}
  <input
    type="text"
    size="25"
    bind:value={custom}
    required
    placeholder="App name, path or bundleId" />
{/if}
