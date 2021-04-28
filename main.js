// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let hearts = document.getElementsByClassName('like-glyph')
// Your JavaScript code goes here!
 let hidden= document.getElementsByClassName('hidden');
for(let i =0;i<hearts.length;i++){
  hearts[i].addEventListener('click',(e)=>{
    mimicServerCall().then((message)=>{
      console.log(message);
      if(e.target.innerHTML===EMPTY_HEART){
        e.target.classList.add('activated-heart');
      }else {
        e.target.innerHTML= EMPTY_HEART;
        e.target.classList.remove('activated-heart');
      }
    }).catch((error)=>{
      document.getElementById('modal').classList.remove('hidden');
      console.log(error);
      document.getElementById('modal-message').innerHTML= error ;
      setTimeout(()=>{
        document.getElementsById('modal').classList.add('hidden');
      },3000);

    })
  })
}

// mimicServerCall })
  // function likeCallback(e) {
  //   let heart = e.target;
  //
  //     .then(mimicServerCall(resolve,reject){
  //       // STEP 2: Uncomment the next 3 lines.
  //       // We'll use Pillar 1 (DOM Manipulation) to update the screen and
  //       // mimic Pillar 3 (Server Communication) to only update the screen if the
  //       // sending of information to the server succeeds.
  //       alert("You notified the server!");
  //       // alert(serverMessage);
  //       // heart.innerText = glyphStates[heart.innerText];
  //       // heart.style.color = colorStates[heart.style.color];
  //     })
  //     .catch(function(error) {
  //       alert("Something went wrong!");
  //     });
  // }


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
