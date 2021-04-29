// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const error = document.getElementById("modal");
const message = document.getElementById("modal-message");
error.className = "hidden";

const hearts = document.getElementsByClassName("like-glyph");

for(const heart of hearts){
  heart.addEventListener("click", function(e){
    if(heart.innerHTML === EMPTY_HEART){
      ifEmpty(heart);
    }
    if(heart.innerHTML === FULL_HEART){
      ifFull(heart);
    }
  });
}

function ifEmpty(heart){
    mimicServerCall()
    .then(function(response){
      heart.innerHTML = FULL_HEART;
      heart.className = "activated-heart";
    })
    .catch(function(response){
      error.classList.remove("hidden");
      message.innerHTML = response;
      setTimeout(function(){error.className = "hidden";}, 3000);
    });
}

function ifFull(heart){
  heart.innerHTML = EMPTY_HEART;
  heart.classList.remove("activated-heart");
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
