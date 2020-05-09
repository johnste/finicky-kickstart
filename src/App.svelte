<script>
  import Form from "./Form.svelte";
  import Preview from "./Preview.svelte";

  let options;
</script>

<style>
  main {
    display: grid;
    grid-template-rows: auto-fit auto;
    grid-template-columns: 60fr 40fr;
    grid-gap: 20px;
    padding: 20px;
  }

  @media screen and (max-width: 850px) {
    main {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }
  }

  .header {
    grid-row: 1;
    grid-column: 1/3;
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 10px;
  }

  .header > span {
    display: flex;
    align-items: baseline;
  }

  h1 {
    margin-right: 40px;
  }
</style>

<main>
  <section class="header">
    <img src="icon.png" width="50px" alt="finicky icon" />
    <span>
      <h1>Finicky Kickstart</h1>
      <span>
        Generate a basic{' '}
        <a href="https://github.com/johnste/finicky">Finicky</a>
        configuration.{' '}
        <a href="https://github.com/johnste/finicky-kickstart">GitHub</a>
      </span>
    </span>
  </section>
  <section>
    <Form bind:value={options} />
  </section>
  <Preview {options} />
</main>
