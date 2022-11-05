// Get reference to form input that holds the user name
const userName = document.querySelector("#userName");

// Get reference to the save score button
const saveBtn = document.querySelector("#savebtn");

// Get reference to the final score h1
const finalScore = document.querySelector("#finalScore");

// Get the user's score from localStorage
const latestScore = localStorage.getItem("latestScore");

// Update the final score text
finalScore.innerText = latestScore;

userName.addEventListener("keyup", () => {
    // keep save button disable if the form is empty
    saveBtn.disabled = !userName.value;
});

const saveScore = (e) => {
    // Prevent the form from posting to a different page
    e.preventDefault();
    console.log("save button clicked");
};