// Get reference to h2 that holds the question
const question = document.querySelector("#question");

// Get reference to all p that holds the answer choices and make it an array
const choices = Array.from(document.querySelectorAll(".choice-text"));

// Get reference to hud h1 that holds the score
const hudScore = document.querySelector("#score");

// Get reference to hud h1 that holds the question counter
const hudCount = document.querySelector("#questionCounter");

let currentQuestion = {};
// for creating a delay between questions
let canAnswer = false;
let score = 0;
let questionCounter = 0;
// will act as a copy of the questions array to be modified without changing the questions array
let availableQuestions = [];

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
        choice1: "curly brackets",
        choice2: "quotes",
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
const pointsVal = 1;
// number of questions to display before game over
const maxQuestions = questions.length;

//get a random question from the questions array
const getQuestion = () => {
    // verify that the availableQuestions array is not empty and action when all questions are finished
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        // save user score to localStorage
        localStorage.setItem("latestScore", score);
        // when all questions have been asked the game is over
        return window.location.assign("./gameover.html");
    };
    
    // update number of questions asked
    questionCounter++;
    
    // update the hud questionCounter text
    hudCount.innerText = `${questionCounter}/${maxQuestions}`;

    // get a random number to use as an index for the quesiton array
    const questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    // set the question in the h2
    question.innerText = currentQuestion.question;
    
    // get the answer options (choices) from the availableQuestions array; itterate through each of the choices and get a reference to each choice
    choices.forEach( choice => {
        // get the number from the data-number property in the p that holds the answer choice
        const number = choice.dataset["number"];
        // concatenate the string "choice" with the data set number to create an index to access the answer choices in the current question
        choice.innerText = currentQuestion["choice"+number];
        console.log("number from get q",number)
    });

    // remove used question from availableQuestions array
    availableQuestions.splice(questionIndex, 1);
    console.log("available q from get q", availableQuestions);

    // allow user to submit answer
    canAnswer = true;
};

// initialize a new game
const startGame = () => {
    // set counter to zero
    questionCounter = 0;
    // set score to zero
    score = 0;
    // use spread operator to copy questions array content into new array to pop off asked questions
    availableQuestions = [...questions];
    console.log("available questions from startgame()",availableQuestions);
    getQuestion();
};

// recieve selected answer from user
choices.forEach( choice => {
    choice.addEventListener("click", e => {
        // ignore clicks until we decide they can answer
        if(!canAnswer) return;
       
        // make delay between answers
        canAnswer = false;
        
        // store the user's choice
        const userChoice = e.target;
        // get the choice-text p element's data-number associated with the user's choice
        // convert the string to a number
        const userChoiceNumber = parseInt(userChoice.dataset["number"]);
        
        // apply a correct/incorrect class to choice-container based on the user's choice
        const applyClass = userChoiceNumber===currentQuestion.answer ? "correct" : "incorrect";
        userChoice.parentElement.classList.add(applyClass);

        // update score
        if (applyClass === "correct") {
            updateScore(pointsVal);
        };

        // pause for 1 second before remove correct/incorrect class
        setTimeout( () => {
        // remove correct/incorrect class
        userChoice.parentElement.classList.remove(applyClass);
        // get the next question
        getQuestion();
        }, 1000);
    });
});

// update the user's score
const updateScore = (num) => {
    score += num;
    // display updated score in hud
    hudScore.innerText = score;
};

startGame();