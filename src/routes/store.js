import { writable } from 'svelte/store';

export const languageCourses = writable([
  {
    id: 'course1',
    title: 'Beginner French', 
    description: 'Learn basic French vocabulary and phrases.',
    difficulty: 'Beginner', 
    lessons: [
      {
        id: 'lesson1',
        title: 'Greetings',
        content: 'Learn common French greetings and introductions.', 
      },
      {
        id: 'lesson2',
        title: 'Numbers',
        content: 'Learn numbers in French from 1 to 10.',
      },
    ],
    quizzes: [
      {
        id: 'quiz1', 
        title: 'Greetings Quiz', 
        questions: [
          {
            id: 'q1', 
            questionText: 'How do you say "hello" in French?',
            options: ['Bonjour', 'Au revoir', 'Merci', 'Oui'],
            correctAnswer: 'Bonjour',
          },
        ],
      },
    ],
  },
  {
    id: 'course2',
    title: 'Intermediate Spanish',
    description: 'Improve your Spanish language skills.',
    difficulty: 'Intermediate',
    lessons: [
      {
        id: 'lesson1',
        title: 'Common Phrases',
        content: 'Learn useful phrases for everyday conversations.',
      },
    ],
    quizzes: [
      {
        id: 'quiz1',
        title: 'Common Phrases Quiz',
        questions: [
          {
            id: 'q1',
            questionText: 'How do you say "thank you" in Spanish?',
            options: ['Hola', 'Adiós', 'Gracias', 'Sí'],
            correctAnswer: 'Gracias',
          },
        ],
      },
    ],
  },
]);


export const userProgress = writable({
  currentCourse: null, // Store the ID or reference of the currently selected course
  completedLessons: {
    // Store progress for completed lessons within the course(s)
    course1: [
      { lessonId: 'lesson1', completed: true },
      { lessonId: 'lesson2', completed: true },
    ],
    course2: [
       { lessonId: 'lesson3', completed: true },
      { lessonId: 'lesson4', completed: true },
    ],
  },
  quizScores: {
    // Store quiz scores or performance metrics
    course1: {
      quiz1: { score: 85, attempts: 2 },
      quiz2: { score: 92, attempts: 1 },
    },
    course2: {
       quiz1: { score: 85, attempts: 2 },
      quiz2: { score: 92, attempts: 1 },
    },
  },
});
