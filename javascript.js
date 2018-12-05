   
var playing = false;
var score;
var timesclicked = 0; 
var result;
// when clicking on start-reset button 
function startreset(){
    // check that we are not playing
     if(playing==false){
        score=0;
        document.getElementById("startreset").innerHTML=" Reset Game";
        document.getElementById("timeremaining").style.display ="block";
        document.getElementById("score").style.display ="inline";
        playing=true;

        generate();
         

     var counter = document.getElementById("time");
     var x=60;
     var mycounter = setInterval(Counter,1000);
     function Counter(){
         // couting down from 60 seconds before the game is over
        counter.innerHTML =x;
         if(x>0){ x=x-1;}

        else {
            document.getElementById("gameover").style.display="inline";
            document.getElementById("gameover").innerHTML="Game Over!"
            document.getElementById("gameover").innerHTML+="<br />your Score is " +score;
            document.getElementById("timeremaining").style.display ="none"; 
            }
     }
         
       sum = document.getElementById("scoreValue");
     document.getElementById("box1").onclick= function (){
        if(playing==true){
        if(document.getElementById("box1").innerHTML==result){ // if chosen answer is correct , display 'correct' message and increment the score
               document.getElementById("correct").style.display ="inline";
            setTimeout(function(){document.getElementById("correct").style.display="none"; },1000);
            score++;
            document.getElementById("scoreValue").innerHTML=score;
            generate();
        }
     else
         {document.getElementById("wrong").style.display ="inline"; //if chosen answer is correct , display 'Wrong' message
             setTimeout(function(){document.getElementById("wrong").style.display="none";},1000);
          }
         }
       }
         
     document.getElementById("box2").onclick=function (){
        if(playing==true){
        if(document.getElementById("box2").innerHTML==result){
               document.getElementById("correct").style.display ="inline";
            setTimeout(function(){document.getElementById("correct").style.display="none";},1000);
            score++;
            document.getElementById("scoreValue").innerHTML=score;
            generate();
        }
     else
         {document.getElementById("wrong").style.display ="inline";
             setTimeout(function(){document.getElementById("wrong").style.display="none";},1000);
          }
         }
        }
     
     document.getElementById("box3").onclick=function (){
        if(playing==true){
        if(document.getElementById("box3").innerHTML==result){
               document.getElementById("correct").style.display ="inline";
            setTimeout(function(){document.getElementById("correct").style.display="none";},1000);
            score++;
            document.getElementById("scoreValue").innerHTML=score;
            generate();
        }
     else
         {document.getElementById("wrong").style.display ="inline";
             setTimeout(function(){document.getElementById("wrong").style.display="none";},1000);
          }
         }
     }
         
     document.getElementById("box4").onclick=function (){
        if(playing==true){
        if(document.getElementById("box4").innerHTML==result){
               document.getElementById("correct").style.display ="inline";
            setTimeout(function(){document.getElementById("correct").style.display="none"; },1000);
            score++;
            document.getElementById("scoreValue").innerHTML=score;
            generate();
        }
     else
         {document.getElementById("wrong").style.display ="inline";
             setTimeout(function(){document.getElementById("wrong").style.display="none"; },1000);
          }
         }
       } 
  }
     
        // if start-reset button is pressed while playing , reload the page
    else{
        location.reload();
        
    }
 }

 // functions 

 function generate (){
    // this function generating two numbers between 0 and 10
var num1 = Math.floor(Math.random()*10);
var num2 = Math.floor(Math.random()*10);
 result = num1*num2; 
document.getElementById("question").innerHTML=num1 +"x"+ num2;

 var correctposition =1+Math.round(3*Math.random());
 document.getElementById("box"+correctposition).innerHTML =result;  
    
    var answers =[result];
    for(var i =1;i<5;i++){
        if(i!=correctposition){
            var wronganswer;
            do{
                
            wronganswer=Math.floor(Math.random()*10) * (Math.floor(Math.random()*10));
            
            }
            while(answers.indexOf(wronganswer)>-1)
       document.getElementById("box"+i).innerHTML=wronganswer;
          answers.push(wronganswer);
            
            
        }
        
    }
    
}


            
       
        


    
     
