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
        question: 'What is the flight number of the plane that crashed into the island?',
        answers: [
            {text: 'Flight 815 ', correct: true},
            {text: 'Flight 980', correct: false},
            {text: 'Flight 754', correct: false},
            {text: 'Flight 678', correct: false},
        ]
    },
    {
        question: 'What was Jack Shephard’s profession before the plane crash?',
        answers: [
            {text: 'Software Developer', correct: false},
            {text: 'Surgeon', correct: true},
            {text: 'Construction Manager', correct: false},
            {text: 'Interior Designer', correct: false},
        ]
    },
    {
        question: 'What happened to Hurley while he was working at Mr. Cluck’s Chicken Shack?',
        answers: [
            {text: 'He was hit by a car', correct: false},
            {text: 'His twin brother died', correct: false},
            {text: 'He won the lotto', correct: true},
            {text: 'He got shot', correct: false},
        ]
    },
    {
        question: "Which numbers were printed on the Swan's hatch?",
        answers: [
            {text: '27-9-11-6-2-79', correct: false},
            {text: '33-104-7-18-36-68', correct: false},
            {text: '4-8-15-16-23-42', correct: true},
            {text: '2-29-19-37-12-88', correct: false},
        ]
    },
    {
        question: 'Who translated the voice of the then-unidentified Danielle Rousseau, speaking French?',
        answers: [
            {text: 'Shannon Rutherford', correct: true},
            {text: 'Kate Austen', correct: false},
            {text: 'Juliet Burke', correct: false},
            {text: 'Rose Nadler', correct: false},
        ]
    },
    {
        question: 'In Season 1, who kidnapped Claire and Charlie?',
        answers: [
            {text: 'Charles Widmore', correct: false},
            {text: 'Niki Fernandez', correct: false},
            {text: 'Sayid', correct: false},
            {text: 'Ethan Rom', correct: true},
        ]
    },
    {
        question: 'What was the name of the ageless protector of the Island?',
        answers: [
            {text: 'Sawyer', correct: false},
            {text: 'Claudia', correct: false},
            {text: 'Jacob', correct: true},
            {text: 'Roger', correct: false},
        ]
    },
    {
        question: 'What was used to surround and protect the Barracks on the Island',
        answers: [
            {text: 'Statues built by an ancient tribe of natives', correct: false},
            {text: 'A high-frequency sonar barrier', correct: true},
            {text: 'Unexplained, dangerous alien artifacts', correct: false},
            {text: 'A wall', correct: false},
        ]
    },
    {
        question: 'What was the name of the warlord and drug smuggler in Nigeria who was one of the crash survivors?',
        answers: [
            {text: 'Boone', correct: false},
            {text: 'Bernard', correct: false},
            {text: 'Ilana', correct: false},
            {text: 'Eko', correct: true},
        ]
    },
    {
        question: 'What did Hurley create in order to ease the stress and tension of being stranded?',
        answers: [
            {text: 'A short comedy show', correct: false},
            {text: 'Golf Course', correct: true},
            {text: 'Yoga Classes', correct: false},
            {text: 'An area for meditation', correct: false},
        ]
    }
]