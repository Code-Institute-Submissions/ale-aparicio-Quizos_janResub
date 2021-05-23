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
        question: 'Which of the following objects can temporarily resist the force of gravity:',
        answers: [
            {text: 'Airplane', correct: true},
            {text: 'Train ', correct: false},
            {text: 'Boat ', correct: false},
            {text: 'Motorcycle ', correct: false},
        ]
    },
    {
        question: 'Which source of electric energy is nonrenewable?',
        answers: [
            {text: 'Solar panels ', correct: false},
            {text: 'Coal ', correct: true},
            {text: 'Dams ', correct: false},
            {text: 'Windmill ', correct: false},
        ]
    },
    {
        question: 'Which type of rock is formed from the cooling of lava and magma?',
        answers: [
            {text: 'Igneous', correct: true},
            {text: 'Metamorphic', correct: false},
            {text: 'Mineral ', correct: false},
            {text: 'Sedimentary ', correct: false},
        ]
    },
    {
        question: "Which type of rock is made by many other rocks cementing together in layers",
        answers: [
            {text: 'Mineral ', correct: false},
            {text: 'Sedimentary ', correct: true},
            {text: 'Igneous ', correct: false},
            {text: 'Metamorphic ', correct: false},
        ]
    },
    {
        question: 'Where does the sun find the greatest source of water to turn into vapor',
        answers: [
            {text: 'Oceans ', correct: true},
            {text: 'Puddles ', correct: false},
            {text: 'Rivers ', correct: false},
            {text: 'Lakes ', correct: false},
        ]
    },
    {
        question: 'If humidity needs warm air and moisture to exist, which environment would have higher humidity ',
        answers: [
            {text: 'Grassland ', correct: false},
            {text: 'Rainforest ', correct: true},
            {text: 'Tundra ', correct: false},
            {text: 'Grassland ', correct: false},
        ]
    },
    {
        question: 'What is the earth’s crust made of?',
        answers: [
            {text: 'Magma', correct: false},
            {text: 'Oxygen', correct: false},
            {text: 'Water', correct: false},
            {text: 'Rock', correct: true},
        ]
    },
    {
        question: 'Which objects in our solar system are made of ice, rocks and dust and often look dirty ',
        answers: [
            {text: 'Comets ', correct: false},
            {text: 'Meteors ', correct: true},
            {text: 'Dwarf planet', correct: false},
            {text: 'Asteroids', correct: false},
        ]
    },
    {
        question: 'How many moons does Mars have?',
        answers: [
            {text: '50', correct: false},
            {text: '1', correct: false},
            {text: '13', correct: false},
            {text: '2', correct: true},
        ]
    },
    {
        question: 'Which planet is closest to the Sun?',
        answers: [
            {text: 'Mercury', correct: true},
            {text: 'Earth', correct: false},
            {text: 'Venus', correct: false},
            {text: 'Neptune', correct: false},
        ]
    }
]

