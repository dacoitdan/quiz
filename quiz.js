var prompt = require('prompt-sync')();

var i = 0;

var questions = [
	{
		text: 'What does CSS stand for?',
		answers: [
			'Clinton Sex Scandal',
			'Compiled Style Specification',
			'Cascading Style Sheets',
			'Chicken Soup Sundays'
		],
		correct: 2
	}, 
	{
		text: 'What do you call the structure that encloses a particular element in HTML?',
		answers: [
			'Signifier',
			'Tag',
			'URL',
			'Selector'
		],
		correct: 1
	},
	{
		text: 'Which has a higher CSS specificity: a class selector, or an ID selector?',
		answers: [
			'Class',
			'ID'
		],
		correct: 1
	},
	{
		text: 'In JS, what character defines an assignment statement?',
		answers: [
			'=',
			',',
			':',
			'+'
		],
		correct: 0
	},
	{
		text: 'What specific property in CSS would help you make sure the padding you add to an element is accounted for in its size?',
		answers: [
			'padding',
			'display',
			'box-sizing',
			'height'
		],
		correct: 2
	},

	////////////////////

	{
		text: 'What type of statement is used in JS to specify when a loop should execute?',
		answers: [
			'assignment',
			'conditional',
			'declaration',
			'control'
		],
		correct: 1
	},
	{
		text: 'What tag do you use to import an external .css file? in HTML?',
		answers: [
			'style',
			'header',
			'head',
			'link'
		],
		correct: 3
	},
	{
		text: 'If you wanted to add a non-standard font to your styling, what tag would you use?',
		answers: [
			'font',
			'@media',
			'@font-face',
			'font-family'
		],
		correct: 2
	},
	{
		text: 'If you wanted a floated element to not allow other elements to float next to it, what property would you use?',
		answers: [
			'clear',
			'float',
			'display',
			'height'
		],
		correct: 0
	},
	{
		text: 'What character do you use to target a pseudoelement?',
		answers: [
			'>',
			':',
			'+',
			'*'
		],
		correct: 1
	},

	/////////////////////

	{
		text: 'There are two operators to check equality in Javascript. Which is less stringent?',
		answers: [
			'===',
			':',
			'.equals',
			'=='
		],
		correct: 3
	},
	{
		text: 'In java, which unit of measuring font size is relative to the font-size of the root element?',
		answers: [
			'em',
			'rem',
			'px',
			'%'
		],
		correct: 1
	},
	{
		text: 'How many arguments can margin and padding take?',
		answers: [
			'1',
			'4',
			'2',
			'3',
			'All of the Above'
		],
		correct: 4
	},
	{
		text: 'What types of values are held in objects in JS?',
		answers: [
			'variables',
			'values',
			'properties',
			'expressions'
		],
		correct: 2
	},
	{
		text: 'What do you use, in CSS, to achieve different styling on different screens (media)?',
		answers: [
			'media quickchange',
			'media query',
			'it\'s media',
			'medio litro'
		],
		correct: 1
	}
]

var score = 0;

for(var q = 0; q < questions.length; q++){
	var question = questions[q];
	console.log(question.text);
	for(var i = 0; i < question.answers.length; i++){
		console.log(question.answers[i]);
	}
	var answer = prompt('');
	var j;

	if(answer.toLowerCase() === question.answers[question.correct].toLowerCase()){
		console.log('Correct!');
		score++;
	} else {
		console.log('Wrong. The correct answer is ' + question.answers[question.correct]);
	}
}

console.log('Your score is: ' + score);