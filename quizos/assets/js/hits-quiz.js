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
        question: "Who sang 'Perfect'?",
        answers: [
            {text: 'Callum Scott', correct: false},
            {text: 'Shawn Mendes', correct: false},
            {text: 'Beyonce', correct: false},
            {text: 'Ed Sheeran', correct: true},
        ]
    },
    {
        question: "Who sang 'Havanna'?",
        answers: [
            {text: 'Fifth Harmony', correct: false},
            {text: 'Camilla Cabello', correct: true},
            {text: 'Ariana Grande', correct: false},
            {text: 'Halsey', correct: false},
        ]
    },
    {
        question: "Who sang 'In My Feelings'?",
        answers: [
            {text: 'Meek Mill', correct: false},
            {text: '21Savage', correct: false},
            {text: 'Drake', correct: true},
            {text: 'Nicki Minaj', correct: false},
        ]
    },
    {
        question: "Who sang 'Finesse'?",
        answers: [
            {text: 'XXXtentacion', correct: false},
            {text: 'Post Malone', correct: false},
            {text: 'Bruno Mars', correct: true},
            {text: 'Maroon 5', correct: false},
        ]
    },
    {
        question: "Who sang 'Thank u, Next'?",
        answers: [
            {text: 'Ariana Grande', correct: true},
            {text: 'Callum Scott', correct: false},
            {text: 'Imagine Dragons', correct: false},
            {text: 'Adele', correct: false},
        ]
    },
    {
        question: "Who sang 'F.R.I.E.N.D.S'?",
        answers: [
            {text: 'Halsey ft. Khalid', correct: false},
            {text: 'Ed Sheeran ft. Jessie Ware', correct: false},
            {text: 'David Guetta ft. Rihanna', correct: false},
            {text: 'Marshmello ft. Anne-Marie', correct: true},
        ]
    },
    {
        question: "Who sang 'I Like Me Better'?",
        answers: [
            {text: 'Queen', correct: false},
            {text: 'Imagine Dragons', correct: false},
            {text: 'Lauv', correct: true},
            {text: 'Callum Scott', correct: false},
        ]
    },
    {
        question: "Who sang 'In My Blood'?",
        answers: [
            {text: '21Savage', correct: false},
            {text: 'Shawn Mendes', correct: true},
            {text: 'Bruno Mars', correct: false},
            {text: 'Taylor Swift', correct: false},
        ]
    },
    {
        question: "Who sang 'Freaky Friday'?",
        answers: [
            {text: 'Cardi B ft. Maroon 5', correct: false},
            {text: 'Clean Bandit', correct: false},
            {text: 'Drake', correct: false},
            {text: 'Chris Brown ft. Lil Dicky', correct: true},
        ]
    },
    {
        question: "Who sang 'Shake It Off'?",
        answers: [
            {text: 'Ariana Grande', correct: false},
            {text: 'Taylor Swift', correct: true},
            {text: 'Demi Lovato', correct: false},
            {text: 'Shawn Mendes', correct: false},
        ]
    }
]

