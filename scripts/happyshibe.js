/*
Shibe stats
Name, Colour, Age (years - < 16), friendliness (/5), cuteness (/5), height (inches < 17), weight (pounds 17 - 23)
*/
let shibeStats = [
	{name: "Lilly", colour: "Sandy", age: 10, friendliness: 6, cuteness: 7, height: 15, weight: 18, description: "Lilly likes painting pictures and singing about flowers."},
	{name: "Tyrone", colour: "Black", age: 3, friendliness: 7, cuteness: 8, height: 8, weight: 13, description: "Tyrone likes eating milky bars and having sleepovers with his friends."},
	{name: "Penelope", colour: "Sandy", age: 12, friendliness: 6, cuteness: 7.5, height: 12, weight: 23, description: "Penelope likes swimming and reading books about horticulture."},
	{name: "Veronica", colour: "Dusky", age: 10, friendliness: 6.5, cuteness: 6, height: 10, weight: 20, description: "Likes meeting new people and buying things on Ebay."},
	{name: "Desmond", colour: "Dusky", age: 5, friendliness: 7, cuteness: 6, height: 7, weight: 14, description: "Keeps himself to himself and likes going on long walks on the beach."},
	{name: "Andrew", colour: "Black", age: 4, friendliness: 7, cuteness: 8, height: 9, weight: 12, description: "Andrew likes Ceilidh bands and impersonating Take That members."},
	{name: "Bella", colour: "Dusky", age: 9, friendliness: 8.5, cuteness: 6, height: 15, weight: 19, description: "Bella has a cheeky and playful nature, and has a general dislike of formality."},
	{name: "Bombay", colour: "White", age: 8, friendliness: 7, cuteness: 7, height: 12, weight: 18, description: "Bombay likes flying kites and likes going on holiday to exotic locations."},
	{name: "Wendy", colour: "White", age: 4, friendliness: 6, cuteness: 8, height: 8, weight: 11, description: "Likes going to the cinema and watching films with a strong leading character."},
	{name: "Parker", colour: "Sandy", age: 11, friendliness: 8, cuteness: 6.5, height: 12, weight: 21, description: "Likes visiting old churches and buying hats with feathers."},
 ];

 function formatNumberLength(num, length) {
    let r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function formatDoubleDp(double, dp){
	double = double.toString().split(".");
	let res = "0"
	if (double.length > 1){
		res = double[1].slice(0,dp);
	}
	else{
		res = formatNumberLength(0,dp);
	}
	return double[0]+"."+res;
}

/*
show shibe function
*/
function showShibe(index){

	let indexStr = formatNumberLength(index, 2);

	let thisShibe = shibeStats[index-1];

	let name = thisShibe.name;
	let colour = thisShibe.colour;
	let age = thisShibe.age;
	let friendliness = formatDoubleDp(thisShibe.friendliness, 1);
	let cuteness = formatDoubleDp(thisShibe.cuteness, 1);
	let height = thisShibe.height;
	let weight = thisShibe.weight;
	let description = thisShibe.description;

	document.getElementById("js-card").innerHTML = "<h1>Shibe #" + indexStr+ ": "+ name+"</h1><div class=\"img img--content-wide\"><img src=\"images/page/happyshibe/shibe-" + indexStr + ".jpg\" alt=\"Image of Shibe\"></div><table><tr><th  >Attribute</th><th  class=\"r\">Value</th></tr><tr><td>Name:</td><td class=\"r\">" + name + "</td></tr><td>Colour:</td><td  class=\"r\">" + colour + "</td></tr><td>Age (yrs):</td><td  class=\"r\">" + age + "</td></tr><td>Friendliness (/5):</td><td  class=\"r\">" + friendliness + "</td></tr><td>Cuteness (/5):</td><td  class=\"r\">" + cuteness + "</td></tr><td>Height (Inches):</td><td  class=\"r\">" + height + "</td></tr><td>Weight (Pounds):</td><td  class=\"r\">" + weight + "</td></table><p>"+ description +"</p><audio controls><source src=\"sound/happyshibe/shibe.ogg\" type=\"audio/ogg\"><source src=\"sound/happyshibe/shibe.mp3\" type=\"audio/mpeg\"></audio>";
}
