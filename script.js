//When page loads the "coding quiz challenges" section is visible (all other prompts are hidden)
var questionOne = document.getElementById("question-one");
var countdown = document.getElementById("countdown");
var startBtn = document.getElementById("startBtn");
var questionsSec = document.getElementById("questions");
var pageOne = document.getElementById("page-one");
/*var ansBtn = document.querySelectorAll(".ans-btn");*/


var secondsLeft = 75;
function startGame() {
  setTimer();
  handleStartClick();
  /*displayQuestion();*/
}

function setTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--; //if statement to make the var - 10 when answer is wrong
    countdown.textContent = secondsLeft + " seconds remaining";
    
    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
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

var counter = 1;
var ansBtn = document.querySelectorAll(".ans-btn");
for ( var counter = 0; counter < ansBtn.length; counter++) {
    ansBtn[counter].addEventListener("click", function(){
      alert("thats a answer");
   });
}


function displayQuestion() {
  

  }

  /*function hideContent() {
  }*/

  startBtn.addEventListener("click", startGame);
  



  //when "begin quiz" is clicked time interval is set and first question is displayed 
        //setTime() function that sets the time to 60 seconds
        //time interval counts down by 1 second and deducts 10 seconds every time a user gets a question incorrect

//User is prompted with first question
    //When user selects answer choice "wrong answer!" or "correct answer!" is displayed beneath the prompt
    //User is then prompted with following question and so on until last question 
    //after user has answered the last prompt, the page displays their final score and asks for initials

//If time runs out BEFORE user answers all questions, the display jumps to final score page and says "YOU LOST!"

//Highscores are kept in local storage and user is able to click "view highscores" to go to that page
//endGame() called w

