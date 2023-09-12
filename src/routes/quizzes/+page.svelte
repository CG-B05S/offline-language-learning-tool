<script>
  import Nav from "../../component/Nav/Nav.svelte";
  let quizzes = {
    course1: [
      {
        id: "quiz1",
        title: "Greetings Quiz",
        questions: [
          {
            id: "q1",
            questionText: 'How do you say "Hello" in French?',
            options: ["Bonjour", "Au revoir", "Merci", "Oui"],
            correctAnswer: "Bonjour",
            selectedAnswer: null,
          },
          {
            id: "q2",
            questionText: 'How do you say "Thank you" in French?',
            options: ["première", "devez", "Merci", "disait"],
            correctAnswer: "Merci",
            selectedAnswer: null,
          },
          {
            id: "q3",
            questionText: 'How do you say "Bye" in French?',
            options: ["au revoir", "essayer", "simplement", "trou"],
            correctAnswer: "au revoir",
            selectedAnswer: null,
          },
          // Add more quiz questions as needed
        ],
      },
      // Add more quizzes for course1 as needed
    ],
    // Add more courses and quizzes as needed
  };

  let currentQuiz = null; // The quiz currently being displayed
  let quizIndex = null; // The index of the current question
  let score = 0; // User's score

  // Function to start a quiz
  function startQuiz(courseId, quizId) {
    currentQuiz = quizzes[courseId].find((quiz) => quiz.id === quizId);
    quizIndex = 0;
    score = 0;
  }

  // Function to answer a quiz question
  function answerQuestion(selectedOption) {
    if (selectedOption === currentQuiz.questions[quizIndex].correctAnswer) {
      score += 1;
    }
    quizIndex += 1;
  }

  // Function to go to the next question or finish the quiz
  function nextQuestion() {
    if (quizIndex < currentQuiz.questions.length) {
      // Go to the next question
    } else {
      // Finish the quiz and display the score
      currentQuiz = null;
      quizIndex = null;
    }
  }
</script>

<Nav />
<section>
  <h2>Quizzes</h2>
  <ul>
    {#each Object.entries(quizzes) as [courseId, courseQuizzes]}
      <li>
        <h3>{courseId}</h3>
        <ul>
          {#each courseQuizzes as quiz}
            <li>
              <button on:click={() => startQuiz(courseId, quiz.id)}
                >{quiz.title}</button
              >
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>

  {#if currentQuiz !== null}
    <h3>{currentQuiz.title}</h3>
    {#if quizIndex !== null && quizIndex < currentQuiz.questions.length}
      <div class="quiz">
        <p>{currentQuiz.questions[quizIndex].questionText}</p>
        {#each currentQuiz.questions[quizIndex].options as option}
          <label>
            <input
              type="radio"
              name="answer"
              value={option}
              on:change={() => answerQuestion(option)}
            />
            {option}
          </label>
        {/each}
      </div>
      <button on:click={() => nextQuestion()}>Next</button>
    {:else if quizIndex == currentQuiz.questions.length}
      <p>Quiz finished! Your score: {score}/{currentQuiz.questions.length}</p>
    {/if}
  {/if}
</section>
<style>
  button{
    display: inline-block;
    padding: 6px 40px;
    box-sizing: border-box;
    font-size: 14px;
    border: solid 2px var(--success);
    border-radius: 3px;
    background: var(--success);
    color: var(--card-background);
  }
  .quiz{
    margin: 0 0 25px 0;
  }
</style>