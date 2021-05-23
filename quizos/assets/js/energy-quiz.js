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
        question: 'What term is used to describe the ability to do work?',
        answers: [
            {text: 'Energy', correct: true},
            {text: 'Power', correct: false},
            {text: 'Transference ', correct: false},
            {text: 'Force', correct: false},
        ]
    },
    {
        question: 'Energy is NOT always transferred when work is done ',
        answers: [
            {text: 'true', correct: true},
            {text: 'false', correct: false},
        ]
    },
    {
        question: 'In what unit of measurement is energy expressed',
        answers: [
            {text: 'Joules ', correct: true},
            {text: 'Newtons ', correct: false},
            {text: 'Meters', correct: false},
            {text: 'Cm', correct: false},
        ]
    },
    {
        question: "Which of the following examples proves that the work done by energy is not always visible?",
        answers: [
            {text: 'A gardener pulling up weeds', correct: false},
            {text: 'A boy throwing a baseball ', correct: false},
            {text: 'A man pulling a suitcase ', correct: false},
            {text: 'A fire heating up a room ', correct: true},
        ]
    },
    {
        question: 'Who translated the voice of the then-unidentified Danielle Rousseau, speaking French?',
        answers: [
            {text: 'Shannon Rutherford', correct: true},
            {text: 'Kate Austen', correct: false},
            {text: 'Juliet Burke', correct: false},
            {text: 'Rose Nadler', correct: false},
        ]
    },
    {
        question: 'The rate at which work is done is referred to as ',
        answers: [
            {text: 'Distance ', correct: false},
            {text: 'Power ', correct: true},
            {text: 'Energy ', correct: false},
            {text: 'Force ', correct: false},
        ]
    },
    {
        question: 'If two people push a heavy box, the one who pushes the fastest is more powerful?',
        answers: [
            {text: 'true', correct: true},
            {text: 'false', correct: false},
        ]
    },
    {
        question: 'What formula is used to calculate power',
        answers: [
            {text: 'Power = energy/time', correct: true},
            {text: 'Power = time/energy', correct: false},
            {text: 'Energy = power/time', correct: false},
            {text: 'Power = energy x time', correct: false},
        ]
    },
    {
        question: 'Power is often expressed in joules per second, which is also equal to:',
        answers: [
            {text: '100 joules ', correct: false},
            {text: '10 watts', correct: false},
            {text: '1 watt ', correct: true},
            {text: '10 joules', correct: false},
        ]
    },
    {
        question: 'A light bulb uses 500J of energy in 5 seconds. What is its power?',
        answers: [
            {text: '10 watts', correct: false},
            {text: '100 watts', correct: true},
            {text: '500 watts ', correct: false},
            {text: '50 watts ', correct: false},
        ]
    }
]

