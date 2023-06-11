var questions = [
    {
          prompt: "What effect will f(x) + a have on a graph?\n(a) Reflection in the y-axis\n\ (b) Translation in the y-axis\n(c) Translation in the x-axis",
          answer: "b"
    },
    {
         prompt: "What effect will f(x + a) have on the graph of f(x)?\n(a) Translation in the x-direction\n\ (b) Reflection in the y-direction\n(c) Translation in the y-direction",
         answer: "a"
    },
    {
        prompt: "Describe the transformation that -f(x) represents on the graph of f(x)?\n(a) Translation in the x-direction\n\ (b) Reflection in the x-axis\n(c) Reflection in the y-axis",
        answer: "b"
  },
  {
       prompt: "Describe the transformation that f(-x) represents on the graph of f(x)?\n(a) Translation in the y-direction\n\ (b) Reflection in the x-axis\n(c) Reflection in the y-axis",
       answer: "c"
  },
  {
    prompt: "Which function represents a reflection of the function f(x) in the y-axis?\n(a) f(xy)\n\ (b) f(-x)\n(c) -f(x)",
    answer: "b"
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