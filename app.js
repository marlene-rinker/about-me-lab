'use strict';

// Send the user a personalized welcome message
// Ask the user their name using a prompt()
var userName = prompt('Hi. What\'s your name?');

// Display the name back to the user in a custom greeting
// console.log('Welcome to my website, ' + userName + '. It\'s nice to meet you. Let\'s play a quick game.');
alert('Welcome to my website, ' + userName + '. It\'s nice to meet you. Let\'s play a quick game.');

// Ask a user five yes or no questions
// The answer must be y/n or yes/no
// Normalize the answer for case sensitivity
// Let the user know they answered the question correctly

// Ask the user if they live in Seattle
var livesInSeattle = prompt('Do you live in Seattle?');
console.log('Lives in Seattle:' +livesInSeattle);

if (livesInSeattle.toLowerCase() === 'y' || livesInSeattle.toLowerCase() === 'yes'){
  // console.log('Cool! I live in Seattle, too.');
  alert('Cool! I live in Seattle, too.');
} else {
  // console.log('Seattle is a fun place. You should visit sometime.');
  alert('Seattle is a fun place. You should visit sometime.');
}
// Ask the user if they are a vegetarian
var vegetarian = prompt('Are you a vegetarian?');
console.log('Vegetarian: ' + vegetarian);

if (vegetarian.toLowerCase() === 'y' || vegetarian.toLowerCase() === 'yes'){
  // console.log('Great choice. I\'m a vegetarian, too!');
  console.log('Great choice. I\'m a vegetarian, too!');
}else {
  // console.log('If you want to try it, a good way to start is with Meatless Mondays!');
  alert('If you want to try it, a good way to start is with Meatless Mondays!');

}
// Ask the user if they have a dog
var hasDog = prompt('Do you have a dog?');
console.log('Has a dog: ' + hasDog);

if (hasDog.toLowerCase() === 'y' || hasDog.toLowerCase() === 'yes'){
  // console.log('How fun! I love dogs.');
  alert('How fun! I love dogs.');
}else {
  // console.log('That\'s too bad. Dogs are great!');
  alert('That\'s too bad. Dogs are great!');
}
// Ask the user if they like hiking
var likesHiking = prompt('Do you like hiking?');
console.log('Likes hiking: ' + likesHiking);

if (likesHiking.toUpperCase() === 'Y' || likesHiking.toUpperCase() === 'YES') {
  // console.log('Me, too! There are so many pretty places to get out and explore.');
  alert('Me, too! There are so many pretty places to get out and explore.');
}else {
  // console.log('That\'s ok. There are other fun ways to experience the outdoors.');
  alert('That\'s ok. There are other fun ways to experience the outdoors.');
}
// Ask the user if they like reading
var likesReading = prompt('Do you like reading?');
console.log('Likes reading: ' +likesReading);

if (likesReading.toUpperCase() === 'Y' || likesReading.toUpperCase() === 'YES'){
  // console.log('I like reading too. I\'d rather read than watch TV.');
  alert('I like reading too. I\'d rather read than watch TV.');
}else {
  // console.log('Oh well. We don\'t have to like all of the same things.');
  alert('Oh well. We don\'t have to like all of the same things.');
}


// Display the user's name in a final message
// console.log('Hope you\'re having a great day, ' + userName + '. Thanks for stopping by!');
alert('Hope you\'re having a great day, ' + userName + '. Thanks for stopping by!');
