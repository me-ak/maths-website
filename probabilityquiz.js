var questions = [
{
    prompt: "Which of the following is NOT a measure of probability?\n(a) Improper fraction\n\ (b) Decimal\n(c)  Percentage",
    answer: "a"
},
{
 prompt: "What effect does increasing the number of trials have on relative frequency?\n(a) It becomes more difficult to calculate\n\ (b) It becomes less reliable as an estimate of probability\n\ (c)  It becomes more reliable as an estimate of probability",
 answer: "b"
},
{
    prompt: "The probability of a seed developing into a plant is 0.32. If 1000 seeds are used, how many would be expected to develop into a plant?\n(a) 3\n\ (b) 32\n(c) 320",
    answer: "c"
},
{
 prompt: "Probabilities can be written as fractions, decimals or percentages on a scale from 0 to 1\n(a) True\n\ (b) False",
 answer: "a"
},
{
    prompt: "Events that cannot happen at the same time are called mutually exclusive events\n(a) True\n\ (b) False",
    answer: "a"
},
{
    prompt: "Relative frequency is an estimate of probability and is calculated from repeated trials of an experiment.Relative frequency is used to estimate probability when theoretical probability cannot be used.\n(a) True\n\ (b) False",
    answer: "a"
},
{
    prompt: " To find the total number of outcomes for two or more events, multiply the number of outcomes for each event together. This is called the product rule because it involves multiplying to find a product.\n(a) True\n\ (b) False",
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