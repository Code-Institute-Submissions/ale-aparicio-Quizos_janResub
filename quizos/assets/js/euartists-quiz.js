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
        question: 'Who painted the last supper?',
        answers: [
            {text: 'Leonardo Da Vinci', correct: true},
            {text: 'Michelangelo', correct: false},
            {text: 'Sandro Botticelli ', correct: false},
            {text: 'Raphael ', correct: false},
        ]
    },
    {
        question: 'What Italian city was known as the birthplace of the renaissance?',
        answers: [
            {text: 'Venice', correct: false},
            {text: 'Florence', correct: true},
            {text: 'Rome', correct: false},
            {text: 'Milan', correct: false},
        ]
    },
    {
        question: 'Who painted the school of Athens?',
        answers: [
            {text: 'Pablo Picasso', correct: false},
            {text: 'Paul Cezanne', correct: false},
            {text: 'Raphael', correct: true},
            {text: 'Michelangelo', correct: false},
        ]
    },
    {
        question: "What painter was suspected of stealing the Mona Lisa in 1911?",
        answers: [
            {text: 'Pablo Picasso', correct: true},
            {text: 'Paul Cezanne', correct: false},
            {text: 'Henri Matisse', correct: false},
            {text: 'Edgar Degas', correct: false},
        ]
    },
    {
        question: 'What period is Peter Paul Ruben’s associated with?',
        answers: [
            {text: 'Baroque', correct: true},
            {text: 'Realism ', correct: false},
            {text: 'Renaissance', correct: false},
            {text: 'Romanticism', correct: false},
        ]
    },
    {
        question: 'How many versions of The Scream did Edward munch create?',
        answers: [
            {text: '6', correct: false},
            {text: '5', correct: false},
            {text: '8', correct: false},
            {text: '4', correct: true},
        ]
    },
    {
        question: 'How many paintings did van Gogh sell in his lifetime?',
        answers: [
            {text: '3', correct: false},
            {text: '70', correct: false},
            {text: '1', correct: true},
            {text: '4', correct: false},
        ]
    },
    {
        question: 'What is the largest art museum in the world?',
        answers: [
            {text: 'National museum of china', correct: false},
            {text: 'Louvre', correct: true},
            {text: 'Metropolitan museum of art', correct: false},
            {text: 'State hermitage museum', correct: false},
        ]
    },
    {
        question: 'what art movement was Claude Monet part of?',
        answers: [
            {text: 'Romanticism', correct: false},
            {text: 'Renaissance', correct: false},
            {text: 'Realism', correct: false},
            {text: 'Impressionism', correct: true},
        ]
    },
    {
        question: 'What Spanish painter is known as the last of the old masters and the first of the modern?',
        answers: [
            {text: 'Pablo Picasso', correct: false},
            {text: 'Francisco Goya', correct: true},
            {text: 'Diego Velazquez', correct: false},
            {text: 'El Greco', correct: false},
        ]
    }
]

