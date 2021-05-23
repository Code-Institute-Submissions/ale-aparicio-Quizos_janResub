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
        question: 'Desalination plants are becoming more common in places which have experienced ____',
        answers: [
            {text: 'an influx of refugees', correct: false},
            {text: 'damaging earthquakes', correct: false},
            {text: 'mass deforestation', correct: false},
            {text: 'shortages of fresh water', correct: true},
        ]
    },
    {
        question: 'Who are the Syrian citizens fighting?',
        answers: [
            {text: 'Israel', correct: false},
            {text: 'Their authoritarian government', correct: true},
            {text: 'Dissident rebels', correct: false},
            {text: 'Each other', correct: false},
        ]
    },
    {
        question: 'Muslims pray 5 times per day facing this city',
        answers: [
            {text: 'Mena', correct: false},
            {text: 'Jerusalem', correct: false},
            {text: 'Mecca', correct: true},
            {text: 'Medina', correct: false},
        ]
    },
    {
        question: "How often are Muslims required to make a pilgrimage to Mecca?",
        answers: [
            {text: 'every year', correct: false},
            {text: 'every year of their adulthood', correct: false},
            {text: 'once in their lifetime', correct: true},
            {text: 'every other year', correct: false},
        ]
    },
    {
        question: 'This organization has strengthened the global influence of oil producing nations.',
        answers: [
            {text: 'OPEC', correct: true},
            {text: 'World Bank', correct: false},
            {text: 'United Nations', correct: false},
            {text: 'European Union', correct: false},
        ]
    },
    {
        question: 'This geographic feature causes 95% of Egyptians to live on just 3% of their land.',
        answers: [
            {text: 'Red Sea', correct: false},
            {text: 'Sahara desert', correct: true},
            {text: 'Aswan dam', correct: false},
            {text: 'Aswan dam', correct: false},
        ]
    },
    {
        question: 'The environmental impacts of desalination of water includes',
        answers: [
            {text: 'fluctuations in sea levels', correct: false},
            {text: 'rising ocean temperatures', correct: false},
            {text: 'changes to nearby ecosystems', correct: true},
            {text: 'increased probability of flooding', correct: false},
        ]
    },
    {
        question: 'What do ISIS, Al Qaeda, & Hezbollah have in common?',
        answers: [
            {text: 'They fund desalinization plants.', correct: false},
            {text: 'The use of conflict to get what they want.', correct: true},
            {text: 'They originated in Afghanistan.', correct: false},
            {text: 'The use of diplomatic means', correct: false},
        ]
    },
    {
        question: 'Due to the location of many refineries, what body of water sees the most oil tanker traffic?',
        answers: [
            {text: 'Mediterranean Sea', correct: false},
            {text: 'Caspian Sea', correct: false},
            {text: 'Gulf of Aqaba', correct: false},
            {text: 'Persian Gulf', correct: true},
        ]
    },
    {
        question: 'Wealthy nations in Southwest Asia are able to address the lack of water is by ______',
        answers: [
            {text: 'trading oil for irrigation', correct: false},
            {text: 'building desalination plants', correct: true},
            {text: 'constructing large dams', correct: false},
            {text: 'draining wetlands', correct: false},
        ]
    }
]

