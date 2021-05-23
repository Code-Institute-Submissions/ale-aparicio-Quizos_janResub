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
        question: 'What king helped to popularize ballet?',
        answers: [
            {text: 'King Louis XIV', correct: true},
            {text: 'King Henry VIII', correct: false},
            {text: 'King Henry II', correct: false},
            {text: 'King Louis III', correct: false},
        ]
    },
    {
        question: 'What popular role did King Louis XIV famously perform?',
        answers: [
            {text: 'Nutcracker', correct: false},
            {text: 'Sun King', correct: true},
            {text: 'Moon King', correct: false},
            {text: 'Romeo', correct: false},
        ]
    },
    {
        question: 'Ballet originated in which courts in what century?',
        answers: [
            {text: 'French Renaissance & 2nd', correct: false},
            {text: 'French Renaissance & 15th', correct: false},
            {text: 'Italian Renaissance & 15th', correct: true},
            {text: 'Italian Renaissance & 2nd', correct: false},
        ]
    },
    {
        question: "The 19th Century was known as what period?",
        answers: [
            {text: 'Classical', correct: false},
            {text: 'Renaissance', correct: false},
            {text: 'Romantic', correct: true},
            {text: 'Neo-Classical', correct: false},
        ]
    },
    {
        question: 'Which of the following was not created by Marius Petipa?',
        answers: [
            {text: 'The Nutcracker', correct: true},
            {text: 'The Nutcracker', correct: false},
            {text: 'Swan Lake', correct: false},
            {text: 'Sleeping Beauty', correct: false},
        ]
    },
    {
        question: " A dancer's turn out is....",
        answers: [
            {text: 'Their knees', correct: false},
            {text: 'Their head placement', correct: false},
            {text: 'The rotation of their hips', correct: false},
            {text: 'Their arm placement', correct: true},
        ]
    },
    {
        question: 'Port de Bras is...',
        answers: [
            {text: 'The positions of the feet', correct: false},
            {text: 'To stretch the foot', correct: false},
            {text: 'The carriage of the arms', correct: true},
            {text: 'The rotation from the hip', correct: false},
        ]
    },
    {
        question: 'Tendu means ________ in french',
        answers: [
            {text: 'Turnout', correct: false},
            {text: 'To Stretch', correct: true},
            {text: 'To Flex', correct: false},
            {text: 'To point', correct: false},
        ]
    },
    {
        question: 'En Croix means',
        answers: [
            {text: 'Turnout of the hip', correct: false},
            {text: 'In a circle', correct: false},
            {text: 'The carriage of the arms', correct: false},
            {text: 'In the shape of a cross', correct: true},
        ]
    },
    {
        question: 'Releve means',
        answers: [
            {text: 'In the shape of a cross', correct: false},
            {text: 'To rise', correct: true},
            {text: 'To turn out', correct: false},
            {text: 'To bend', correct: false},
        ]
    }
]

