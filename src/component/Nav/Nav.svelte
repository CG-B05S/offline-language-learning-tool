<script>
  
  import { page } from '$app/stores';  
  const navs = [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/dictionary",
      name: "Dictionary",
    },
    {
      route: "/flashcards",
      name: "Flashcards",
    },
    {
      route: "/languageCourses",
      name: "LanguageCourses",
    },
    {
      route: "/progressTracker",
      name: "ProgressTracker",
    },
    {
      route: "/quizzes",
      name: "Quizzes",
    },
  ];

</script>
<div class="navbar">
    {#each navs as nav (nav.route)}
      <a class={`${$page.url.pathname   === nav.route ? "active" : ""}`} href={nav.route}>{nav.name}</a>
    {/each}
</div>

<style>
  a {
    /* display: block; */
    background-color: var(--secondary-300);
    padding: 10px 15px;
    color: var(--neutral-800);
    margin: 5px 10px;
    display: block;
    text-decoration: none;
  }

  a:hover, .active {
    background-color: var(--primary-300);
  }

  .navbar{
    background-color: var(--secondary-100);
    display: flex;
  }
</style>
