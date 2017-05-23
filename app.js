

//Create questions
var questions = [
  new Question("Which other name does Batman also go by?", ['Bruce Wayne', 'Dark Knight'], 'Dark Knight'),
  new Question("What is Superman's real Name?", ['Man of Steel', 'Clark Kent'], 'Clark Kent')
];

//Create Quiz
var quiz = new Quiz(questions);

//Display the quiz
QuizUI.displayNext();
