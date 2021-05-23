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
        question: 'Who is the 7th Hokage',
        answers: [
            {text: 'Sasuke', correct: false},
            {text: 'Naruto', correct: true},
            {text: 'Konahamaru', correct: false},
            {text: 'Sakura', correct: false},
        ]
    },
    {
        question: 'Who has the 9 tails',
        answers: [
            {text: 'Luffy', correct: false},
            {text: 'Naruto', correct: true},
            {text: 'Sasuke', correct: false},
            {text: 'Itachi', correct: false},
        ]
    },
    {
        question: 'Who has the 1 tails',
        answers: [
            {text: 'Sasuke', correct: false},
            {text: 'Tobi', correct: false},
            {text: 'Gaara', correct: true},
            {text: 'Temari', correct: false},
        ]
    },
    {
        question: "Who’s behind the mask of Tobi",
        answers: [
            {text: 'Madara', correct: false},
            {text: 'Hiruzen', correct: false},
            {text: 'Obito', correct: true},
            {text: 'Minato', correct: false},
        ]
    },
    {
        question: 'What’s the fourth Hokage’s name',
        answers: [
            {text: 'Naruto Uzumaki', correct: false},
            {text: 'Kakashi Hatake', correct: false},
            {text: 'Minato Namikaze', correct: true},
            {text: 'Hiruzen Saurtobi', correct: false},
        ]
    },
    {
        question: 'What clan possesses the sharingan',
        answers: [
            {text: 'Abruame', correct: false},
            {text: 'Hyuga', correct: false},
            {text: 'Uzumaki', correct: false},
            {text: 'Uchiha', correct: true},
        ]
    },
    {
        question: 'What’s the nine-tails name',
        answers: [
            {text: 'Shukaku', correct: false},
            {text: 'Matatabi', correct: false},
            {text: 'Kurama', correct: true},
            {text: 'Isobu', correct: false},
        ]
    },
    {
        question: "Who's Naruto's mom",
        answers: [
            {text: 'Lady tsunade', correct: false},
            {text: 'Kushina Uzumaki', correct: true},
            {text: 'Kurenai sensei', correct: false},
            {text: 'Kurenai sensei', correct: false},
        ]
    },
    {
        question: 'Who was The First One To create The Rasengan',
        answers: [
            {text: 'Jiraya', correct: false},
            {text: 'Sasuke', correct: false},
            {text: 'Tobirama', correct: false},
            {text: 'Minato', correct: true},
        ]
    },
    {
        question: 'Who did Shisui give his Sharringan to',
        answers: [
            {text: 'Kakashi', correct: false},
            {text: 'Itachi', correct: true},
            {text: 'Sasuke', correct: false},
            {text: 'Madara', correct: false},
        ]
    }
]

