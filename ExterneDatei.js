
//===================================================Rezepte Array==========================================================
let RecipesArray = [
	{
		"headline": "Test1",
		"src": "Test1",
		"description": "Test1",
		"ingredients": "Test1",
		"making": "Test1"
	},
	{
		"headline": "Test2",
		"src": "Test2",
		"description": "Test2",
		"ingredients": "Test2",
		"making": "Test2"
	},
]

function RandomDish() {
	window.name = "" + getRndInteger(0, RecipesArray.length - 1);
}


function saveRecipeIndex(string) {
	window.name = string;
}

function loadRecipe() {
	let index = Number(window.name);
	
	document.getElementById('headline').innerHTML = RecipesArray[index].headline;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

