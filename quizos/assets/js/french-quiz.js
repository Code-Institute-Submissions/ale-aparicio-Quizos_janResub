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
        question: 'What does ici mean in french',
        answers: [
            {text: 'over here', correct: true},
            {text: 'Over there', correct: false},
            {text: 'No', correct: false},
            {text: 'Three', correct: false},
        ]
    },
    {
        question: 'What does Jaune mean',
        answers: [
            {text: 'Green', correct: false},
            {text: 'Yellow', correct: true},
            {text: 'Pink', correct: false},
            {text: 'Blue', correct: false},
        ]
    },
    {
        question: 'what does non mean',
        answers: [
            {text: 'no', correct: true},
            {text: 'yes', correct: false},
        ]
    },
    {
        question: "what is the number for 5",
        answers: [
            {text: 'trois', correct: false},
            {text: 'six', correct: false},
            {text: 'cinq', correct: true},
            {text: 'sept', correct: false},
        ]
    },
    {
        question: 'what is the number seven',
        answers: [
            {text: 'sept', correct: true},
            {text: 'dix-sept', correct: false},
            {text: 'six', correct: false},
            {text: 'un', correct: false},
        ]
    },
    {
        question: 'how do i say white in french',
        answers: [
            {text: 'Blan', correct: false},
            {text: 'Blance', correct: false},
            {text: 'blainc', correct: false},
            {text: 'blanc', correct: true},
        ]
    },
    {
        question: 'How do you say hello in French?',
        answers: [
            {text: 'à demain', correct: false},
            {text: 'de rien', correct: false},
            {text: 'bonjour', correct: true},
            {text: 'pas mal', correct: false},
        ]
    },
    {
        question: 'How do you say "good bye " in French?',
        answers: [
            {text: 'à demain', correct: false},
            {text: 'au revoir', correct: true},
            {text: 'merci', correct: false},
            {text: 'ça va?', correct: false},
        ]
    },
    {
        question: 'Au revoir!',
        answers: [
            {text: 'See you soon!', correct: false},
            {text: 'Yes!', correct: false},
            {text: 'Hello!', correct: false},
            {text: 'Goodbye!', correct: true},
        ]
    },
    {
        question: "Comment t'appelles-tu?",
        answers: [
            {text: 'How old are you?', correct: false},
            {text: 'What is your name?', correct: true},
            {text: 'How do you do?', correct: false},
            {text: 'My name is _____', correct: false},
        ]
    }
]