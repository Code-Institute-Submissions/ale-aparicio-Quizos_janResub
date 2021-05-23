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
        question: 'Every computer looking to access the Internet would be known as this',
        answers: [
            {text: 'client', correct: true},
            {text: 'hub', correct: false},
            {text: 'desktop', correct: false},
            {text: 'server', correct: false},
        ]
    },
    {
        question: 'Identifies company or commercial sites',
        answers: [
            {text: '.org', correct: false},
            {text: '.com', correct: true},
            {text: '.gov', correct: false},
            {text: '.edu', correct: false},
        ]
    },
    {
        question: 'What is indicated when the domain name has only two letters like .us, .uk, .au, .mx, or .ca?',
        answers: [
            {text: 'invalid domain', correct: false},
            {text: 'secure domain', correct: false},
            {text: 'country domain', correct: true},
            {text: 'private domain', correct: false},
        ]
    },
    {
        question: "Used for educational sites (most commonly four year universities) ",
        answers: [
            {text: '.edu', correct: true},
            {text: '.org', correct: false},
            {text: '.com', correct: false},
            {text: '.net', correct: false},
        ]
    },
    {
        question: 'Process of encoding messages or information in such a way that only authorized parties can read it',
        answers: [
            {text: 'layering', correct: false},
            {text: 'encryption', correct: true},
            {text: 'securing', correct: false},
            {text: 'phishing', correct: false},
        ]
    },
    {
        question: 'Network that allows information to be shared between devices over LAN',
        answers: [
            {text: 'wifi', correct: false},
            {text: 'hotspots', correct: false},
            {text: 'ethernet', correct: true},
            {text: 'server', correct: false},
        ]
    },
    {
        question: 'Name for the thin tubes of glass used by much of the Internet to send data quickly over long distances underground',
        answers: [
            {text: 'ethernet', correct: false},
            {text: 'wifi', correct: false},
            {text: 'fiber optic', correct: true},
            {text: 'hub', correct: false},
        ]
    },
    {
        question: 'The acronym for file transfer protocol',
        answers: [
            {text: 'http', correct: false},
            {text: 'ftp', correct: true},
            {text: 'pdf', correct: false},
            {text: 'https', correct: false},
        ]
    },
    {
        question: 'Used for government sites',
        answers: [
            {text: '.edu', correct: false},
            {text: '.gov', correct: true},
            {text: '.com', correct: false},
            {text: '.net', correct: false},
        ]
    },
    {
        question: 'Many businesses use this Wi-Fi technology to allow the public an access point to a wireless network',
        answers: [
            {text: 'satellites', correct: false},
            {text: 'hotspots', correct: true},
            {text: 'coldspot', correct: false},
            {text: 'bluetooth', correct: false},
        ]
    }
]

