// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const span = document.getElementsByTagName("span");
for(let i=0;i<span.length;i++) {
  span[i].addEventListener('click',(e) => {
    mimicServerCall().then((message) => {
      console.log(message);
      if(e.target.innerHTML === EMPTY_HEART) {
        e.target.innerHTML = FULL_HEART;
        e.target.classList.add('activated-heart');
      } else {
        e.target.innerHTML = EMPTY_HEART;
        e.target.classList.remove('activated-heart');
      }
    }).catch((error) => {
      document.getElementById("modal").classList.remove("hidden");
      console.log(error);
      document.getElementById("modal-message").innerHTML = error;
      setTimeout(() => {
        document.getElementById("modal").classList.add("hidden");
      },3000);
    });
  });
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
