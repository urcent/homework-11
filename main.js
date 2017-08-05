console.log("hi");
var fs = require("fs");

var inquire = require("inquirer");
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var question = [
{
	name: 'cardFront',
	message: 'Who was the first prisendent',
	type: "input"
},
{
	name: 'cardBack',
	message: 'What is on the back of the card',
	type: "input"
}
]
inquire.prompt(question).then(function(answers){
	console.log(answers);



	if (answers.cardFront==="george washington") {console.log("yay!");}
	
	//var ans = Json.parsc
	// console.log("inside the inquirer.prompt", answers)
	// var basicCard = new BasicCard(answers.cardFront, answers.cardBack);
	// var clozecard = new ClozeCard(answers.cardFront, answers.cardBack);
	// console.log(basicCard);
	// console.log(clozecard);
});

// hey genious link the clozecard.js for your var clozecard. -> var closecard