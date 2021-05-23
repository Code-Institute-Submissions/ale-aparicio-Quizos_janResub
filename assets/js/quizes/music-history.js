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
        question: 'Which of the following is NOT a composer from the ROMANTIC era?',
        answers: [
            {text: 'Beethoven', correct: true},
            {text: 'Chopin', correct: false},
            {text: 'Brahms', correct: false},
            {text: 'Schumann', correct: false},
        ]
    },
    {
        question: 'Modern era composers are influenced by the styles of Broadway and ___________?',
        answers: [
            {text: 'Baroque', correct: false},
            {text: 'Jazz', correct: true},
            {text: 'Pop', correct: false},
            {text: 'Impressionism', correct: false},
        ]
    },
    {
        question: 'During the Baroque era, music was written for nobility and for the __________.',
        answers: [
            {text: 'Public', correct: false},
            {text: 'Lower class', correct: false},
            {text: 'Church', correct: true},
            {text: 'Politicians', correct: false},
        ]
    },
    {
        question: "What was the most popular keyboard instrument during the Baroque era?",
        answers: [
            {text: 'Piano', correct: false},
            {text: 'Organ', correct: false},
            {text: 'Harpsichord', correct: true},
            {text: 'Clavichord', correct: false},
        ]
    },
    {
        question: 'During which era did Mozart live?',
        answers: [
            {text: 'Classical', correct: true},
            {text: 'Baroque', correct: false},
            {text: 'Romantic', correct: false},
            {text: 'Modern', correct: false},
        ]
    },
    {
        question: 'Stravinsky is from which era?',
        answers: [
            {text: 'Baroque', correct: false},
            {text: 'Romantic', correct: false},
            {text: 'Classical', correct: false},
            {text: 'Modern', correct: true},
        ]
    },
    {
        question: 'Which era features music and art that is highly ornamental and decorative?',
        answers: [
            {text: 'Impressionism', correct: false},
            {text: 'Jazz', correct: false},
            {text: 'Baroque', correct: true},
            {text: 'Romantic', correct: false},
        ]
    },
    {
        question: 'The symphony as a musical form appeared during which era?',
        answers: [
            {text: 'Baroque', correct: false},
            {text: 'Classical', correct: true},
            {text: 'Romantic', correct: false},
            {text: 'Modern', correct: false},
        ]
    },
    {
        question: 'The Romantic era dates from about. . . . .?',
        answers: [
            {text: '1600-1750', correct: false},
            {text: '1000-1500', correct: false},
            {text: '1900-present', correct: false},
            {text: '1800-1900', correct: true},
        ]
    },
    {
        question: 'Who is the most famous composer of the Baroque era?',
        answers: [
            {text: 'Schubert', correct: false},
            {text: 'Bach', correct: true},
            {text: 'Beethoven', correct: false},
            {text: 'Mozart', correct: false},
        ]
    }
]

