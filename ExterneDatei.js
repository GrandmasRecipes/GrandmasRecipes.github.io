
//===================================================Rezepte Array==========================================================
let RecipesArray = [
	{
		"headline": "Test1",
		"src": "Test1",
		"description": "Test1",
		"ingredients": "Test1",
		"making": "Test1",
		"time": "5 min",
		"gang": "Hauptspeise"
	},
	{
		"headline": "Test2",
		"src": "Test2",
		"description": "Test2",
		"ingredients": "Test2",
		"making": "Test2",
		"time": "5 min",
		"gang": "Hauptspeise"
	},
	{
		"headline": "Test3",
		"src": "Test3",
		"description": "Test3",
		"ingredients": "Test3",
		"making": "Test3",
		"time": "Test3",
		"gang": "Test3"
	},
	{
		"headline": "Palatschinken",
		"src": "img/Palatschinken.jpg",
		"description": "Ein einfaches Gericht, welches süß und herzhaft genossen werden kann.",
		"ingredients": "250g Mehl;2 Stk. Eier;0,5 L Milch;1 Schuss Öl oder Butter;1 Prise Salz;gewünschte Toppings (Marmelade, Staubzucker, Wurst, Käse,...)",
		"making": "Zuerst Mehl, Milch, Eier und Salz in eine Schüssel geben und glatt rühren. Öl/Butter in Pfanne erhitzen, einen Schöpfer Teig in das heiße Fett geben und die Palatschinke auf beiden Seiten goldbraun ausbacken. Mit beliebigen Zutaten füllen.",
		"time": "30 min",
		"gang": "Hauptspeise;Nachspeise;Frühstück"
	}
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

