//When page loads the "coding quiz challenges" section is visible (all other prompts are hidden)
var countdown = document.getElementById("countdown");
var startBtn = document.getElementById("startBtn");

var secondsLeft = 60;


function setTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--; //if statement to make the var - 10 when answer is wrong
      countdown.textContent = secondsLeft + " seconds remaining";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000); 
  }

  startBtn.addEventListener("click", setTimer);


  //when "begin quiz" is clicked time interval is set and first question is displayed 
        //setTime() function that sets the time to 60 seconds
        //time interval counts down by 1 second and deducts 10 seconds every time a user gets a question incorrect

//User is prompted with first question
    //When user selects answer choice "wrong answer!" or "correct answer!" is displayed beneath the prompt
    //User is then prompted with following question and so on until last question 
    //after user has answered the last prompt, the page displays their final score and asks for initials

//If time runs out BEFORE user answers all questions, the display jumps to final score page and says "YOU LOST!"

//Highscores are kept in local storage and user is able to click "view highscores" to go to that page

