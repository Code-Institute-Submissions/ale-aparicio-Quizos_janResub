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
        question: 'What is the name of the Hollow which attacked the Kurosaki clinic in the very 1st episode?',
        answers: [
            {text: 'Shrieker', correct: false},
            {text: 'Grand Fisher', correct: false},
            {text: 'Fishbone D', correct: true},
            {text: 'Menos Grande', correct: false},
        ]
    },
    {
        question: "The name of Ichigo Kurosaki's Bankai",
        answers: [
            {text: 'Tenshi Zangetsu', correct: false},
            {text: 'Tensa Zangetsu', correct: true},
            {text: 'Sekai Zangetsu', correct: false},
            {text: 'Senka Zangetsu', correct: false},
        ]
    },
    {
        question: "The name of Rukia's zanpakuto is Sode no Shiroyuki",
        answers: [
            {text: 'Flase', correct: true},
            {text: 'True', correct: false},
        ]
    },
    {
        question: "Coyote Starrk is the Primera Espada and thus is the strongest.",
        answers: [
            {text: 'True', correct: false},
            {text: 'False', correct: true},
        ]
    },
    {
        question: "What is the name of Kisuke Urahara's zanpakuto?",
        answers: [
            {text: 'Benihime', correct: true},
            {text: 'Nijigasumi', correct: false},
            {text: 'Benishidare', correct: false},
            {text: 'Benimaru', correct: false},
        ]
    },
    {
        question: 'Hado No. 4 is...?',
        answers: [
            {text: 'Sokatsui', correct: false},
            {text: 'Shakkaho', correct: false},
            {text: 'Tsuzuri Raiden', correct: false},
            {text: 'Byakurai', correct: true},
        ]
    },
    {
        question: "Gin Ichimaru's favourite fooditem is...",
        answers: [
            {text: 'Miso Soup', correct: false},
            {text: 'Ramen Noodles', correct: false},
            {text: 'Dried Persimmons', correct: true},
            {text: 'Sushi', correct: false},
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
        question: 'What is the name of the prison cell in which Aizen is being kept after his defeat at the hands of Ichigo.',
        answers: [
            {text: 'Yahiko', correct: false},
            {text: 'Akumahiro', correct: false},
            {text: 'Yume', correct: false},
            {text: 'Mugen', correct: true},
        ]
    },
    {
        question: "What is the name of Shunsui Kyoraku's zanpakuto?",
        answers: [
            {text: 'Katen Kimiko', correct: false},
            {text: 'Katen Kyototsu', correct: true},
            {text: 'Katen Kyotomi', correct: false},
            {text: 'Katen Kuriomi', correct: false},
        ]
    }
]

