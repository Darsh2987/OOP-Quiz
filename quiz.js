
//Quiz constructor function taking in an array of questions.
function Quiz(questions) {
  this.score = 0; //Score starts at 0.
  this.questions = questions;
  this.currentQuestionIndex = 0; //Getting the first question from the array of questions
}


//This is the guess method
Quiz.prototype.guess = function(answer) { //Takes in a string of the users answer.
  if(this.getCurrentQuestion().isCorrectAnswer(answer)) { //Checks the question against the users answers.
    this.score++; //Increment the score by 1 if the users answer is correct.
  }
  this.currentQuestionIndex++; //Increase the index of the 'current question index' to move onto the next question
};

//Method to get the current question.
Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestionIndex]; //This returns the current question at the current question index.
};

//Method to tell the UI whether or not the quiz has ended.
Quiz.prototype.hasEnded = function() {
  return this.currentQuestionIndex >= this.questions.length; //Current question index has been incresed by one - if the number is the same length or greater then the questions array then the game is over, all the questions has been asked.
};
