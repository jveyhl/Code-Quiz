// Get reference to h2 that holds the question
const question = document.querySelector("#question");
// Get reference to p that holds the answer choices and make it an array
const choices = Array.from(document.querySelectorAll(".choice-text"));

let currentQuestion = {};
// for creating a delay between questions
let canAnswer = false;
let score = 0;
let questionCounter = 0;
// five quiz question objects in an array
let questions = [
    {
        question: "Commonly used data types do NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4
    },
    {
        question: "The condition in an if/else statemnent is enclosed with:",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4: "square brackets",
        answer: 3
    },
    {
        question: "When assigned to variables, string values must be enclosed within:",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "commas",
        choice4: "parentesis",
        answer: 1
    },
    {
        question: "A useful debugging tool for printing content to the debugger is:",
        choice1: "for loops",
        choice2: "console.log",
        choice3: "terminal/bash",
        choice4: "JavaScript",
        answer: 2
    }
];

// correct answers are worth 10 points
const pointsVal = 10;

// get a random question from the questions array
const getQuestion = () => {
    // get a random number to use as an index for the quesiton array
    let questionIndex = Math.floor(Math.random()*questions.length);
    let chosenQuestion = questions[questionIndex];
    // set the question in the h2
    question.innerText = chosenQuestion.question; 
    // get the answer options from the questions array; itterate through each of the choices and get a reference to each choice
    choices.forEach( choice => {
        // get the number from the data-number property in the p that holds the answer choice
        const number = choice.dataset["number"];
        // concatenate the string "choice" with the data set number to create an index to access the answer choices in the current question
        choice.innerText = chosenQuestion["choice"+number];
    });

    // allow user to answer
    canAnswer = true;
};

// initialize a new game
const startGame = () => {
    // set score to zero
    score = 0;
    getQuestion();
};

choices.forEach( choice => {
    choice.addEventListener("click", e => {
        // ignore clicks until we decide they can answer
        if(!canAnswer) return;

        // make delay between answers
        canAnswer = false;

        // store the user's choice
        const selectedChoice = e.target;
        // get the data-number associated with the user's choice
        const selectedAnswer = selectedChoice.dataset["number"];
        //LEFT OFF HERE
    });
});

startGame();