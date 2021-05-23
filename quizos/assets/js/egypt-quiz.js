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
        question: 'The delta of the Nile River provided Egyptians all of the following EXCEPT...',
        answers: [
            {text: 'regular rainfall', correct: true},
            {text: 'protection from invaders', correct: false},
            {text: 'a natural barrier', correct: false},
            {text: 'fertile soil', correct: false},
        ]
    },
    {
        question: 'The largest group of Egyptian society was made up of',
        answers: [
            {text: 'scribes and traders', correct: false},
            {text: 'farmers and workers', correct: true},
            {text: 'soldiers and nobles', correct: false},
            {text: 'artisans and merchants', correct: false},
        ]
    },
    {
        question: "The Nile River's flooding could be described as",
        answers: [
            {text: 'unpredictable', correct: false},
            {text: 'destructive', correct: false},
            {text: 'predictable', correct: true},
            {text: 'rare', correct: false},
        ]
    },
    {
        question: "Which body part was NOT put in to the Canopic Jars?",
        answers: [
            {text: 'stomach', correct: false},
            {text: 'lungs', correct: false},
            {text: 'brain', correct: true},
            {text: 'intestines', correct: false},
        ]
    },
    {
        question: 'A government in which the same person is both the political and religious leader is called a',
        answers: [
            {text: 'theocracy', correct: true},
            {text: 'dynasty', correct: false},
            {text: 'bureaucrat', correct: false},
            {text: 'pharaoh', correct: false},
        ]
    },
    {
        question: 'What is Ramses II best known for?',
        answers: [
            {text: 'writing a set of laws for Egypt', correct: false},
            {text: 'moving the capital to Thebes', correct: false},
            {text: 'being the ruler during the Old Kingdom', correct: false},
            {text: "expanding Egypt's borders and ruling for 66 years", correct: true},
        ]
    },
    {
        question: 'Which of the following is an achievement from Ancient Egypt?',
        answers: [
            {text: 'gun powder', correct: false},
            {text: 'cuneiform', correct: false},
            {text: '365 calendar', correct: true},
            {text: 'wheel', correct: false},
        ]
    },
    {
        question: 'What did the development of hieroglyphics allow Egyptians to do?',
        answers: [
            {text: 'write the first medical books', correct: true},
            {text: 'build pyramids and temples', correct: false},
            {text: 'invent the chariot', correct: false},
            {text: 'preserve dead bodies', correct: false},
        ]
    },
    {
        question: 'To learn how to obtain life after death, the Egyptians studied the...',
        answers: [
            {text: 'Book of Life after Death', correct: false},
            {text: 'Book of Spells', correct: false},
            {text: 'Book of Prayers', correct: false},
            {text: 'Book of the Dead', correct: true},
        ]
    },
    {
        question: 'How did developing papyrus help the Ancient Egyptians?',
        answers: [
            {text: 'it led to the construction of temples', correct: false},
            {text: 'it allowed for wide-spread record keeping', correct: true},
            {text: 'it increased demand for silk', correct: false},
            {text: 'it inspired the creation of money.', correct: false},
        ]
    }
]

