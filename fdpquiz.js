var questions = [
    {
          prompt: "What is 25% of 44?\n(a) 44\n\ (b) 22\n(c) 11",
          answer: "c"
    },
    {
         prompt: "What is 0.125 as a fraction in its simplest form?\n(a) &frac18; \n\ (b) &frac38;\n(c) &frac58;",
         answer: "a"
    },
    {
         prompt: "What is 80% as a fraction?\n(a) &frac16;\n\ (b) &frac45;\n(c) &frac25;",
         answer: "b"
    },
    {
        prompt: "What is 0.375 as a fraction?\n(a) &frac38;\n\ (b) &frac35;\n(c) &frac25;",
        answer: "a"
   },
   {
        prompt: "Is the decimal of &frac45;; terminating, recurring or irrational?\n(a) Terminating\n\ (b) Recurring\n(c) Irrational",
        answer: "a"
   },
   {
    prompt: "Is the decimal of &frac23;; terminating, recurring or irrational?\n(a) Terminating\n\ (b) Recurring\n(c) Irrational",
    answer: "a"
},
{
    prompt: "What is 28% as a decimal?\n(a) 0.28\n\ (b) 0.14\n(c) 0.7",
    answer: "a"
},
{
    prompt: "What is &frac35; as a decimal?\n(a) 0.3\n\ (b) 0.6\n(c) 0.7",
    answer: "b"
},
{
    prompt: "In the number 0.73, what is the value of the 3?\n(a) 3 hundreds\n\ (b) 3 hundreths\n(c) 3 tenths",
    answer: "a"
},
{
    prompt: "How many decimal places will be in the answer 3.65 x 6.1?\n(a) 2\n\ (b) 3\n(c) 4",
    answer: "a"
},
{
    prompt: "What is 2.6 × 3.4?\n(a) 8.84\n\ (b) 884\n(c) 6.24",
    answer: "a"
},
{
    prompt: "What multiplier would be used to increase a number by 15%?\n(a) 0.15\n\ (b) 1.5\n(c) 1.15",
    answer: "c"
},
{
    prompt: "What is 8 as a percentage of 20?\n(a) 40%\n\ (b) 60%\n(c) 80%",
    answer: "a"
},
{
    prompt: "What is 6.4 ÷ 0.2?\n(a) 0.32\n\ (b) 3.2\n(c) 32",
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