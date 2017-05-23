//Question constructor function.
function Question(text, choices, answer) {
  this.text = text; //Text for the question.
  this.choices = choices; //Choices array has 2 items for the correct answer and the inccorret answer.
  this.answer = answer;//Answer to the question.
}

//Method to check if the users choice of answer is the correct answer to the question.
Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}
