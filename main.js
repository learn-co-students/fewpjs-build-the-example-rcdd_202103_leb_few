// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.getElementsByClassName("like-glyph")
const errorModal = document.querySelector("#modal")


document.addEventListener('click',(e)=>{
  mimicServerCall()
.then (()=>{
  if (heart.innerHTML == EMPTY_HEART){
    heart.innerHTML = FULL_HEART
    heart.className = "activated-heart"
  }else{
    heart.innerHTML = EMPTY_HEART
    heart.className = "like-glyph"
  }
})

  .catch (error => {
erroeModel.classList.remove("hidden")
setTimeout(()=>{
  errorModel.classList.add("hidden")
}, 3000)
  })


});


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
