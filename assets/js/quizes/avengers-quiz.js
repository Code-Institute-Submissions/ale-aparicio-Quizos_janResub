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
        question: 'Who was the first Avenger?',
        answers: [
            {text: 'Hulk', correct: false},
            {text: 'Thor', correct: false},
            {text: 'Iron Man', correct: false},
            {text: 'Captain America', correct: true},
        ]
    },
    {
        question: 'Who is the man that turns green when angry?',
        answers: [
            {text: 'Hulk', correct: true},
            {text: 'Thor', correct: false},
            {text: 'Hawk Eye', correct: false},
            {text: 'Ironman', correct: false},
        ]
    },
    {
        question: "What color is Captain America's shield",
        answers: [
            {text: 'White and Red', correct: false},
            {text: 'Blue, White, and Black', correct: false},
            {text: 'Red, White, and Blue', correct: true},
            {text: 'Blue', correct: false},
        ]
    },
    {
        question: "What is Thor's last name?",
        answers: [
            {text: 'Odinson', correct: true},
            {text: 'Williamson', correct: false},
            {text: 'The Awesome', correct: false},
            {text: 'Mightiness', correct: false},
        ]
    },
    {
        question: "What's the name of Thor's brother?",
        answers: [
            {text: 'Bob', correct: false},
            {text: 'Nick Fury', correct: false},
            {text: 'Loki', correct: true},
            {text: 'Steve', correct: false},
        ]
    },
    {
        question: "What is Coulson's first name?",
        answers: [
            {text: 'Phil', correct: true},
            {text: 'Agent', correct: false},
            {text: 'John', correct: false},
            {text: 'Steven', correct: false},
        ]
    },
    {
        question: 'Which of the following Avengers from the comics is not in the movie?',
        answers: [
            {text: 'Hawkeye', correct: false},
            {text: 'Captain America', correct: false},
            {text: 'The Wasp', correct: true},
            {text: 'Black Widow', correct: false},
        ]
    },
    {
        question: 'Who is the guy a patch on one eye?',
        answers: [
            {text: 'John Smith', correct: false},
            {text: 'Bob Williamson', correct: false},
            {text: 'Nick Fury', correct: true},
            {text: 'Tony Stark', correct: false},
        ]
    },
    {
        question: 'What is the name of the blue glowing square that Loki uses as a weapon?',
        answers: [
            {text: 'The Soulstone', correct: false},
            {text: 'The Infinity Gem', correct: false},
            {text: 'The Tesseract', correct: true},
            {text: 'The Forever Cube', correct: false},
        ]
    },
    {
        question: "When Stark Tower's letter all fall. What letter remains standing?",
        answers: [
            {text: 'R', correct: false},
            {text: 'A', correct: true},
            {text: 'K', correct: false},
            {text: 'S', correct: false},
        ]
    }
]

