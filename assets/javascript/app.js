// Create on click function so trivia game begins when user clicks start button
// var answer1 = document.getElementById("km").value;
// var answer2 = document.getElementById("ka").value;
// var answer3 = document.getElementById("kar").value;
// var answer4 = document.getElementById("karm").value;
// var answer5 = document.getElementById("karma").value;
// var answer6 = document.getElementById("karma c").value;
// var answer7 = document.getElementById("karma ch").value;
// var answer8 = document.getElementById("karma cha").value;
var numQuestions = ["answer1", "answer2", "answer3", "answer4", "answer5", "answer6", "answer7", "answer8"];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredAnswers = 0;
var timer = 10;

window.onload = function(){ 
    document.getElementById("start-button").onclick = function(startGame) { 
		document.getElementById("start-button").style.visibility = "hidden"; // Hide start button when user clicks button.
		document.getElementById("question-section").style.display = "block"; // Make questions visible when user clicks button.
		document.getElementById("t-remaining").style.visibility = "visible"; // Make timer visible when user clicks button.
		for (var i = 0; i < numQuestions; i++) {
			var userGuess = document.getElementByValue("KarmaChameleon").checked;
			if (userGuess == numQuestions[i]) {
				correctAnswers++;
			}
			else {
				incorrectAnswers++; // Still need to increment unanswered questions, perhaps with if else statement.
			}
		console.log("Correct Answers: " + correctAnswers);
	};

	var count = document.getElementById("timer");
	function timeoutfn() {
		
		timer--;
       count.innerHTML = timer;
       if (timer == 0) {
       	return;
       }
       setTimeout(timeoutfn, 1000);
	}

	setTimeout(timeoutfn, 1000);
	};


};



// Generate list of questions and answers on click
// Define correct and incorrect guesses
// Increase value by 1 for correct and incorrect guesses
// Counts the number of unanswered questions as well.
// Implement a timer system so when the timer runs out it becomes a sort of submit button
// When timer runs out, perhaps function ends so no clicks are recorded?
// Generate an alert that reports correct and incorrect guesses