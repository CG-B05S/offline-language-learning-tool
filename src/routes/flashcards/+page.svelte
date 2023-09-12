<script>
  import Nav from '../../component/Nav/Nav.svelte'
    let flashcards = [
      { term: 'Bonjour', definition: 'Hello', flipped: false },
      { term: 'Merci', definition: 'Thank you', flipped: false },
      { term: 'Bye', definition: 'au revoir', flipped: false },
    ];
  
    // Function to toggle the card and show the definition when clicked
    function toggleCard(index) {
      flashcards[index].flipped = !flashcards[index].flipped;
    }
  </script>
  <Nav />
  <section>
    <h2>Flashcards</h2>
    <div class="flashcard-container">
      {#each flashcards as card, index}
        <div
          class="flashcard"
          class:selected={card.flipped}
          on:click={() => toggleCard(index)}
        >
          {#if card.flipped}
            <p class="definition">{card.definition}</p>
          {:else}
            <p class="term">{card.term}</p>
          {/if}
        </div>
      {/each}
    </div>
  </section>
  
  <style>
    .flashcard-container {
      display: flex;
      flex-wrap: wrap;
    }
  
    .flashcard {
      width: 150px;
      height: 100px;
      border: 1px solid #ccc;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
  
    .flashcard.selected {
      transform: rotateY(180deg);
    }
  
    .term {
      font-size: 20px;
    }
  
    .definition {
      font-size: 16px;
    }
  </style>
  