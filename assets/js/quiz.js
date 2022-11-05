// Get reference to h2 that holds the question
const question = document.querySelector("#question");
// Get reference to p that hold the answer choices and make it an array
const choices = Array.from(document.querySelectorAll(".choice-text"));

let currentQuestion = {};
// for creating a delay between questions
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
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
        question: "When beign assigned to variables, string values must be enclosed within:",
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