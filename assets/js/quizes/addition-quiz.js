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
        question: '450 + 47',
        answers: [
            {text: '517', correct: true},
            {text: '650', correct: false},
            {text: '516', correct: false},
            {text: '200', correct: false},
        ]
    },
    {
        question: '27 + 578',
        answers: [
            {text: '567', correct: false},
            {text: '608', correct: true},
            {text: '1008', correct: false},
            {text: '890', correct: false},
        ]
    },
    {
        question: '987 + 1765',
        answers: [
            {text: '6382', correct: false},
            {text: '2625', correct: false},
            {text: '2752', correct: true},
            {text: '7899', correct: false},
        ]
    },
    {
        question: "1783 + 1636",
        answers: [
            {text: '526', correct: false},
            {text: '3419', correct: true},
            {text: '2672', correct: false},
            {text: '567', correct: false},
        ]
    },
    {
        question: '1415 + 0',
        answers: [
            {text: '1417', correct: false},
            {text: '1412', correct: false},
            {text: '1415', correct: true},
            {text: '1419', correct: false},
        ]
    },
    {
        question: '5142 + 8492',
        answers: [
            {text: '13634', correct: true},
            {text: '62278', correct: false},
            {text: '15252', correct: false},
            {text: '25267', correct: false},
        ]
    },
    {
        question: '26 + 1007',
        answers: [
            {text: '1046', correct: false},
            {text: '1037', correct: false},
            {text: '1033 ', correct: true},
            {text: '1278', correct: false},
        ]
    },
    {
        question: '2525 + 6252',
        answers: [
            {text: '8777', correct: true},
            {text: '6252', correct: false},
            {text: '2426', correct: false},
            {text: '8473', correct: false},
        ]
    },
    {
        question: '4672 + 7162',
        answers: [
            {text: '11834 ', correct: true},
            {text: '26265', correct: false},
            {text: '12626', correct: false},
            {text: '15256', correct: false},
        ]
    },
    {
        question: '765 + 153',
        answers: [
            {text: '625', correct: false},
            {text: '167', correct: false},
            {text: '162', correct: false},
            {text: '918 ', correct: true},
        ]
    }
]

