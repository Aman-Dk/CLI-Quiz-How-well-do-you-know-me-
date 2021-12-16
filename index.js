
var readlineSync = require('readline-sync');
console.log("How well do you know me ?\n")

var name = readlineSync.question("what's your name\n");

console.log("hello " + name); 

var doyouknow = readlineSync.question("Do you know Aman:\t")

console.log("-------------------------------------")

var score = 0;

var questions=[
  {
  question:'where does he live ?\n',
  answer:'ambikapur'
  } ,
  {
    question:'what does he like, dsa or development?\n',
    answer:'development'
  },
  {
    question:'what Development skills does he have, he is a - \n',
    answer:'full stack web developer'
  },
  {
    question:'what movies does he watch the most, bollywood or hollywood \n',
    answer:'hollywood'
  },
  {
    question:'do you know his favourite sports game, what is it \n',
    answer:'football'
  }
]

if(doyouknow==='yes'||'YES'){
  for(i=0;i<questions.length;i++){
    var answer = readlineSync.question(questions[i].question )
    console.log("-------------------------------------")
    if(answer===questions[i].answer){
      score=score+2;
    }

  }
  console.log('Total Score: '+ score+'/10')
}
else{
  console.log("Sorry you failed, you can attempt the quiz again ")
}



