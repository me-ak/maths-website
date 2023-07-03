var questions = [
    {
          prompt: "What is one disadvantage of using the mean? \n(a) Skewed by extreme values\n\ (b) Difficult to calculate\n(c) Sometimes produces an incorrect value",
          answer: "a"
    },
    {
         prompt: "What is one advantage of using the mode?\n(a) Can be used if the data is not numerical, for example, gives an average of eye colours in a class\n\ (b) Takes account of anomalous data\n(c)  Easy to work out",
         answer: "a"
    },
    {
        prompt: "7 numbers are listed as: 5, 3, 2, 10, 19, 7 and 3. Find the interquartile range.\n(a) 7\n\ (b) 8\n(c) 9",
        answer: "a"
    },
    {
       prompt: "7 numbers are listed as: 5, 3, 2, 10, 19, 7 and 3. What is the range?\n(a) 17\n\ (b) 2\n(c) -2",
       answer: "a"
    },
    {
    prompt: "7 numbers are listed as: 5, 3, 2, 10, 19, 7 and 3. What is the median?\n(a) 5\n\ (b) 5.5\n(c) 10",
    answer: "a"
},
{
    prompt: "There are three types of average: the mean, the median and the mode.\n(a) True\n\ (b) False\n(c) It depends",
    answer: "a"
},
{
 prompt: "Measures of spread such as the range and the interquartile range can't be used to reach statistical conclusions.\n(a) True\n\ (b) False",
 answer: "b"
},
{
    prompt: "To find the value of the upper quartile, multiply the lower quartile by 3\n(a) True\n\ (b) False\n(c) It depends",
    answer: "a"
},
{
 prompt: "To find the lower quartile or the value that is one quarter of the way along the list, count how many numbers there are, add 1 and divide by 4.\n(a) True\n\ (b) False",
 answer: "a"
},
{
    prompt: "A range shows how spread a set of data is. The bigger the range, the more spread out the data. If the range is small, the data is closer together or more consistent.\n(a) True\n\ (b) False",
    answer: "a"
},
{
    prompt: "The median average is the middle number in a set of data, when the data has been written in ascending size order\n(a) True\n\ (b) False",
    answer: "a"
},
{
    prompt: "The interquartile range shows the range in values of the central 50% of the data. To find the interquartile range, add the value of the lower quartile ( or 25%) to the value of the upper quartile ( or 75%).\n(a) True\n\ (b) False",
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