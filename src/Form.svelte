<script>
  import { afterUpdate } from "svelte";
  import Browser from "./Browser.svelte";
  import Handler from "./Handler.svelte";
  import MatchURL from "./MatchURL.svelte";
  import { convertWildcardToRegex } from "./utils";

  let defaultBrowser = undefined;
  let hideIcon = false;
  let checkForUpdate = true;
  let handlers = [{ pattern: "google.com/*", browser: "" }];

  export let value;

  $: value = {
    defaultBrowser,
    hideIcon,
    checkForUpdate,
    handlers: handlers.map(handler => {
      return {
        ...handler,
        pattern: convertWildcardToRegex(handler.pattern)
      };
    })
  };
</script>

<style>
  th {
    text-align: left;
  }
</style>

<form>

  <fieldset>
    <legend>General</legend>
    <label for="defaultBrowser">
      Default browser
      <Browser bind:value={defaultBrowser} id="defaultBrowser"/>
    </label>
    <ul>
      <li>
        <label>
          <input type="checkbox" bind:checked={checkForUpdate} />
          Check for update on startup
        </label>
      </li>

    </ul>
  </fieldset>
  <fieldset>
    <legend>URL handling</legend>

    <button on:click={() => (handlers = [...handlers, {}])}>Add new</button>

    <table>
      <thead>
        <tr>
          <th>URL Wildcard Pattern</th>
          <th>Browser</th>
        </tr>
      </thead>
      <tbody>
        {#each handlers as handler, i}
          <tr>
            <td>
              <input
                type="text"
                bind:value={handler.pattern}
                placeholder="google.com/*"
                required
                size="60" />
            </td>
            <td>
              <Browser bind:value={handler.browser} />
            </td>
            <td>
              <button
                on:click={() => (handlers = [...handlers.slice(0, i), ...handlers.slice(i + 1)])}>
                Remove
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

  </fieldset>
</form>
