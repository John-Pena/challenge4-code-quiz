var startButton = document.getElementById('start');;
var infoEl = document.getElementById('info');
var questionContainer = document.getElementById('question-card')
var questionEl = document.getElementById('question');
var answerButtons = document.getElementById('answer-button');


var quizInfo = function() {
    infoEl.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    startQuiz();
}

var startQuiz = function() {
    showQuestion();
}

var showQuestion = function(questions) {
    questionEl.innerText = questions;
}

startButton.addEventListener('click', quizInfo);

let questions = [
    {
        question: 'Arrays in JavaScript can be used to store ____?',
        answers: [
            {text: 'numbers and strings', correct: false},
            {text: 'booleans', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'All of the above', correct: true}
        ]
    }

]

// A string must be closed with a ____ when assigning a variable
// curly bracket false
// paranthesis false
// quotes true
// sqaure brackets false

// The condition of an if/else statement must be closed with ____
// commas false
// parantheses true
// curly brackets false
// quotes false

// How would you terminate a while loop
// break true
// return false
// switch false
// function false

// commonly stored data types DO NOT include
// Strings false
// Boolean false
// alert true
// numbers false