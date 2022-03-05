var startButton = document.getElementById('start');;
var infoEl = document.getElementById('info');
var questionContainer = document.getElementById('question-card')
var questionText = document.getElementById('question')
var answerAText = document.getElementById('btn-a')
var answerBText = document.getElementById('btn-b')
var answerCText = document.getElementById('btn-c')
var answerDText = document.getElementById('btn-d')

var questionCounter = 0;
questionCounter++;

var quizInfo = function() {
    infoEl.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    startQuiz();
}

var startQuiz = function() {

   questionText.textContent = questions[0].question;

   answerAText.textContent = questions[0].answers[0].text;
   answerBText.textContent = questions[0].answers[1].text;
   answerCText.textContent = questions[0].answers[2].text;
   answerDText.textContent = questions[0].answers[3].text;
}

var userAnswer = function() {
    if (this.value !== questions[0].answers.correct) {
        // penalize time
        // if time less than 0, end quiz
        // alert for wrong or correct

        
    }
    // else would be correct
}

startButton.addEventListener('click', quizInfo);

var questions = [
    {
        question: 'Arrays in JavaScript can be used to store ____?',
        answers: [
            {text: 'numbers and strings', correct: false},
            {text: 'booleans', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'All of the above', correct: true}
        ]
    },
    {
        question: 'A string must be closed with a ____ when assigning a variable',
        answers: [
            {text: 'curly bracket', correct: false},
            {text: 'paranthesis', correct: false},
            {text: 'quotes', correct: true},
            {text: 'sqaure brackets', correct: false}
        ]
    },
    {
        question: 'The condition of an if/else statement must be closed with ____',
        answers: [
            {text: 'commas', correct: false},
            {text: 'paranthesis', correct: true},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: false}
        ]
    },
    {
        question: 'How would you terminate a while loop',
        answers: [
            {text: 'break', correct: true},
            {text: 'if', correct: false},
            {text: 'switch', correct: true},
            {text: 'function', correct: false}
        ]
    },
    {
        question: 'Commonly stored data types DO NOT include',
        answers: [
            {text: 'strings', correct: false},
            {text: 'booleans', correct: false},
            {text: 'alert', correct: true},
            {text: 'numbers', correct: false}
        ]
    },
]