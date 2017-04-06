window.onload = function() {
'use strict';
	var userName = prompt('My name is Joshua, what is your name?');
	console.log('The user\'s name is ' + userName);
	alert('Nice to meet you, ' + userName + '. \nWelcome to my About Me page!  \nLets play a guessing game so you can get to know me better.');

	var dogs;
	var fruit;
	var paint;
	var chickens;
	var records;
	dogs = prompt('Do I like dogs?');
	if (dogs.trim().toLowerCase() == 'yes') {
		alert('You\'re right, I like dogs.  I don\'t have one right now, but hopefully I will soon');
	} else {
		alert('What!? Who doesnt love dogs?');
	}
	console.log('The answer given for the dogs question was', dogs);
	fruit = prompt('Is my favorite fruit apples?');
	if (fruit.trim().toLowerCase() == 'yes') {
		alert('Actually, i\'m not really a huge fan of apples');
	} else {
		alert('You\'re right, im more of a citrus lover');
	}
	console.log('The answer given for the fruit question was', fruit);
	paint = prompt('Do I like to paint?');
	if (paint.trim().toLowerCase() == 'yes') {
		alert('Nah, I spend most of my time coding or playing music');
	} else {
		alert('Youre right!');
	}
	console.log('The answer given for the paint question was', paint);
	chickens = prompt('Do I have chickens living in my yard?');
	if (chickens.trim().toLowerCase() == 'yes') {
		alert('No, but I wish I did! Chickens are rad.')
	} else {
		alert('Youre right, but I wish I did! Chickens are rad!')
	}
	console.log('The answer given for the chickens questions was', chickens);
	records = prompt('Am I a record collector?');
	if (records.trim().toLowerCase() == 'yes') {
		alert('That is correct.  Its actually how I have been making my living for the better part of this last 10 years')
	} else {
		alert('Incorrect!  Collecting and selling vinyl has been my line of work for a long time!')
	}
	console.log('The answer given for the records question was', records);

	alert('Now, try to guess the day of the month of my birthday!')
	var actualBirthday = 3;
	var completedDayGame = false
	var userGuessDay;
	for (userTrying = 0; userTrying < 4 && completedDayGame == false; userTrying++) {
		userGuessDay = prompt('Take a Guess!');
		console.log('The number that the user guessed was', userGuessDay);
		if (userGuessDay == 3) {
			completedDayGame = true;
			alert('That\'s right! My birthday is May 3rd.');
		} else if (userGuessDay < 3) {
			alert('You\'re close, but you have to guess a slightly higher number.');
		} else {
			alert('Nope! Guess again (Hint: Try a lower number)')
		}
	}

	alert('I have lived in a lot of different parts of Seattle.  Can you guess the neighborhoods I have lived in?')
	var livedHoods = ['ballard', 'downtown', 'belltown', 'west seattle'];
	var count = 0
	for (userTrying = 0; userTrying < 6; userTrying++) {
		userGuessHood = prompt('Take a guess!');
		console.log('The neighborhood guessed by the user was', userGuessHood);
		if (livedHoods.includes(userGuessHood)) {
			alert('You got one right!')
			count = count + 1
		}
	}
	alert('You got ' + count + ' out of 4 correct!\nHere are all four:\n\tBallard\n\tBelltown\n\tWest Seattle\n\tDowntown')
	console.log('The total correct answers for the neighborhood game was ' + count);
}
