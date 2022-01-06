//When page loads the "coding quiz challenges" section is visible (all other prompts are hidden)
var questionOne = document.getElementById("question-one");
var questionTwo = document.getElementById("question-two");
var questionThree = document.getElementById("question-three");
var questionFour = document.getElementById("question-four");
var questionFive = document.getElementById("question-five");
var countdown = document.getElementById("countdown");
var startBtn = document.getElementById("startBtn");
var container = document.querySelector(".container");
var questionsSec = document.querySelector(".questions");
var pageOne = document.getElementById("page-one");
var ansStatus = document.getElementById("right-wrong");
var allDone = document.getElementById("end-game");
var i = 0;

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var secondsLeft = 75;
function startGame() {
  setTimer();
  handleStartClick();
  displayNextQuestion();
}

function setTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--; 
    countdown.textContent = secondsLeft + " seconds remaining";
    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000); 
}

//handleAnswerClick() handles the task of clicking through answers and will run the displayQuestion() function once a user makes their choice
//IF user clicks on answer button
//THEN functions runs displayQuestion()
function handleStartClick(event) {
  if (questionOne.style.display === "none") {
    questionOne.style.display = "block";
    pageOne.style.display = "none";
  }
}

var btnIdx = 0;
var ansBtn = document.querySelectorAll(".ans-btn");
for ( var btnIdx = 0; btnIdx < ansBtn.length; btnIdx++) {
    ansBtn[btnIdx].addEventListener("click", function(event){
      if(event.target.matches("#right-ans")) {
        ansStatus.style.display = "block";
        ansStatus.textContent = ("Correct!");
        displayNextQuestion();
      } else {
        ansStatus.style.display = "block";
        ansStatus.textContent = ("wrong!");
        secondsLeft = secondsLeft-10;
        displayNextQuestion();
      }
   });
}

//Displays the next question && runs endGame() when last question is answered
function displayNextQuestion() {
  var index = questions;
  if (i === 0) {
        showElement(index[i]);
  }
  if (0 < i && i < index.length) {
        hideElement(index[i-1]);
        showElement(index[i]);
  }
  i++;
  if (i === 6) {
    endGame();
  }
}

function showElement(num) {
  num.style.display = "block";
}
function hideElement(num) {
  num.style.display = "none";
}

function endGame() {
  allDone.style.display = "block";
  questionsSec.style.display = "none";
  ansStatus.style.display = "none";
}

startBtn.addEventListener("click", startGame);
  


