var n=0;
var turn = document.getElementById("turn"),
// boxes => all boxes
// X_or_O => to set X or O into the box
   boxes = document.querySelectorAll("#main div"), X_or_O = 0;
document.getElementById("btnplay").style.display="none";
function selectWinnerBoxes(b1,b2,b3,c=0){
   b1.classList.add("win");
   b2.classList.add("win");
   b3.classList.add("win");
   console.log("c= "+ c);
   if(c===1){
   turn.innerHTML = b1.innerHTML + " Won Congrat";
   swal("Congratulations!", "You Won!", "success")
   document.getElementById("box1").style.display="none";
   document.getElementById("box2").style.display="none";
   document.getElementById("box3").style.display="none";
   document.getElementById("box4").style.display="none";
   document.getElementById("box5").style.display="none";
   document.getElementById("box6").style.display="none";
   document.getElementById("box7").style.display="none";
   document.getElementById("box8").style.display="none";
   document.getElementById("box9").style.display="none";
   document.getElementById("btnplay").style.display="block";
   turn.style.fontSize = "40px";
   }
   else if(c===0)
   {
    turn.innerHTML = "Draw";
   document.getElementById("btnplay").style.display="block";
    swal("Draw!", "No One Won!", "warning")
}
}

function getWinner(){
   
   var box1 = document.getElementById("box1"),
       box2 = document.getElementById("box2"),
       box3 = document.getElementById("box3"),
       box4 = document.getElementById("box4"),
       box5 = document.getElementById("box5"),
       box6 = document.getElementById("box6"),
       box7 = document.getElementById("box7"),
       box8 = document.getElementById("box8"),
       box9 = document.getElementById("box9");

// all posibilites
 if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
    selectWinnerBoxes(box1,box2,box3,1);

 else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
    selectWinnerBoxes(box4,box5,box6,1);

 else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box7,box8,box9,1);

 else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
    selectWinnerBoxes(box1,box4,box7,1);

 else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
    selectWinnerBoxes(box2,box5,box8,1);

 else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box3,box6,box9,1);

 else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box1,box5,box9,1);

 else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
    selectWinnerBoxes(box3,box5,box7,1);

 else if(n===9)
    selectWinnerBoxes(box3,box5,box7,0);
}


// set event onclick
for(var i = 0; i < boxes.length; i++){
   boxes[i].onclick = function(){
// not allow to change the value of the box
       n=n+1;
       if(this.innerHTML !== "X" && this.innerHTML !== "O"){
       if(X_or_O%2 === 0){
          console.log(X_or_O);
          this.innerHTML = "X"; 
          turn.innerHTML = "O Turn Now";
          getWinner();
          X_or_O += 1;
          
       }else{
           console.log(X_or_O);
          this.innerHTML = "O";
          turn.innerHTML = "X Turn Now";
          getWinner();
          X_or_O += 1;  
       }
   }
       
}

function replay(){
    n=0;
   document.getElementById("btnplay").style.display="none";
   document.getElementById("box1").style.display="block";
   document.getElementById("box2").style.display="block";
   document.getElementById("box3").style.display="block";
   document.getElementById("box4").style.display="block";
   document.getElementById("box5").style.display="block";
   document.getElementById("box6").style.display="block";
   document.getElementById("box7").style.display="block";
   document.getElementById("box8").style.display="block";
   document.getElementById("box9").style.display="block";
   for(var i = 0; i < boxes.length; i++){
       boxes[i].classList.remove("win");
       boxes[i].innerHTML = "";
       turn.innerHTML = "Play";
       turn.style.fontSize = "40px";
   }
};
}