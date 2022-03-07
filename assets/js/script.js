var startButton = document.getElementById('start');;
var infoEl = document.getElementById('info');
var count = document.getElementById('countdown');
var questionContainer = document.getElementById('question-card')
var questionText = document.getElementById('question')
var buttonA = document.getElementById('btn-a')
var buttonB = document.getElementById('btn-b')
var buttonC = document.getElementById('btn-c')
var buttonD = document.getElementById('btn-d')

var questionCounter = 0;
var timer = 60;


var quizInfo = function() {
    infoEl.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    startQuiz();
}

function startQuiz () {

    questionText.textContent = questions[questionCounter].question;

    buttonA.textContent = questions[questionCounter].choices[0];
    buttonB.textContent = questions[questionCounter].choices[1];
    buttonC.textContent = questions[questionCounter].choices[2];
    buttonD.textContent = questions[questionCounter].choices[3];
}

var moveOn = document.querySelector('#answer-button');

moveOn.onclick = ()=>{
    console.log('die');
    if (questionCounter < questions.length - 1) {
        questionCounter++;

        startQuiz(questionCounter);
    }
    else {
        window.alert('That is all folks!')
    }
};

function countdown () {
    var timeRemaining = timer;
    var timeInterval = setInterval(function() {
        timeRemaining--;
        count.textContent = timeRemaining;
        
        if (timeRemaining === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
};

startButton.addEventListener('click', quizInfo);
startButton.addEventListener('click', countdown);

var questions = [
    {
        question: 'Arrays in JavaScript can be used to store ____?',
        answer: "All of the above",
        choices: [
            'numbers and strings',
            'booleans',
            'other arrays',
            'All of the above',
        ]
    },
    {
        question: 'A string must be closed with a ____ when assigning a variable',
        answer: 'quotes',
        choices: [
            'curly bracket',
            'paranthesis',
            'quotes',
            'sqaure brackets',
        ]
    },
    {
        question: 'The condition of an if/else statement must be closed with ____',
        answer: 'paranthesis',
        choices: [
            'commas',
            'paranthesis', 
            'curly brackets',
            'quotes',
        ]
    },
    {
        question: 'How would you terminate a while loop',
        answer: 'break',
        choices: [
            'break',
            'if',
            'switch',
            'function',
        ]
    },
    {
        question: 'Commonly stored data types DO NOT include',
        answer: 'alert',
        choices: [
            'strings',
            'booleans',
            'alert',
            'numbers',
        ]
    },
]