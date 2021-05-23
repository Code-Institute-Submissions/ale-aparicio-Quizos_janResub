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
        question: 'Who was president during WWI?',
        answers: [
            {text: 'Woodrow Wilson', correct: true},
            {text: 'Abraham Lincoln', correct: false},
            {text: 'Theodore Roosevelt', correct: false},
            {text: 'Donald Trump', correct: false},
        ]
    },
    {
        question: 'Who were the countries fighting for the ally powers?',
        answers: [
            {text: 'France, Belgium, Alaska, Mexico', correct: false},
            {text: 'France, Belgium, Great Britain, Russia, Serbia', correct: true},
            {text: 'Iraq, Iran, India, Greece', correct: false},
            {text: 'Central Powers', correct: false},
        ]
    },
    {
        question: ' What was the name of Austria Hungary, Bulgaria, Germany, and the Ottoman Empire?',
        answers: [
            {text: 'Central Powers', correct: true},
            {text: 'Allies', correct: false},
        ]
    },
    {
        question: "What was the name of the British passenger ship that was sank by the Germans?",
        answers: [
            {text: 'The Titanic', correct: false},
            {text: 'The Carnival Cruise Ship', correct: false},
            {text: 'Lusitania', correct: true},
            {text: 'The World Ship', correct: false},
        ]
    },
    {
        question: 'In what year did WW1 start',
        answers: [
            {text: '1914', correct: true},
            {text: '1912', correct: false},
            {text: '1916', correct: false},
            {text: '1920', correct: false},
        ]
    },
    {
        question: 'What year did WW1 end?',
        answers: [
            {text: '1930', correct: false},
            {text: '1919', correct: false},
            {text: '1900', correct: false},
            {text: '1918', correct: true},
        ]
    },
    {
        question: 'What caused the US to enter the war?',
        answers: [
            {text: 'Army tanks being blown up', correct: false},
            {text: 'US soldiers being killed', correct: false},
            {text: 'US ships being sank', correct: true},
            {text: 'Germany assassinated the president', correct: false},
        ]
    },
    {
        question: 'What were the submarines called that were used by Germany?',
        answers: [
            {text: 'W Boats', correct: false},
            {text: 'U Boats', correct: true},
            {text: 'Tanks', correct: false},
            {text: 'Missiles', correct: false},
        ]
    },
    {
        question: 'Which side did the US support?',
        answers: [
            {text: 'Central Powers', correct: false},
            {text: 'Allies', correct: true},
        ]
    },
    {
        question: 'Who sank the British Passenger ship?',
        answers: [
            {text: 'Belgium', correct: false},
            {text: 'Germany', correct: true},
            {text: 'Russia', correct: false},
            {text: 'US', correct: false},
        ]
    }
]

