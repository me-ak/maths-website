


var questions = [
    {
          prompt: "What is a surd?\n(a) A rational number\n\ (b) An irrational number\n(c) Neither",
          answer: "b"
    },
    {
         prompt: "Which number is irrational?\n(a) 3.0\n\ (b) 3.452\n(c) 3.57655657567687698",
         answer: "c"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);




