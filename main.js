


const questions = [
    {
        question: "What is HTML?",
        answers: [
            { text: "HTML describes the structure of a webpage", correct: false },
            { text: "HTML is the standard markup language mainly used to create webpages", correct: false },
            { text: "HTML consists of elements that help the browser understand the content", correct: false },
            { text: "All of the mentioned", correct: true }
        ]
    },

   {
        question: "Which tag is used to create a link in HTML?",
        answers: [
            { text: "a", correct: true },
            { text: "link", correct: false },
            { text: "href", correct: false },
            { text: "url", correct: false }
        ]
    },

    {
        question: "Why was the math book sad?",
        answers: [
            { text: "Because it had too many problems!", correct: true },
            { text: "Because it failed the test", correct: false },
            { text: "Because no one read it", correct: false },
            { text: "Because it was boring", correct: false }
        ]
    },
    {
        question: "What animal is Simba in The Lion King?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Leopard", correct: false },
            { text: "Lion", correct: true },
            { text: "Cheetah", correct: false }
        ]
    },
     {
        question: "Which superhero has a shield?",
        answers: [
            { text: "Iron Man", correct: false },
            { text: "Hulk", correct: false },
            { text: "Captain America", correct: true },
            { text: "Spider-Man", correct: false }
        ]
    },
     {
        question: "What is Shinchan's favorite food?",
        answers: [
            { text: "Ice cream", correct: false },
            { text: "Chips", correct: false },
            { text: "Choco chips", correct: false },
            { text: "Choco chips and Miso soup", correct: true }
        ]
    },
    {
        question: "What is the name of Shinchan's sister?",
        answers: [
            { text: "Mei", correct: false },
            { text: "Himawari", correct: true },
            { text: "Yuki", correct: false },
            { text: "Sakura", correct: false }
        ]
    },
    {
        question: "What goes up but never comes down?",
        answers: [
            { text: "Rain", correct: false },
            { text: "Age", correct: true },
            { text: "Smoke", correct: false },
            { text: "Kite", correct: false }
        ]
    },
     {
        question: "Which property is used to change the background color in CSS?",
        answers: [
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "background", correct: false }
        ]
    },
        {
        question: "What is Figma primarily used for?",
        answers: [
            { text: "Video editing", correct: false },
            { text: "Game development", correct: false },
            { text: "UI/UX design and prototyping", correct: true },
            { text: "3D animation", correct: false }
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answer-btns"); // fixed selector
const nextButton = document.getElementById("next_btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
