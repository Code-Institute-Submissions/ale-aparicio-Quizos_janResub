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
        question: 'Who does Elena meet first out of the vampires?',
        answers: [
            {text: 'Alaric', correct: false},
            {text: 'Damon', correct: true},
            {text: 'Caroline', correct: false},
            {text: 'Stefan', correct: false},
        ]
    },
    {
        question: "What's the name of the bridge that Elena's parents died on?",
        answers: [
            {text: 'Wacker Bridge', correct: false},
            {text: 'Wilson Bridge', correct: false},
            {text: 'Walker Bridge', correct: false},
            {text: 'Wickery Bridge', correct: true},
        ]
    },
    {
        question: 'Why does Elena turn off her humanity in season 4, ep 15?',
        answers: [
            {text: 'Jeremy died and Damon tells her it’s easier ', correct: true},
            {text: 'Bonnie dies', correct: false},
            {text: 'Damon breaks up with her', correct: false},
            {text: 'Stefan tries to kill her', correct: false},
        ]
    },
    {
        question: "What animal does Klaus draw with Caroline with his apology drawing?",
        answers: [
            {text: 'Horse', correct: true},
            {text: 'Dog', correct: false},
            {text: 'Cat', correct: false},
            {text: 'Kangaroo', correct: false},
        ]
    },
    {
        question: 'Who turned Damon and Stefan into vampires?',
        answers: [
            {text: 'Anna', correct: false},
            {text: 'Elena', correct: false},
            {text: 'Katherine', correct: true},
            {text: 'Alaric', correct: false},
        ]
    },
    {
        question: 'Why did Klaus want to keep Elena alive',
        answers: [
            {text: 'For her blood', correct: true},
            {text: 'He loved her', correct: false},
            {text: 'Its just luck', correct: false},
            {text: 'He wanted to kill her himself', correct: false},
        ]
    },
    {
        question: 'In Season 1, how does Vicki die?',
        answers: [
            {text: 'She drinks vervain', correct: false},
            {text: 'she gets in a car accident', correct: false},
            {text: 'Stefan is forced to stake her', correct: true},
            {text: "She doesn't, she's alive", correct: false},
        ]
    },
    {
        question: 'What does the herb vervain do?',
        answers: [
            {text: 'It helps to see the future', correct: false},
            {text: 'It turns humans into vampires', correct: false},
            {text: 'It allows vampires to walk in the daylight', correct: false},
            {text: 'It protects humans from vampire compulsion', correct: true},
        ]
    },
    {
        question: 'Who are The Originals',
        answers: [
            {text: 'Damon and Stefan Salvatore', correct: false},
            {text: "Elena and Jeremy's parents", correct: false},
            {text: 'Katherine and her crew', correct: false},
            {text: 'The first generation of vampires', correct: true},
        ]
    },
    {
        question: "What power does Elena's necklace have?",
        answers: [
            {text: 'It connects her to her parents', correct: false},
            {text: 'It protects her against vampires', correct: false},
            {text: 'it can contact the original witch', correct: true},
            {text: 'It makes her immune to vampire compulsion', correct: false},
        ]
    }
]

