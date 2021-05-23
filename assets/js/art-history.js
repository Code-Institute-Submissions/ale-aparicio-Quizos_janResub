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
        question: 'Which period in art history had mostly RELIGION as the subject?',
        answers: [
            {text: 'Gothic', correct: true},
            {text: 'Ancient Greek', correct: false},
            {text: 'Renaissance', correct: false},
            {text: 'Impressionism', correct: false},
        ]
    },
    {
        question: 'Which period in art history had mostly ANIMALS as the subject?',
        answers: [
            {text: 'Ancient Greek', correct: false},
            {text: 'Paleolithic', correct: true},
            {text: 'Gothic', correct: false},
            {text: 'Renaissance', correct: false},
        ]
    },
    {
        question: 'Which period in art history was a REBIRTH of ideas like math and science, and a more REALISTIC approach to artwork?',
        answers: [
            {text: 'Gothic', correct: false},
            {text: 'Impressionism', correct: false},
            {text: 'Renaissance', correct: true},
            {text: 'Cubism', correct: false},
        ]
    },
    {
        question: "In which period in art history did artists start painting outdoors to capture the changing effects of light? (*hint: this was a response to the invention of photography).",
        answers: [
            {text: 'Pop Art', correct: false},
            {text: 'Cubism', correct: false},
            {text: 'Impressionism', correct: true},
            {text: 'Renaissance', correct: false},
        ]
    },
    {
        question: ' In the _____________ movement, we saw the first use of perspective to show the illusion of depth in artwork.',
        answers: [
            {text: 'Renaissance', correct: true},
            {text: 'Cubism', correct: false},
            {text: 'Gothic', correct: false},
            {text: 'Pop Art', correct: false},
        ]
    },
    {
        question: 'What time period best matches the Gothic art history movement?',
        answers: [
            {text: 'prehistoric', correct: false},
            {text: '1920s', correct: false},
            {text: 'late 1800s', correct: false},
            {text: '1100s - 1300s', correct: true},
        ]
    },
    {
        question: 'Where was the Renaissance art history movement mostly taking place?',
        answers: [
            {text: 'France', correct: false},
            {text: 'Greece', correct: false},
            {text: 'Italy', correct: true},
            {text: 'America', correct: false},
        ]
    },
    {
        question: 'Who painted the sun flower piece',
        answers: [
            {text: 'Michael Johnson', correct: false},
            {text: 'Vincent Van Gogh', correct: true},
            {text: 'Pablo Picasso', correct: false},
            {text: 'Claude Monet', correct: false},
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            {text: 'Titian', correct: false},
            {text: 'Diego Rivera', correct: false},
            {text: 'Frida Kahlo', correct: false},
            {text: 'Leonardo da Vinci', correct: true},
        ]
    },
    {
        question: 'Who painted the Birth of Venus',
        answers: [
            {text: 'Raphael', correct: false},
            {text: 'Sandro Botticelli', correct: true},
            {text: 'Vincent Van Gogh', correct: false},
            {text: 'Grant Wood', correct: false},
        ]
    }
]

