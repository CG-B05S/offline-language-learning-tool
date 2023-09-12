<script>
  import Nav from '../../component/Nav/Nav.svelte'
    let userProgress = {
      currentCourse: 'course1',
      completedLessons: {
        course1: [
          { lessonId: 'lesson1', completed: true },
          { lessonId: 'lesson2', completed: false },
        ],
      },
      quizScores: {
        course1: {
          quiz1: { score: 85, attempts: 2 },
          quiz2: { score: 92, attempts: 1 },
        },
      },
    };
  </script>
  <Nav />
  <section>
    <h2>Progress Tracker</h2>
    {#if userProgress.currentCourse}
      <p>Current Course: {userProgress.currentCourse}</p>
      <h3>Completed Lessons</h3>
      <ul>
        {#each userProgress.completedLessons[userProgress.currentCourse] as lesson}
          <li>
            {lesson.completed ? '✅' : '❌'} Lesson {lesson.lessonId}
          </li>
        {/each}
      </ul>
      <h3>Quiz Scores</h3>
      <ul>
        {#each Object.entries(userProgress.quizScores[userProgress.currentCourse]) as [quizId, quizData]}
          <li>
            Quiz {quizId}: Score {quizData.score}, Attempts {quizData.attempts}
          </li>
        {/each}
      </ul>
    {:else}
      <p>No course selected.</p>
    {/if}
  </section>
  