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
        question: 'What did the Columbian Exchange cause to happen?',
        answers: [
            {text: 'Sharing of new ideas & products caused economic growth', correct: true},
            {text: 'Europeans were killed by American diseases.', correct: false},
            {text: 'Sharing of new ideas & products caused the economy to get worse', correct: false},
            {text: 'A sharing of jobs in both the Americas and Europe between Native Americans and immigrants', correct: false},
        ]
    },
    {
        question: 'Where did democracy originate?',
        answers: [
            {text: 'Visigoths', correct: false},
            {text: 'Ancient Greece', correct: true},
            {text: 'Mongolians', correct: false},
            {text: 'Ancient Rome', correct: false},
        ]
    },
    {
        question: 'What is a heretic?',
        answers: [
            {text: 'A person who has a lot of hair', correct: false},
            {text: 'A person whose beliefs are the same as the Church.', correct: false},
            {text: 'A person whose beliefs are not the same as the Church.', correct: true},
            {text: 'A person who lives near the woods', correct: false},
        ]
    },
    {
        question: " King Ferdinand believed anyone who was a heretic and didn't follow God as the Catholic Church believed, should die. As a result, what movement did he begin?",
        answers: [
            {text: 'The Spanish Inquisition', correct: true},
            {text: 'The Black Death', correct: false},
            {text: 'The Holy Crusades', correct: false},
            {text: 'The Gutenberg Press', correct: false},
        ]
    },
    {
        question: 'What technology created in the Middle Ages changed the world and how?',
        answers: [
            {text: 'The Gutenberg press now allowed the mass printing of books.', correct: true},
            {text: 'The Spanish Inquisition developed a new questioning process used by all police in the world today.', correct: false},
            {text: 'The grape press now allowed the making of ', correct: false},
            {text: 'The Holy Crusades now allowed the mass destruction of Jerusalem.', correct: false},
        ]
    },
    {
        question: 'What was one of the results of the pope promising the Christian men of Western Europe that their sins would be forgiven if they went on the Crusades?',
        answers: [
            {text: 'Many men enlisted to fight the Crusades knowing all the sins they had committed.', correct: false},
            {text: 'Many women and children died without their husbands and fathers to care for them.', correct: false},
            {text: 'Many men ran away from the Catholic Church and became Orthodox to keep from enlisting in the military.', correct: false},
            {text: 'Many men died and lowering the population of Western Europe', correct: true},
        ]
    },
    {
        question: 'Who shared the concept of self-government with the French?',
        answers: [
            {text: 'Americans during their own American Revolution', correct: true},
            {text: 'Napoleon during his reign of France', correct: false},
            {text: 'Canadians during their own Revolution', correct: false},
            {text: 'British during their war with France', correct: false},
        ]
    },
    {
        question: 'What are the name of the three long-shaped countries that acronym is also "Never Stops Freezing?"',
        answers: [
            {text: 'Netherlands, Switzerland, France', correct: false},
            {text: 'Norway, Sweden, Finland', correct: true},
            {text: 'Norway, Switzerland, France', correct: false},
            {text: 'Netherlands, Sweden, France', correct: false},
        ]
    },
    {
        question: 'How do Europeans work to cooperate together and maintain peace?',
        answers: [
            {text: 'Agreeing never to argue again', correct: false},
            {text: 'Membership in NAFTA', correct: false},
            {text: 'Agreeing that all countries are brothers to one another', correct: false},
            {text: 'Membership in the European Union', correct: true},
        ]
    },
    {
        question: 'When was the first version of the European Union created?',
        answers: [
            {text: 'After the Russian Revolution', correct: false},
            {text: 'After World War II', correct: true},
            {text: 'After the French Revolution', correct: false},
            {text: 'After World War I', correct: false},
        ]
    }
]

