const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')  
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultForm = document.getElementById('form-result');

let shuffledQuestions, currentQuestionIndex
let countRightAnswers = 0;
let currentQuestion = 1;

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    document.getElementById('answer-buttons').classList.remove('no-click'); 

    currentQuestionIndex++
    setNextQuestion()

    currentQuestion++; 
    document.getElementById('current-question').innerHTML = currentQuestion;
})

function startGame() {
    document.getElementById('answer-buttons').classList.remove('no-click'); 

    startButton.classList.add('hide')
    resultForm.classList.add('hide');

    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

    currentQuestion = 1;
    document.getElementById('current-question').innerHTML = currentQuestion;

    countRightAnswers = 0;
    document.getElementById('all-questions2').innerHTML = questions.length;
    document.getElementById('all-questions').innerHTML = questions.length; 
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question

    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('question-btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')

        resultForm.classList.remove('hide');
        questionContainerElement.classList.add('hide');
    }

    if (correct) {
        countRightAnswers++;
    }

    document.getElementById('right-answers').innerHTML = countRightAnswers; 
    document.getElementById('answers-percent').innerHTML = ((100 * countRightAnswers)/questions.length).toFixed(0);
    document.getElementById('answer-buttons').classList.add('no-click'); 
}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: '_______ is how we write code',
        answers: [
            {text: 'Syntax', correct: true},
            {text: 'Variables', correct: false},
            {text: 'Loops', correct: false},
            {text: 'Functions', correct: false},
        ]
    },
    {
        question: 'In the code example: hero.moveRight(), what is the object?',
        answers: [
            {text: 'move', correct: false},
            {text: 'hero', correct: true},
            {text: '()', correct: false},
            {text: 'Right', correct: false},
        ]
    },
    {
        question: 'In the code example: hero.moveRight(), how is it read aloud?',
        answers: [
            {text: 'hero move right', correct: false},
            {text: 'hero dot move right', correct: true},
            {text: 'move right hero', correct: false},
            {text: 'right move dot hero', correct: false},
        ]
    },
    {
        question: "________ are the building blocks, they are things or characters that perform actions",
        answers: [
            {text: 'Variable', correct: false},
            {text: 'Syntax', correct: false},
            {text: 'Objects', correct: true},
            {text: 'Functions', correct: false},
        ]
    },
    {
        question: '__________ are actions an object can do',
        answers: [
            {text: 'Value', correct: false},
            {text: 'Objects', correct: false},
            {text: 'Syntax', correct: false},
            {text: 'Functions', correct: true},
        ]
    },
    {
        question: 'Function names are always followed by parentheses',
        answers: [
            {text: 'False', correct: false},
            {text: 'True', correct: true},
        ]
    },
    {
        question: 'Order does not matter',
        answers: [
            {text: 'False', correct: true},
            {text: 'True', correct: false},
        ]
    },
    {
        question: ' _____ is a way of repeating code',
        answers: [
            {text: 'While', correct: false},
            {text: 'Loop', correct: true},
            {text: 'Expression', correct: false},
            {text: 'Lopp', correct: false},
        ]
    },
    {
        question: 'What is a key word in Loop?',
        answers: [
            {text: 'Expression', correct: false},
            {text: 'Action', correct: false},
            {text: 'True', correct: false},
            {text: 'While', correct: true},
        ]
    },
    {
        question: 'What do you type for an infinite loop?',
        answers: [
            {text: 'while True ()', correct: false},
            {text: 'while True:', correct: true},
            {text: 'While true:', correct: false},
            {text: 'While True ()', correct: false},
        ]
    }
]

