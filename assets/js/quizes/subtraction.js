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
        question: '10 - 2',
        answers: [
            {text: '8', correct: true},
            {text: '7', correct: false},
            {text: '4', correct: false},
            {text: '3', correct: false},
        ]
    },
    {
        question: '15 - 10 ',
        answers: [
            {text: '15', correct: false},
            {text: '20', correct: false},
            {text: '10', correct: false},
            {text: '5', correct: true},
        ]
    },
    {
        question: '25 - 10',
        answers: [
            {text: '30', correct: false},
            {text: '15', correct: true},
            {text: '5', correct: false},
            {text: '20', correct: false},
        ]
    },
    {
        question: "100 - 50",
        answers: [
            {text: '40', correct: false},
            {text: '30', correct: false},
            {text: '50', correct: true},
            {text: '10', correct: false},
        ]
    },
    {
        question: '1000 - 1000',
        answers: [
            {text: '0', correct: true},
            {text: '1000', correct: false},
            {text: '1', correct: false},
            {text: '200', correct: false},
        ]
    },
    {
        question: '250 - 60',
        answers: [
            {text: '200', correct: false},
            {text: '190', correct: true},
            {text: '169', correct: false},
            {text: '288', correct: false},
        ]
    },
    {
        question: '54 - 45',
        answers: [
            {text: '5', correct: false},
            {text: '3', correct: false},
            {text: '9', correct: true},
            {text: '0', correct: false},
        ]
    },
    {
        question: '290 - 79',
        answers: [
            {text: '211', correct: true},
            {text: '678', correct: false},
            {text: '234', correct: false},
            {text: '289', correct: false},
        ]
    },
    {
        question: '67 - 30',
        answers: [
            {text: '40', correct: false},
            {text: '83', correct: false},
            {text: '37', correct: true},
            {text: '90', correct: false},
        ]
    },
    {
        question: '1050 - 1020',
        answers: [
            {text: '50', correct: false},
            {text: '90', correct: false},
            {text: '2070', correct: false},
            {text: '30', correct: true},
        ]
    }
]

