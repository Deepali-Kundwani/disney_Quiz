var game = require('readline-sync');
var color = require('chalk');
var name = game.question("What is your name?  ");
console.log(color.bold.yellow("Welcome to the quiz "+name));
var score = 0;

var Quiz = [
  {
    question : color.bold.green("Which character was Walt Disney’s favorite? "),
    answer : "Goofy"
  },{
    question : color.bold.green("What is another name of the Mickey Mouse?  "),
    answer : "Mortimer"
  }
]

function playQuiz(question,answer)
{
   var useranswer = game.question(question);
  if (useranswer==answer)
  {
    console.log(color.bold.red('Yes, you are right! '));
     console.log('_________');
     score++;
  }
  else
  {
    console.log(color.bold.red('Sorry, you are wrong! '));
    console.log('_________');
  }
  console.log("your score is "+score);
};


for(i=0;i<Quiz.length;i++)
{
  playQuiz(Quiz[i].question,Quiz[i].answer);
}


if(score == "2")
{
console.log(color.bold.blue("------------------------------------------------"));
}

var highscore = [
  {
    name1: "harry",
    scores: 2
  },
  {
    name1: "jack",
    scores: 1
  }
]

for (i=0; i<highscore.length; i++)
{
  highestScore(highscore[i].name1,highscore[i].scores);
}

function highestScore(n,s)
{
  if (score>s)
  {
    console.log(color.red.bold("Congratulations, You have beaten the highest score"));
    console.log(color.blue.bold("Please send a screenshot to us"));

  }
}