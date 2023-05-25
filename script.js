// // Countdown function
// function countdown() {
//     var count = 10 ;
//     var countdownElement = document.getElementById('countdown');
  
//     var countdownInterval = setInterval(function() {
//       countdownElement.textContent = count;

//       if (count === 0) {
//         count.style.fontSize= initialCountdownVal * 100 + "px"

//         clearInterval(countdownInterval);
//         countdownElement.textContent = "Countdown Finished!";
//       }
  
//       count--;
//     }, 1000);
//   }
  
//   // Start the countdown when the page loads
//   window.onload = countdown;








// window.onload = function() {
//     var colorButton = document.getElementById('colorButton');
//     colorButton.addEventListener('click', changeColor);
  
//     function changeColor() {
//       var randomColor = getRandomColor();
//       document.body.style.backgroundColor = randomColor;
//     }
  
//     function getRandomColor() {
//       var letters = '0123456789ABCDEF';
//       var color = '#';
//       for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 10)];
//       }
//       return color;
//     }
//   };







// window.onload = function() {
//     var toggleButton = document.getElementById('toggleButton');
//     var textElement = document.getElementById('text');
//     var isIncreased = false;
  
//     toggleButton.addEventListener('click', toggleTextSize);
  
//     function toggleTextSize() {
//       if (isIncreased) {
//         textElement.style.fontSize = '24px';
//         isIncreased = false;
//       } else {
//         textElement.style.fontSize = '32px';
//         isIncreased = true;
//       }
//     }
  
//     var sidebar = document.querySelector('.sidebar');
//     var sidebarToggleButton = document.getElementById('sidebarToggleButton');
//     var isSidebarVisible = false;
  
//     sidebarToggleButton.addEventListener('click', toggleSidebar);
  
    // function toggleSidebar() {
    //   if (isSidebarVisible) {
    //     sidebar.style.left = '-200px';
    //     isSidebarVisible = false;
    //   } else {
    //     sidebar.style.left = '0';
    //     isSidebarVisible = true;
    //   }
    // }
// toggleButton.addEventListener('click',function(){
//     if(sidebar.classList.contains('show')){
//         sidebar.classList.remove('show');
//         sidebar.classList.add('hide');  
//     }else{
//         sidebar.classList.add('show');
//         sidebar.classList.remove('hide');

//     }
// }

//   });
  
// function playSound(audioName) {
//   let audio = new Audio(audioName);
//   audio.play();
// }
// playSound("boom.mav");




var btn = document.getElementById('btn');
function btnFirst(){
    let audio = new Audio("kick.wav");
    audio.play();
}
btn.addEventListener("click",btnFirst);

var btn1 =  document.getElementById('btn1');
function btnFirst2(){
    let audio1 = new Audio("clap.wav");
    audio1.play();
}
btn1.addEventListener("click",btnFirst2);

var btn2 =  document.getElementById('btn2');
function btnFirst3(){
    let audio2 = new Audio("tink.wav");
    audio2.play();
}
btn2.addEventListener("click",btnFirst3);


var btn3 =  document.getElementById('btn3');
function btnFirst4(){
    let audio3 = new Audio("tom.wav");
    audio3.play();
}
btn3.addEventListener("click",btnFirst4);

var btn4 =  document.getElementById('btn4');
function btnFirst5(){
    let audio4 = new Audio("ride.wav");
    audio4.play();
}
btn4.addEventListener("click",btnFirst5);
