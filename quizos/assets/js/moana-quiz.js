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
        question: 'How long was Maui stranded?',
        answers: [
            {text: '5000 years', correct: false},
            {text: '1000 years', correct: true},
            {text: '300 years', correct: false},
            {text: '100 years', correct: false},
        ]
    },
    {
        question: 'What is Maui?',
        answers: [
            {text: 'A God', correct: false},
            {text: 'A Waterbender', correct: false},
            {text: 'A Demi god', correct: true},
            {text: 'An Airbender', correct: false},
        ]
    },
    {
        question: 'What does Maui love?',
        answers: [
            {text: 'His hook', correct: true},
            {text: 'Heihei (The Chicken)', correct: false},
            {text: 'Being Alone', correct: false},
            {text: 'Boats', correct: false},
        ]
    },
    {
        question: "Who took Maui's hook?",
        answers: [
            {text: 'Tomatoa', correct: true},
            {text: 'Maui', correct: false},
            {text: 'Taotaomona', correct: false},
            {text: 'Chad', correct: false},
        ]
    },
    {
        question: "How long were Moana's people on the island?",
        answers: [
            {text: '100 year', correct: false},
            {text: '200 years', correct: false},
            {text: '30 years', correct: false},
            {text: '1000 years', correct: true},
        ]
    },
    {
        question: 'Who is Te Fiti?',
        answers: [
            {text: 'Maui', correct: false},
            {text: 'Moana', correct: false},
            {text: 'God of Life', correct: true},
            {text: 'A demi god', correct: false},
        ]
    },
    {
        question: 'Who did Maui steal the heart from?',
        answers: [
            {text: 'Tamatoa', correct: false},
            {text: 'Te fiti', correct: true},
            {text: 'Hei hei', correct: false},
            {text: 'Taka', correct: false},
        ]
    },
    {
        question: 'Who inspired Moana to sail across the sea?',
        answers: [
            {text: 'Maui', correct: false},
            {text: 'Chief Tui', correct: false},
            {text: 'Grandma Tala', correct: true},
            {text: 'Her mom', correct: false},
        ]
    },
    {
        question: 'Who brought the heart of Te Fiti to Moana',
        answers: [
            {text: 'The Ocean', correct: true},
            {text: 'Maui', correct: false},
            {text: 'Grandma Tala', correct: false},
            {text: 'Te Fiti', correct: false},
        ]
    },
    {
        question: 'What does Moana put on the mountain of chiefs?',
        answers: [
            {text: 'Stone', correct: false},
            {text: 'Flowers', correct: false},
            {text: 'Conch Shell', correct: true},
            {text: 'Seashell', correct: false},
        ]
    }
]

