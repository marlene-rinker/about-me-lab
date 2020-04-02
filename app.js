'use strict';

// Send the user a personalized welcome message
// Ask the user their name using a prompt()
var userName = prompt('Hi. What\'s your name?');

// Display the name back to the user in a custom greeting
// console.log('Welcome to my website, ' + userName + '. It\'s nice to meet you. Let\'s play a quick game.');
alert('Welcome to my website, ' + userName + '. It\'s nice to meet you. Let\'s get to know each other.');


// Ask a user five yes or no questions
// The answer must be y/n or yes/no
// Normalize the answer for case sensitivity
// Let the user know they answered the question correctly

// Set up a message to display if the answer isn't yes or no
var wthMessage = 'Sorry, ' + userName + '. I don\'t know what that means. Let\'s move on.';

// Set up counter variables for right and wrong answers
var rightAnswer = 0;

// creat functions
function livesInSeattleQuestion(){
  // Ask the user if they live in Seattle
  var livesInSeattle = prompt('Do you live in Seattle?');
  console.log('Lives in Seattle:' +livesInSeattle);

  if (livesInSeattle.toLowerCase() === 'y' || livesInSeattle.toLowerCase() === 'yes'){
    // console.log('Cool! I live in Seattle, too.');
    alert('Cool! I live in Seattle, too.');
    rightAnswer = rightAnswer + 1;
  } else if (livesInSeattle.toLowerCase() === 'n' || livesInSeattle.toLowerCase() === 'no'){
    // console.log('Seattle is a fun place. You should visit sometime.');
    alert('Seattle is a fun place. You should visit sometime.');
  } else {
    // console.log(wthMessage);
    alert(wthMessage);
  }
}

livesInSeattleQuestion();
// Ask the user if they live in Seattle
// var livesInSeattle = prompt('Do you live in Seattle?');
// console.log('Lives in Seattle:' +livesInSeattle);

// if (livesInSeattle.toLowerCase() === 'y' || livesInSeattle.toLowerCase() === 'yes'){
//   // console.log('Cool! I live in Seattle, too.');
//   alert('Cool! I live in Seattle, too.');
//   rightAnswer = rightAnswer + 1;
// } else if (livesInSeattle.toLowerCase() === 'n' || livesInSeattle.toLowerCase() === 'no'){
//   // console.log('Seattle is a fun place. You should visit sometime.');
//   alert('Seattle is a fun place. You should visit sometime.');
// } else {
//   // console.log(wthMessage);
//   alert(wthMessage);
// }

function vegetarianQuestion(){
  // Ask the user if they are a vegetarian
  var vegetarian = prompt('Are you a vegetarian?');
  console.log('Vegetarian: ' + vegetarian);

  if (vegetarian.toLowerCase() === 'y' || vegetarian.toLowerCase() === 'yes'){
    // console.log('Great choice. I\'m a vegetarian, too!');
    alert('Great choice. I\'m a vegetarian, too!');
    rightAnswer = rightAnswer + 1;
  }else if (vegetarian.toLowerCase() === 'n' || vegetarian.toLowerCase() === 'no'){
    // console.log('If you want to try it, a good way to start is with Meatless Mondays!');
    alert('If you want to try it, a good way to start is with Meatless Mondays!');
  }else {
    // console.log(wthMessage);
    alert(wthMessage);
  }
}

vegetarianQuestion();

// // Ask the user if they are a vegetarian
// var vegetarian = prompt('Are you a vegetarian?');
// console.log('Vegetarian: ' + vegetarian);

// if (vegetarian.toLowerCase() === 'y' || vegetarian.toLowerCase() === 'yes'){
//   // console.log('Great choice. I\'m a vegetarian, too!');
//   alert('Great choice. I\'m a vegetarian, too!');
//   rightAnswer = rightAnswer + 1;
// }else if (vegetarian.toLowerCase() === 'n' || vegetarian.toLowerCase() === 'no'){
//   // console.log('If you want to try it, a good way to start is with Meatless Mondays!');
//   alert('If you want to try it, a good way to start is with Meatless Mondays!');
// }else {
//   // console.log(wthMessage);
//   alert(wthMessage);
// }


function hasDogQuestion(){
  // Ask the user if they have a dog
  var hasDog = prompt('Do you have a dog?');
  console.log('Has a dog: ' + hasDog);

  if (hasDog.toLowerCase() === 'y' || hasDog.toLowerCase() === 'yes'){
    // console.log('How fun! I love dogs.');
    alert('How fun! I love dogs.');
    rightAnswer = rightAnswer + 1;
  }else if (hasDog.toLowerCase() === 'n' || hasDog.toLowerCase() === 'no'){
    // console.log('That\'s too bad. Dogs are great!');
    alert('That\'s too bad. Dogs are great!');
  }else {
    // console.log(wthMessage);
    alert(wthMessage);
  }
}

hasDogQuestion();

// // Ask the user if they have a dog
// var hasDog = prompt('Do you have a dog?');
// console.log('Has a dog: ' + hasDog);

// if (hasDog.toLowerCase() === 'y' || hasDog.toLowerCase() === 'yes'){
//   // console.log('How fun! I love dogs.');
//   alert('How fun! I love dogs.');
//   rightAnswer = rightAnswer + 1;
// }else if (hasDog.toLowerCase() === 'n' || hasDog.toLowerCase() === 'no'){
//   // console.log('That\'s too bad. Dogs are great!');
//   alert('That\'s too bad. Dogs are great!');
// }else {
//   // console.log(wthMessage);
//   alert(wthMessage);
// }


function likesHikingQuestion(){
  // Ask the user if they like hiking
  var likesHiking = prompt('Do you like hiking?');
  console.log('Likes hiking: ' + likesHiking);

  if (likesHiking.toUpperCase() === 'Y' || likesHiking.toUpperCase() === 'YES') {
    // console.log('Me, too! There are so many pretty places to get out and explore.');
    alert('Me, too! There are so many pretty places to get out and explore.');
    rightAnswer = rightAnswer + 1;
  }else if (likesHiking.toUpperCase() === 'N' || likesHiking.toUpperCase() === 'NO'){
    // console.log('That\'s ok. There are other fun ways to experience the outdoors.');
    alert('That\'s ok. There are other fun ways to experience the outdoors.');
  }else {
    // console.log(wthMessage);
    alert(wthMessage);
  }
}

likesHikingQuestion();

// // Ask the user if they like hiking
// var likesHiking = prompt('Do you like hiking?');
// console.log('Likes hiking: ' + likesHiking);

// if (likesHiking.toUpperCase() === 'Y' || likesHiking.toUpperCase() === 'YES') {
//   // console.log('Me, too! There are so many pretty places to get out and explore.');
//   alert('Me, too! There are so many pretty places to get out and explore.');
//   rightAnswer = rightAnswer + 1;
// }else if (likesHiking.toUpperCase() === 'N' || likesHiking.toUpperCase() === 'NO'){
//   // console.log('That\'s ok. There are other fun ways to experience the outdoors.');
//   alert('That\'s ok. There are other fun ways to experience the outdoors.');
// }else {
//   // console.log(wthMessage);
//   alert(wthMessage);
// }


function likesReadingQuestion(){
  // Ask the user if they like reading
  var likesReading = prompt('Do you like reading?');
  console.log('Likes reading: ' +likesReading);

  if (likesReading.toUpperCase() === 'Y' || likesReading.toUpperCase() === 'YES'){
    // console.log('I like reading too. I\'d rather read than watch TV.');
    alert('I like reading too. I\'d rather read than watch TV.');
    rightAnswer = rightAnswer + 1;
  }else if (likesReading.toUpperCase() === 'N' || likesReading.toUpperCase() === 'NO'){
    // console.log('Oh well. We don\'t have to like all of the same things.');
    alert('Oh well. We don\'t have to like all of the same things.');
  }else{
    // console.log(wthMessage);
    alert(wthMessage);
  }
}

likesReadingQuestion();


// // Ask the user if they like reading
// var likesReading = prompt('Do you like reading?');
// console.log('Likes reading: ' +likesReading);

// if (likesReading.toUpperCase() === 'Y' || likesReading.toUpperCase() === 'YES'){
//   // console.log('I like reading too. I\'d rather read than watch TV.');
//   alert('I like reading too. I\'d rather read than watch TV.');
//   rightAnswer = rightAnswer + 1;
// }else if (likesReading.toUpperCase() === 'N' || likesReading.toUpperCase() === 'NO'){
//   // console.log('Oh well. We don\'t have to like all of the same things.');
//   alert('Oh well. We don\'t have to like all of the same things.');
// }else{
//   // console.log(wthMessage);
//   alert(wthMessage);
// }

//ask the user to guess a number, give them 4 tries;
// let them know if the number is too high or too low;
// let them know if they get it right;
// let them know what the right answer is after 4 tries
// log whether or not they got the right answer


function numberGuessQuestion(){
  //generate a random number between 1 and 20 for the user to guess
  var myNumber = Math.floor(Math.random() * (20 - 1)) + 1;
  console.log('My number is ' + myNumber);

  var userNumber = prompt('I\'m thinking of a number between 1 and 20. Can you guess what it is?');

  var i = 0;
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
      i = 4;
      rightAnswer = rightAnswer + 1;
    }else if (i<3){
      userNumber = prompt('Sorry, that number is ' + highLow + '. Try again.');
    }else{
      alert('Sorry, that number is ' + highLow + '. The number I was thinking of was ' + myNumber + '.');
    }
    i++;
  }
}

numberGuessQuestion();


// //generate a random number between 1 and 20 for the user to guess
// var myNumber = Math.floor(Math.random() * (20 - 1)) + 1;
// console.log('My number is ' + myNumber);

// var userNumber = prompt('I\'m thinking of a number between 1 and 20. Can you guess what it is?');

// var i = 0;
// var highLow;
// var numMatches;
// while (i < 4){
//   userNumber = Number(userNumber);//convert the user's response to a number so it can be compared
//   console.log('userNumber is ' +userNumber);

//   if (userNumber === myNumber){
//     numMatches = true;
//   }else if (userNumber > myNumber){
//     highLow = 'too high';
//   }else if (userNumber < myNumber){
//     highLow = 'too low';
//   }

//   if(numMatches){
//     alert('Great job! You got it. The number I was thinking of was ' + myNumber + '.');
//     i = 4;
//     rightAnswer = rightAnswer + 1;
//   }else if (i<3){
//     userNumber = prompt('Sorry, that number is ' + highLow + '. Try again.');
//   }else{
//     alert('Sorry, that number is ' + highLow + '. The number I was thinking of was ' + myNumber + '.');
//   }
//   i++;
// }

// Make a guessing game
// Multiple answers stored in an array
// Six attempts to answer
//Display all the possible correct answers to the user

var myDogs = ['Charlie', 'Dusty', 'Ginger', 'Scruffy', 'Max', 'Rocky', 'Phoebe', 'Orry'];

var dogGuess = prompt('Although I don\'t have a dog right now, I have had some great ones in the past. Can you guess one of their names?');

i = 0;//making sure i is set back to 0
while (i < 5){
  var theyGuessedRight = false;
  for(var j = 0; j < myDogs.length; j++){
    if (myDogs[j].toLowerCase() === dogGuess.toLowerCase()){
    // alert('Yes! I had a wonderful dog named ' + dogGuess + '.');
      i = 5;
      j = myDogs.length + 1;
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


// tell the user how many questions they got right
if (rightAnswer > 4){
  alert('We have quite a bit in common, ' + userName + '. You answered ' + rightAnswer + ' questions the same way I would.');
}else {
  alert('Well, ' + userName + ', it looks like we don\'t have too much in common. You only answered ' + rightAnswer + ' questions the same way I would.');
}

// Display the user's name in a final message
// console.log('Hope you\'re having a great day, ' + userName + '. Thanks for stopping by!');
alert('Hope you\'re having a great day, ' + userName + '. Thanks for stopping by!');


