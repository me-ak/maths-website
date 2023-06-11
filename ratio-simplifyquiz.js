var questions = [
    {
          prompt: "How can you simplify the ratio 2 : 3.6 so that it does not involve decimals?\n(a) 36:2\n\ (b) 5:9\n(c) 20:36",
          answer: "b"
    },
    {
         prompt: "How can you simplify the ratio &frac23;:&frac34;?\n(a) 8:9\n\ (b) 2:3\n(c) 3:4",
         answer: "a"
    },
    {
        prompt: "Purple paint is made by mixing red and blue paint in the ratio 2 : 3. If 15 litres of blue paint is used, how much red paint will be needed?\n(a) 10 litres\n\ (b) 6 litres\n(c) 5 litres",
        answer: "a"
  },
  {
       prompt: "A class of boys and girls is divided in the ratio 4 : 5. Could there be 31 pupils in the class?\n(a) Yes\n\ (b) No\n(c) Impossible to tell",
       answer: "b"
  },
  {
    prompt: "Two sisters share pocket money in the ratio of their ages. The first girl is 5 and the second girl is 7. The girls are given £36 between them. How much money does the younger girl receive?\n(a) £5\n\ (b) £12\n(c) £15",
    answer: "c"
},
{
    prompt: "Three men receive an overtime bonus of £100 to share between them in the ratio 12 : 18 : 30. How much does each man get?\n(a) £12, £18 and £30\n\ (b) £20, £30 and £50\n(c) £15, £25 and £60",
    answer: "b"
},
{
 prompt: "A map has a scale of 1 cm = 5 km. The distance between two towns is 95 km. What distance would this be on the map?\n(a) 17cm\n\ (b) 19cm\n(c) 21cm",
 answer: "b"
},
{
    prompt: "A floor plan of a house is drawn using the scale 2 cm = 1.5 m. In the floor plan the length of the long exterior wall is shown as 15 cm. How long is the actual long exterior wall of the house?\n(a) 22.5\n\ (b) 11.25\n(c) 12",
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