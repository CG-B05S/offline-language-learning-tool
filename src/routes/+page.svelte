<script>
  import Nav from "../component/Nav/Nav.svelte";
</script>

<Nav />
<main>
  <div class="cardContainer">
    <div class="card">
      <h1>Learn a language online where you want, when you want</h1>
      <p>
        Ultimate flexibility. Pick lesson times that fit around your lifestyle
        and learn online from any location. It's affordable; you can book from
        just one lesson to a whole course. Online language tuition is accessible
        to everyone.
      </p>
      <a href="/languageCourses">Start Language Course</a>
    </div>
    
  </div>
</main>

<style>
  .cardContainer {
    display: flex;
    justify-content: center;
    background-color: var(--card-background);
    padding: 32px 0;
  }
  .card{
    max-width: 600px;
  }

  a{
    display: inline-block;
    padding: 12px 40px;
    box-sizing: border-box;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
    background: var(--success);
    color: var(--card-background);
  }
</style>
