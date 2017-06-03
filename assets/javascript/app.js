// Create on click function so trivia game begins when user clicks start button
var answer1 = document.getElementById("km");
var answer2 = document.getElementById("ka");
var answer3 = document.getElementById("kar");
var answer4 = document.getElementById("karm");
var answer5 = document.getElementById("karma");
var answer6 = document.getElementById("karma c");
var answer7 = document.getElementById("karma ch");
var answer8 = document.getElementById("karma cha");
var numQuestions = ["answer1", "answer2", "answer3", "answer4", "answer5", "answer6", "answer7", "answer8"]
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredAnswers = 0;

window.onload = function(){ 
    document.getElementById("start-button").onclick = function () { 
		document.getElementById("start-button").style.visibility = "hidden"; // Hide start button when user clicks it.
		document.getElementById("question-section").style.display = "block";
		document.getElementById("t-remaining").style.visibility = "visible";
		document.getElementById("timer").innerHTML =
  		00 + ":" + 10;
		startTimer();
		for (var i = 0; i < numQuestions; i++) {
			if (userInput[i]==answers[i]) {
				correctAnswers += 1;
			}
			else {
				incorrectAnswers += 1;
			}
		console.log(correctAnswers);
	};
};

function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById("timer").innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}


};



// Generate list of questions and answers on click
// Define correct and incorrect guesses
// Increase value by 1 for correct and incorrect guesses
// Counts the number of unanswered questions as well.
// Implement a timer system so when the timer runs out it becomes a sort of submit button
// When timer runs out, perhaps function ends so no clicks are recorded?
// Generate an alert that reports correct and incorrect guesses