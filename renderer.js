const quizData = [
    {
        question: "Quel est le résultat de l'opération 2 + 2 ?",
        type: "multiple",
        options: ["3", "7", "4", "5"],
        correct: "4"
    },
    {
        question: "Vrai ou Faux : La tour Eiffel se situe en France ?",
        type: "boolean",
        options: ["Vrai", "Faux"],
        correct: "Vrai"
    },
    {
        question: "Quel animal abboie ?",
        type: "short",
        correct: "chien"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    if (currentQuestionIndex >= quizData.length) {
        quizContainer.innerHTML = `<h2>Quiz Terminé! Votre score est ${score}/${quizData.length}</h2>`;
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerText = currentQuestion.question;

    quizContainer.appendChild(questionElement);

    if (currentQuestion.type === 'multiple' || currentQuestion.type === 'boolean') {
        currentQuestion.options.forEach(option => {
            const optionElement = document.createElement('button');
            optionElement.classList.add('btn', 'option');
            optionElement.innerText = option;
            optionElement.addEventListener('click', () => checkAnswer(option));
            quizContainer.appendChild(optionElement);
        });
    } else if (currentQuestion.type === 'short') {
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.classList.add('option');
        quizContainer.appendChild(inputElement);

        const submitButton = document.createElement('button');
        submitButton.classList.add('btn');
        submitButton.innerText = 'Soumettre';
        submitButton.addEventListener('click', () => checkAnswer(inputElement.value));
        quizContainer.appendChild(submitButton);
    }
}

function checkAnswer(answer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (answer === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

loadQuestion();