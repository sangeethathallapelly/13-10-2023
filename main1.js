player1_name=localStorage.getItem("player1_Name");
player2_name=localStorage.getItem("player2_Name");
player1_score=10;
player2_score=10;
document.getElementById("player1_Name").innerHTML=player1_name + " : ";

document.getElementById("player2_Name").innerHTML=player2_name + " : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn-" + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-" + player2_name;
function send(){
   
     number1=document.getElementById("number1").value; 
     number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)-parseInt(number2);
    console.log(actual_answer);
    question_number="<h4>"+number1+"-"+number2+"</h4>"
    input_box="<br>Answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
