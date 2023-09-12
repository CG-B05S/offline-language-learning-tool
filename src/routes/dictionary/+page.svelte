<script>
  import Nav from "../../component/Nav/Nav.svelte";
  let searchWord = ""; // Input for searching a word
  let dictionaryData = null; // Stores dictionary data (definition, translations, etc.)

  // Function to perform a dictionary lookup
  async function lookupWord() {
    // You would typically make an API call here to fetch data based on `searchWord`
    // For this example, we'll just populate some sample data.
    dictionaryData = {
      word: searchWord,
      definition: "Sample definition of the word.",
      translations: {
        spanish: "Traducción en español",
        french: "Traduction en français",
        // Add more translations as needed
      },
    };
  }
</script>

<Nav />
<section>
  <h2>Dictionary Lookup</h2>
  <input type="text" bind:value={searchWord} placeholder="Enter a word" />
  <button on:click={lookupWord}>Lookup</button>

  {#if dictionaryData !== null}
    <div class="dictionary-result">
      <h3>{dictionaryData.word}</h3>
      <p><strong>Definition:</strong> {dictionaryData.definition}</p>
      <h4>Translations:</h4>
      <ul>
        {#each Object.entries(dictionaryData.translations) as [language, translation]}
          <li><strong>{language}:</strong> {translation}</li>
        {/each}
      </ul>
    </div>
  {/if}
</section>

<style>
  .dictionary-result {
    margin-top: 20px;
  }

  input{
    border: none;
    padding: 7px;
    font-size: 14px;
    min-height: 16px;
    text-overflow: ellipsis;
    width: 20%;
    }
  button {
    display: inline-block;
    padding: 6px 40px;
    box-sizing: border-box;
    font-size: 14px;
    border: solid 2px var(--success);
    border-radius: 3px;
    background: var(--success);
    color: var(--card-background);
  }
</style>
