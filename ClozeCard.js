console.log("hey")
function ClozeCard(fulltext, cloze){
	this.fulltext = fulltext;
	this.cloze = cloze;
	this.partial = fulltext.replace(cloze, "...")
}
//var clozecard = new ClozeCard("George Washington was the first POTUS.", "George Washington")
// console.log(clozecard.fulltext);
// console.log(clozecard.cloze); 
// console.log(clozecard.partial);

module.exports = ClozeCard;