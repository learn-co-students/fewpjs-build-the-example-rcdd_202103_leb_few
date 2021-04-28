// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
let heart = document.getElementById("heart");
console.log(heart)
let m = document.getElementById("modal");
function like(ev){
  let specific_heart = ev.target
  mimicServerCall()
  .then(function(){
    if(specific_heart.innerHTML == EMPTY_HEART){
    specific_heart.innerText = FULL_HEART;
    specific_heart.classList.add("activated-heart")
    }
    else{
      specific_heart.innerText = EMPTY_HEART;
      specific_heart.className = "";
    }
  })
  .catch(function(me){
    m.innerText=me;
    m.className =""
    setTimeout(()=>m.className="hidden",3000);
  });
}
let hearts = document.querySelectorAll(".like-glyph");
for(let i of hearts) {
  i.addEventListener("click", like)
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
