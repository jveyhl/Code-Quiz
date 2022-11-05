// Get reference to high scores list
const highScoresList = document.querySelector("#highScoresList");

// getQuestion() is saving the user's score into localStorage
// Get what's in localStorage or, if localStorage is empty, make an empty array to initialize highScores
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Iterate through each score and add an li to ul for each score
// join the elements in the array with an empty string to make the content a string
// Use this to populate the highScoresList ul
highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");