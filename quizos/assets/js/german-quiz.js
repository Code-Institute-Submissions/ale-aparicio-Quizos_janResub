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
        question: 'Hello My friend',
        answers: [
            {text: 'Hallo, mein Freund', correct: true},
            {text: 'Hillo, mein fround', correct: false},
            {text: 'Hallo, me friendo', correct: false},
            {text: 'Hello, mein frind', correct: false},
        ]
    },
    {
        question: 'I love my dog',
        answers: [
            {text: 'ich liebe meinin Hundie', correct: false},
            {text: 'ich liebe meinen Hund', correct: true},
            {text: 'ishie libei meinen Hund', correct: false},
            {text: 'Ich libel meinan Hund', correct: false},
        ]
    },
    {
        question: 'I want pizza',
        answers: [
            {text: 'i want pikla', correct: false},
            {text: 'Is vil passa', correct: false},
            {text: 'ich will pizza', correct: true},
            {text: 'ich vein pizza', correct: false},
        ]
    },
    {
        question: "What is your name?",
        answers: [
            {text: 'Me ta name us', correct: false},
            {text: 'Waie illßen Sie?', correct: false},
            {text: 'Wie heißen Sie?', correct: true},
            {text: 'Name ahßen Sie?', correct: false},
        ]
    },
    {
        question: "It's cold out",
        answers: [
            {text: 'Es ist kalt', correct: true},
            {text: 'Es ir kalt', correct: false},
            {text: 'Es al kalt', correct: false},
            {text: 'Es mas kalt', correct: false},
        ]
    },
    {
        question: 'You are beautiful',
        answers: [
            {text: 'Da beist schön', correct: false},
            {text: 'kalt est schön', correct: false},
            {text: 'fest beishst schön', correct: false},
            {text: 'Du bist schön', correct: true},
        ]
    },
    {
        question: 'Goodmorning!',
        answers: [
            {text: 'Gadmurning!', correct: false},
            {text: 'Gust hagen!', correct: false},
            {text: 'Guten morgan!', correct: true},
            {text: 'Gasturding!', correct: false},
        ]
    },
    {
        question: 'Pass the salt',
        answers: [
            {text: 'Gaid dus sale', correct: false},
            {text: 'Gib das salz', correct: true},
            {text: 'Gub dais salz', correct: false},
            {text: 'Esh un sals', correct: false},
        ]
    },
    {
        question: 'How are you?',
        answers: [
            {text: 'Us gest es dir?', correct: false},
            {text: 'Wahst gus es ir?', correct: false},
            {text: 'Alst gus es dir?', correct: false},
            {text: 'Wie geht es dir?', correct: true},
        ]
    },
    {
        question: 'Good afternoon!',
        answers: [
            {text: 'Gusten ahg!', correct: false},
            {text: 'Guten tag!', correct: true},
            {text: 'Galten tag!', correct: false},
            {text: 'Guten asg!', correct: false},
        ]
    }
]