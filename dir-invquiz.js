var questions = [
    {
          prompt: "a is directly proportional to b, when a = 5, and b = 8. What is the value of a when b = 24?\n(a) 10\n\ (b) 15\n(c) 20",
          answer: "b"
    },
    {
         prompt: "c is inversely proportional to d, when c = 10, and d = 6. What is the value of d when c = 20?\n(a) 3\n\ (b) 12\n(c) 9",
         answer: "a"
    },
    {
        prompt: "How is the volume scale factor calculated?\n(a) Find the length scale factor and double\n\ (b) Find the length scale factor and square\n(c) Find the length scale factor and cube",
        answer: "c"
  },
  {
       prompt: "If 4 calculators cost £4.80, how much would 9 calculators cost?\n(a) £10.80\n\ (b) £15.60\n(c) £9.60",
       answer: "a"
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