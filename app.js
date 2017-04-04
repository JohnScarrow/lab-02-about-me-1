'user strict';

alert('Welcome to my About Me page!  Lets play a guessing game so you can get to know me bette.')

var dogs;
var fruit;
var paint;
var chickens;
var records;


dogs = prompt('Do I like dogs?');

if(dogs.trim().toLowerCase() == 'yes'){
  alert('Youre right, I like dogs.  I dont have one right now, but hopefully soon');
} else {
  alert('Who doesnt love dogs?');
}

console.log('The answer given for the dogs question was', dogs);

fruit = prompt('Is my favorite fruit apples?');

if(fruit.trim().toLowerCase() == 'yes'){
  alert('Actually, im not really a huge fan');
} else {
  alert('Youre right, im more of a citrus lover');
}

console.log('The answer given for the fruit question was', fruit);

paint = prompt('Do I like to paint?');

if(paint.trim().toLowerCase() == 'yes') {
  alert('Nah, I spend most of my time coding or playing music');
} else {
  alert('Youre right!');
}

console.log('The answer given for the paint question was', paint);

chickens = prompt('Do I have chickens living in my yard?');

if(chickens.trim().toLowerCase() == 'yes') {
  alert('No, but I wish I did! Chickens are rad.')
} else {
  alert('Youre right, but I wish I did! Chickens are rad!')
}
console.log('The answer given for the chickens questions was', chickens);

records = prompt('Am I a record collector?');

if(records.trim().toLowerCase() == 'yes') {
  alert('That is correct.  Its actually how I have been making my living for the better part of this last 10 years')
} else {
  alert('Incorrect!  Collecting and selling vinyl has been my line of work for a long time!')
}
console.log('The answer given for the records question was', records);
