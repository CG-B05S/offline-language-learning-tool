<script>
    import Nav from '../../component/Nav/Nav.svelte'
    import {languageCourses} from "../store";
    
    function startCourse(course) {
      alert(`Started ${course.title} course.`);
    }

  </script>
 <Nav/> 
  <section>
    <h2>Language Courses</h2>
    {#if $languageCourses?.length > 0}
    {#each $languageCourses as course}
      <div class="course-card">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <button on:click={() => startCourse(course)}>Start {course.title}</button>
      </div>
    {/each}
    {/if}
  </section>
  
  <style>
    .course-card {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
      border-radius: 5px;
      background-color: var(--neutral-900);
    }
  
    .course-card button {
      background-color: var(--success);
      color: var(--card-background);;
      border: none;
      padding: 12px 40px;
      cursor: pointer;
      font-size: 14px;
    }
  </style>

  