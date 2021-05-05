const FULL_HEART = '♥'


let like = document.getElementsByClassName('like-glyph');
let error = document.getElementById('modal');
let modalMessage = document.getElementById('modal-message');

for (let i=0;i<like.length;i++){
  like[i].addEventListener('click',function(e){
    mimicServerCall()
    .then((response)=>{
      if(like.innerHTML === `${FULL_HEART}`)
      {
        like.innerHTML = `${EMPTY_HEART}`;
        like.classList.remove("activate-heart");
      } else {
        like.innerHTML = `${FULL_HEART}`;
        like.classList.add("activate-heart");
      }

    })
    .catch(()=>{
      error.classList.remove('hidden');
      modalMessage.insertAdjacentHTML('beforeend',`${error.message}`);
      modalMessage.classList.remove('hidden');
      let timeoutID = window.setTimeout(modalMessage.classList.add('hidden'),3000);
  })
  })
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
