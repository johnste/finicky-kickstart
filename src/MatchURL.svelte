<script>
  import { convertWildcardToRegex } from "./utils";

  const urls = [];

  const empty = {
    type: "hostname",
    value: ""
  };

  let values = [{ ...empty }];

  $: {
    const urls = values.filter(v => v.type);
    const domains = values.filter(v => !v.type);
  }
</script>

<button on:click={() => (values = [...values, { ...empty }])}>Add url</button>

{#each values as value}
  <label>
    Wildcard pattern
    <input type="text" bind:value={value.pattern} />
  </label>
  <label>
    <input type="radio" value="url" bind:group={value.type} />
    Match full url
  </label>
  <label>
    <input type="radio" value="hostname" bind:group={value.type} />
    Match hostname
  </label>
{/each}
