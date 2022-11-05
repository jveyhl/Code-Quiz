// Get reference to form input that holds the user name
const userName = document.querySelector("#userName");

// Get reference to the save score button
const saveBtn = document.querySelector("#savebtn");

// Get reference to the final score h1
const finalScore = document.querySelector("#finalScore");

// Get the user's score from localStorage
const latestScore = localStorage.getItem("latestScore");

// getQuestion() is saving the user's score into localStorage
// Get what's in localStorage or, if localStorage is empty, make an empty array to initialize highScores
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Number of scores allowed on the high score list
const highScoreLength = 5;

// Update the final score text
finalScore.innerText = latestScore;

userName.addEventListener("keyup", () => {
    // keep save button disable if the form is empty
    saveBtn.disabled = !userName.value;
});

const saveScore = (e) => {
    // Prevent the form from posting to a different page
    e.preventDefault();

    // Create a score object
    const score = {
        score: latestScore,
        name: userName.value
    };

    // Add the score object to the highScores array
    highScores.push(score);

    // Sort the highScores to make a list of the top 5 highest scores
    highScores.sort( (a,b) => {
        // if b.score is higher than a.score put b before a
        return b.score - a.score;
    });

    // Trim the highScore list to hold the number of items we want
    highScores.splice(highScoreLength);

    // Update the highScores list in localStorage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Go back home
    window.location.assign("/");
};

