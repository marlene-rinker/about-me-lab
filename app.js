'use strict';

//This is a script that asks a user questions related to me when they come to the site.

var userName = prompt('Hi. What\'s your name?');
alert('Welcome to my website, ' + userName + '. It\'s nice to meet you. Let\'s get to know each other.');

// Set up a message to display if the answer isn't yes or no
var wthMessage = 'Sorry, ' + userName + '. I don\'t know what that means. Let\'s move on.';


var rightAnswer = 0;//counter variable to record right answers
var i;

// create functions to ask the questions
function livesInSeattleQuestion(){
  // Ask the user if they live in Seattle
  var livesInSeattle = prompt('Do you live in Seattle?').toLowerCase();
  console.log('Lives in Seattle:' +livesInSeattle);

  if (livesInSeattle === 'y' || livesInSeattle === 'yes'){
    alert('Cool! I live in Seattle, too.');
    rightAnswer = rightAnswer + 1;
  } else if (livesInSeattle === 'n' || livesInSeattle === 'no'){
    alert('Seattle is a fun place. You should visit sometime.');
  } else {
    alert(wthMessage);
  }
}

function vegetarianQuestion(){
  // Ask the user if they are a vegetarian
  var vegetarian = prompt('Are you a vegetarian?').toLowerCase();
  console.log('Vegetarian: ' + vegetarian);

  if (vegetarian === 'y' || vegetarian === 'yes'){
    alert('Great choice. I\'m a vegetarian, too!');
    rightAnswer = rightAnswer + 1;
  }else if (vegetarian === 'n' || vegetarian === 'no'){
    alert('If you want to try it, a good way to start is with Meatless Mondays!');
  }else {
    alert(wthMessage);
  }
}

function hasDogQuestion(){
  // Ask the user if they have a dog
  var hasDog = prompt('Do you have a dog?').toLowerCase();
  console.log('Has a dog: ' + hasDog);

  if (hasDog === 'y' || hasDog === 'yes'){
    alert('How fun! I love dogs.');
    rightAnswer = rightAnswer + 1;
  }else if (hasDog === 'n' || hasDog === 'no'){
    alert('That\'s too bad. Dogs are great!');
  }else {
    alert(wthMessage);
  }
}

function likesHikingQuestion(){
  // Ask the user if they like hiking
  var likesHiking = prompt('Do you like hiking?').toUpperCase();
  console.log('Likes hiking: ' + likesHiking);

  if (likesHiking === 'Y' || likesHiking === 'YES') {
    alert('Me, too! There are so many pretty places to get out and explore.');
    rightAnswer = rightAnswer + 1;
  }else if (likesHiking === 'N' || likesHiking === 'NO'){
    alert('That\'s ok. There are other fun ways to experience the outdoors.');
  }else {
    alert(wthMessage);
  }
}

function likesReadingQuestion(){
  // Ask the user if they like reading
  var likesReading = prompt('Do you like reading?').toUpperCase();
  console.log('Likes reading: ' +likesReading);

  if (likesReading === 'Y' || likesReading === 'YES'){
    alert('I like reading too. I\'d rather read than watch TV.');
    rightAnswer = rightAnswer + 1;
  }else if (likesReading === 'N' || likesReading === 'NO'){
    alert('Oh well. We don\'t have to like all of the same things.');
  }else{
    alert(wthMessage);
  }
}

function numberGuessQuestion(){
  //generate a random number between 1 and 20 for the user to guess
  var myNumber = Math.floor(Math.random() * (20 - 1)) + 1;
  console.log('My number is ' + myNumber);

  var userNumber = prompt('I\'m thinking of a number between 1 and 20. Can you guess what it is?');

  i = 0;
  var highLow;
  var numMatches;
  while (i < 4){
    userNumber = Number(userNumber);//convert the user's response to a number so it can be compared
    console.log('userNumber is ' +userNumber);

    if (userNumber === myNumber){
      numMatches = true;
    }else if (userNumber > myNumber){
      highLow = 'too high';
    }else if (userNumber < myNumber){
      highLow = 'too low';
    }

    if(numMatches){
      alert('Great job! You got it. The number I was thinking of was ' + myNumber + '.');
      // i = 4;
      rightAnswer = rightAnswer + 1;
      break;
    }else if (i<3){
      userNumber = prompt('Sorry, that number is ' + highLow + '. Try again.');
    }else{
      alert('Sorry, that number is ' + highLow + '. The number I was thinking of was ' + myNumber + '.');
    }
    i++;
  }
}

// Ask a guessing game question with multiple possible answers

function myDogsQuestion(){
  var myDogs = ['Charlie', 'Dusty', 'Ginger', 'Scruffy', 'Max', 'Rocky', 'Phoebe', 'Orry'];

  var dogGuess = prompt('Although I don\'t have a dog right now, I have had some great ones in the past. Can you guess one of their names?');

  i = 0;
  while (i < 5){
    var theyGuessedRight = false;
    for(var j = 0; j < myDogs.length; j++){
      if (myDogs[j].toLowerCase() === dogGuess.toLowerCase()){
        i = 5;//stop the while loop
        j = myDogs.length + 1;//stop the for loop after the whole loop finishes; using break exited after this if statement and didn't show the messages
        theyGuessedRight = true;
      }
    }
    if (theyGuessedRight){
      alert('Yes! I had a wonderful dog named ' + dogGuess + '.');
      rightAnswer = rightAnswer + 1;
    }else if (i < 4){
      dogGuess =prompt('No, I never had a dog named ' + dogGuess +'. Guess again.');
    }else {
      alert('No, I never had a dog named ' + dogGuess +'.');
    }
    i++;
  }
  alert('Here\'s a list of all my wonderful dogs: '+ myDogs);

  console.log('right answers: ' + rightAnswer);

}

function askTheQuestions(){
  livesInSeattleQuestion();
  vegetarianQuestion();
  hasDogQuestion();
  likesHikingQuestion();
  likesReadingQuestion();
  numberGuessQuestion();
  myDogsQuestion();
}

// ask the questions
askTheQuestions();

// tell the user how many questions they got right
if (rightAnswer > 4){
  alert('We have quite a bit in common, ' + userName + '. You answered ' + rightAnswer + ' questions the same way I would.');
}else {
  alert('Well, ' + userName + ', it looks like we don\'t have too much in common. You only answered ' + rightAnswer + ' questions the same way I would.');
}

// Display the user's name in a final message
alert('Hope you\'re having a great day, ' + userName + '. Thanks for stopping by!');


