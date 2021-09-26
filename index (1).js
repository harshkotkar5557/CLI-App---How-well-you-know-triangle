var readlineSync=require("readline-sync");
var chalk =require('chalk');

var userName=readlineSync.question(chalk.red(" enter your name "));

var score=0;
var scores = [];

console.log(" welcome " +userName + "!\n " );

console.log(chalk.white.bgRed.bold(" Rules  "));

console.log(chalk.greenBright("\n You have only 4 questions\n \n Each right answer will give +5 points \n "));
console.log(chalk.red(" Each wrong answer will give -2 points \n ")); 

console.log(" You can only respond in [a/b/c/d] \n \n Lets start!!!");


function quiz (question,options,answer){

  console.log(chalk.yellow("\n" + question));
  console.log(options);

  var userAnswer = readlineSync.question("Your response: ");

  if (userAnswer==answer){
    console.log(chalk.greenBright("Right ans!"));
    score=score+5;
    console.log("your score is "+ score);
  }
  else {
    console.log(chalk.red("Nevermind!"));
    score=score-2;
    console.log("your score is "+ score);
  }
}

 let questions = [
  {
    "question": " Que.1 What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    "options": " a) 45°\n b) 90°\n c)  60° \n d)  30° \n",
    "answer": "b"
  },
   {
    "question": " Que 2. What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    "options": " a) obtuse \n b) acute \n c) right angled \n",
    "answer": "c"
  },
  {
    "question": " Que 3.A scalene triangle has ___ lines of symmetry",
    "options": " a)2 \n b) 15 \n c)no \n d) 6 \n",
    "answer": "c"
  },
  {
    "question": " Que 4.Which of the following triangles are always similar? \n", 
    "options": " a) Equilateral triangle \n b) scalene triangle  \n",
    "answer": "a"
  },
  ]
function playQuiz() {

  for (var i=0; i<questions.length; i++){

    obj = questions[i];

    quiz(obj.question, obj.options, obj.answer);

    console.log(".........................");
  }

  console.log(" Your final Score is :  ", score);  
  scores.push(score);
  console.log(" Thanks for playing");
}

playQuiz();

function maxScore(scores) {
var maximum = scores[0];
for (var i = 0; i<scores.length; i++) {

  if(maximum<scores[i]) {
    maximum = scores[i];
  }
}
return maximum;
}
