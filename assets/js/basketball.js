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
        question: ' What team does Lebron James play for?',
        answers: [
            {text: 'Cleveland Cavaliers ', correct: true},
            {text: 'Miami Heat', correct: false},
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'Atlanta Hawks', correct: false},
        ]
    },
    {
        question: 'How many points is a Free Throw worth?',
        answers: [
            {text: '3', correct: false},
            {text: '1', correct: true},
            {text: '5', correct: false},
            {text: '2', correct: false},
        ]
    },
    {
        question: 'What teams did Michael Jordan play for?',
        answers: [
            {text: 'Bulls and Pistons', correct: false},
            {text: 'Lakers and Bulls', correct: false},
            {text: 'Bulls and Wizards', correct: true},
            {text: 'Bulls and Mavericks', correct: false},
        ]
    },
    {
        question: "Who is the current league MVP?",
        answers: [
            {text: 'Kobe Bryant', correct: false},
            {text: 'Lebron James', correct: false},
            {text: 'Stephen Curry', correct: true},
            {text: 'James Harden', correct: false},
        ]
    },
    {
        question: 'Who are the defending NBA champs?',
        answers: [
            {text: 'Golden State Warriors', correct: true},
            {text: 'Cleveland Cavaliers', correct: false},
            {text: 'San Antonio Spurs', correct: false},
            {text: 'Chicago Bulls', correct: false},
        ]
    },
    {
        question: 'What team won the 2016 NBA Championship?',
        answers: [
            {text: 'None of these', correct: false},
            {text: 'Golden State Warriors', correct: false},
            {text: 'OKC Thunder', correct: false},
            {text: 'Cleveland Caveliers', correct: true},
        ]
    },
    {
        question: 'Who are the top 3 NBA Players of 2017?',
        answers: [
            {text: 'Chris Paul, Russell Westbrook, Stephen Curry', correct: false},
            {text: 'LeBron James, Kevin Durant, Stephen Curry', correct: false},
            {text: 'Anthony Davis, James Harden, Kawhi Leonard', correct: true},
            {text: 'None of the Above', correct: false},
        ]
    },
    {
        question: 'Who are some of the basketball players with shoe brands?',
        answers: [
            {text: "Curry's that's all", correct: false},
            {text: "Kobe's, LeBrons, Curry's ,  Kevin Durant's, Jordan's, Kryrie's", correct: true},
            {text: "Green's, Nike, Harden's, Perkins", correct: false},
            {text: "LeBron's and that's all", correct: false},
        ]
    },
    {
        question: 'What is a basketball hoops diameter and height?',
        answers: [
            {text: 'Diameter= 17 inches Height= 9 feet', correct: false},
            {text: 'Diameter= 10 inches Height= 7 feet', correct: false},
            {text: 'Diameter= 15 inches Height= 12 feet', correct: false},
            {text: 'Diameter= 18 inches Height= 10 feet', correct: true},
        ]
    },
    {
        question: 'How many total players are allowed on the court at any given time?',
        answers: [
            {text: '8', correct: false},
            {text: '10', correct: true},
            {text: '5', correct: false},
            {text: '12', correct: false},
        ]
    }
]

