
//===================================================Rezepte Array==========================================================
let homeIndex1;
let homeIndex2;
let homeIndex3;

let RecipesArray = [
	{
		"headline": "Palatschinken",
		"src": "img/Palatschinken.jpg",
		"description": "Ein einfaches Gericht, welches süß und herzhaft genossen werden kann.",
		"ingredients": "250g Mehl;2 Stk. Eier;0,5 L Milch;1 Schuss Öl oder Butter;1 Prise Salz;gewünschte Toppings (Marmelade, Staubzucker, Wurst, Käse,...)",
		"making": "Zuerst Mehl, Milch, Eier und Salz in eine Schüssel geben und glatt rühren. Öl/Butter in Pfanne erhitzen, einen Schöpfer Teig in das heiße Fett geben und die Palatschinke auf beiden Seiten goldbraun ausbacken. Mit beliebigen Zutaten füllen.",
		"time": "30 min",
		"gang": "Hauptspeise;Nachspeise;Frühstück"
	},
	{
		"headline": "Spaghetti Carbonara",
		"src": "img/Spaghetti_Carbonara.jpg",
		"description": "Spaghetti mit cremiger Soße mit Speckwürfel und Parmesan aus Italien.",
		"ingredients": "400g Spaghetti;100g Speckwürfel;1 EL Butter oder Öl;1 Stk Knoblauchzehe;1 Becher Obers;2 Stk Eier;50g Parmesan(gerieben);1 Priese Salz und Pfeffer",
		"making": "Zuerst die Nudeln in gut gesalzenem Wasser (nach Packungsanleitung) kochen. Speckwürfel und klein geschnittener Knoblauch in einer Pfanne mit Butter/Öl anbraten. Wenn die Spaghetti fertig gekocht sind werden sie ebenfalls in die Pfanne gegeben. Für die Soße müssen die Eier in eine Schüssel aufgeschlagen und gut verquirlt werden und mit Salz un Pfeffer würzen. Schalgobers und Parmesan unterheben. Die Soße über die Nudeln gießen, gut verrühren und der Herdplatte in der Pfanne noch kurz stocken lassen.",
		"time": "30 min",
		"gang": "Hauptspeise"
	},
	{
		"headline": "Mohnnudeln",
		"src": "img/Mohnnudeln.jpg",
		"description": "Eine Süße Speise mit Mohn und Zucker aus einem Kartoffelteig.",
		"ingredients": "500g Kartoffeln (mehlig);100g Mehl (glatt);50g Weizengrieß;50g Butter;1 Stk Dotter;1 Prise Salz;100g Mohn;80g Staubzucker",
		"making": "Zuerst müssen die gekochten Kartoffeln geschält und durch eine Kartoffelpresse gedrückt werden. Mit Mehl, Grieß, 1 Prise Salz, Butter und Dotter die Kartoffeln zu einem Teig kneten. Den Teig auf einer, mit Mehl bedeckter, Arbeitsfläche zu Daumendicken Nudeln formen/schneiden. Die Nudeln in etwas gesalzenem, kochendem Wasser, ca. 5 Minuten kochen. Wenn sie an der Oberfläche schwimmen sind sie fertig. Während dem kochen ständig langsam und vorsichtig umrühren. Mit Mohn und Staubzucker mischen und in etwas Butter anrösten, die fertigen Nudeln abtropfen lassen und im Mohn-Zucker-Gemsich wälzen.",
		"time": "60 min",
		"gang": "Hauptspeise"
	},
	{
		"headline": "Nudelsuppe",
		"src": "img/Nudelsuppe.jpg",
		"description": "Eine klassische Nudelsuppe mit Gemüse.",
		"ingredients": "2 Stk Karotten;1 L Wasser (heiß);1 EL Öl;1 Prise Salz;1 Prise Pfeffer;1 Prise Majoran;1 Stk Petersilie;1 EL Schnittlauch (gehackt);1 Prise Muskat (gerieben);3 Stk Wacholderbeeren;50g Suppennudeln",
		"making": "Das Gemüse und die Kräuter putzen, waschen und schneiden. Die Karotten in Scheiben schneiden. Im heißen Öl kurz anrösten und mit heißem Wasser aufgießen. Die Suppe mit Suppengewürz würzen und etwas 20 Minuten zugedeckt köcheln lassen. Die Nudeln in kochendes Salzwasser geben und leicht, 5 Minuten, kochen. Danach abseihen und kurz vor dem Servieren in die Suppe geben.",
		"time": "45 min#",
		"gang": "Vorspeise;Hauptspeise"
	},
	{
		"headline": "Wiener Schnitzel",
		"src": "img/Wiener_Schnitzel.jpg",
		"description": "Ein klassisches Wiener Schnitzel aus Österreich. Kann mit Reis oder Kartoffeln genossen werden.",
		"ingredients": "160g Kalbsschnitzel;150g griffiges Mehl;2 Stk Eier;300g Semmelbrösel;1 Stk Zitrone;1 Prise Salz;2 EL Backfett/Öl/Butterschmalz",
		"making": "Das Fleisch zwischen Frischhaltefolie behutsam klopfen und beidseitig Salzen. Das Schnitzel in Mehl wenden, abklopfen, durch die Eiern ziehen und in den Bröseln wenden. Das im Fett schwimmende Schnitzel goldgelb backen. Während dem backen die Pfanne etwas rütteln, damit es gleichmäßig goldbraun wird. Fertiges Schnitzel auf Küchenrolle abtropfen lassen und mit Zitrone und anderen Beilagen (Kartoffeln, Reis, Gemüse, ...) servieren.",
		"time": "30 min",
		"gang": "Hauptspeise"
	},
	{
		"headline": "Becherkuchen",
		"src": "img/Becherkuchen.jpg",
		"description": "Ein einfacher Kuchen mit Nüssen und Kokos. Als Maß dient ein Becher.",
		"ingredients": "1/2 Becher Öl;1 Becher Mehl;1 Packung Backpulver;3/4 Becher Haselnüsse;1 Becher Kokosraspeln;1 Becher Kakao;1 Becher Zucker;1 Packung Vanillezucker;3 Stk Eier;1 Becher Sauerrahm",
		"making": "Mehl sieben und mit Backpulver, Nüssen, Kokos und Kakao vermischen. Alle Eier mit Zucker und Vanillezucker gut Mixen. Sauerram und Öl ganz kurz unermixen. Trockene Zutaten unterheben. Bei 170°C ca. 1 Stunde backen. Mit Schokolade überziehen und Kokosraspeln bestreuen.",
		"time": "25 min",
		"gang": "Nachspeise"
	},
	{
		"headline": "Chili con Carne",
		"src": "img/Chili_con_Carne.jpg",
		"description": "Eine beliebtes mexicanisches Gericht das mild oder scharf zubereitet werden kann.",
		"ingredients": "1 Stk Chilischote;800g Faschiertes;1 Stk grüner Paprika;2 Stk Knoblauchzehen;1 Dose Mais(ca. 300g);2 EL Paprikapulver;200 mL Rindsuppe;1 Dose rote Bohnen (ca. 410g);1 Stk roter Paprika;1 TL Thymian;1 Dose Tomaten (ca. 400g);1 Dose weiße Bohnen (ca. 400g);2 Stk Zwiebeln;1 Prise Salz und Pfeffer;1 Schuss Öl",
		"making": "Zwiebeln und Knoblauch schälen, klein hacken. Paprika und Chili klein würfeln. Faschiertes in mehreren Etappen in Öl anbraten. Zwiebel und Knoblauch hell anrösten, Paprika zugeben und mitrösten. Fleisch zugeben, Paprikapulver dazurühren, mit Suppe und Dosentomaten aufgießen. Mit Chili, Salz, Pfeffer und Thymian würzen und ca. 20 Minuten köcheln lassen. Zuletzt Mais und Bohnen zufügen und kurz mitkochen.",
		"time": "40 min",
		"gang": "Hauptspeise"
	},
	{
		"headline": "Marillenkuchen",
		"src": "img/Marillenkuchen.jpg",
		"description": "Ein fruchtig süßer Marillenkuchen schmeckt jedem, immer gut",
		"ingredients": "200g Butter;200g Staubzucker;1 Packung Vanillezucker;1 Prise Salz;200g Mehl;4 Stk Eier;1kg Marillen;0.5 Stk Zitronenschale;1 TL Backpulver",
		"making": "Zuerst die Marillen waschen, halbieren und entkernen. Die Eier trennen und aus dem Eiklar einen Schee schlagen. Die Butter mit Zucker, Vanillezucker, Eidotter, etwas Salz und den geriebenen Zitronenschale in einer Schüssel schaumig rühren. In einer anderen Schüssel das Mehl mit dem Backpulver gut vermengen und danach langsam in die schaumige Eidottermasse rühren. Jetzt nur noch den Eischnee unter die Masse unterheben. Den fertigen Teig in eine eingefettete und bemehlte Form streichen und die halbierten Marillen mit der Schnittfläche nach oben in den Teig drücken. Im vorgeheizten Backofen bei 180°C ca. 40 Minuten backen. ",
		"time": "65 min",
		"gang": "Nachspeise"
	},
	{
		"headline": "Vanillekipferl",
		"src": "img/Vanillekipferl.jpg",
		"description": "Ein berühmter Klassiker unter den Weihnachtskekesen.",
		"ingredients": "500g Mehl;160g Staubzucker;400g Butter;200g Mandeln (gerieben);3 Packungen Vanillezucker",
		"making": "Mehl, Staubzucker, 2 Packungen Vanillezucker, Butter und geriebene Mandeln zu einem Teig verarbeiten und diesen 1 Stunde (in Frischhaltefolie) in den Kühlschrank legen. Danach auf einer bemehlten Arbeitsfläche eine Rolle mit 3-4 cm Durchmesser formen. Aus dieser Rolle ca. 1 cm dicke Scheiben abschneiden und zu Kipferl formen. Die Vanillekipferl bei 175°C für ca. 12 - 15 Minuten hellbraun backen. Die aus dem Ofen genommenen Kipferl in einer Mischung aus Staubzucker und Vanillezucker wälzen.",
		"time": "90 min",
		"gang": "Nachspeise"
	},
	{
		"headline": "Pizza",
		"src": "img/Pizza.jpg",
		"description": "Ein beliebtes italienisches Gericht, das auf vielen verschidenen Weisen gegessen werden kann.",
		"ingredients": "250g Mehl;1/2 Würfel Germ;110 mL Wasser (lauwarm);2 EL Olivenöl;1 TL Salz;150g Tomaten (geschält);1 EL Tomatenmark;1/2 TL Oregano;1 Prise Salz und Pfeffer;150g Mozzarella;80g Käse (gerieben);weiteren Belag wie z.B.: Salami, Schinken, Mais, ...",
		"making": "Zuerst gibt man das Mehl auf eine Arbeitsfläche und formt eine Mulde auf der Spitze. In diese Mulde gibt man Salz, Olivenöl, Germ (zerbröckelt) und einen Schuss lauwarmes Wasser. Die Mulde etwas mit Mehl zuschütten und ein paar Minuten gehen lassen. Dann das restliche Wasser hinzufügen und zu einem Teig kneten. Diesen in einer zugedeckten Schüssel für ca. 1 Stunde aufgehen lassen. Derweil gibt man die geschälten Tomaten mit Zomatenmark, Oregano, Salz und Pfeffer in eine Schüssel und püriert sie. Nach der Stunde nimmt man den Teig und knetet ihn kurz durch. Den Pizzateig teilt man in beliebig großen Stücken auf und rollt ihn dünn aus. Den Pizzaboden auf ein Backblech geben, mit der Tomatensoße bestreichen und Mozzarella, Käse, und anderen Belag draufgeben. Noch mit etwas Oregano oder Pizzagewürz würzen und bei 240°C für ca. 12 Minuten in den Ofen geben. Danach können auch noch frische Toppings (wie z.B.: Rocula) daraufgegeben werden.",
		"time": "80 min",
		"gang": "Hauptspeise"
	},
	{
		"headline": "Waffeln",
		"src": "img/Waffeln.jpg",
		"description": "Eine beliebte Süßspeise, die in einem extra Waffeleisen gebacken wird.",
		"ingredients": "200g Mehl;100g Zucker;2 Eier;1 TL Backpulver;200 mL Milch;100g Butter (flüssig);eventuell geriebene Haselnüsse",
		"making": "Alle Zutate nach der Reihe in eine Schüssel geben und verrühren bis ein Teig entsteht. Im vorgeheitzten Waffeleisen die Waffeln zubereiten. Am besten schmecken sie noch warm. ;)",
		"time": "15 min",
		"gang": "Nachspeise;Frühstück"
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
	document.getElementById('image').src = RecipesArray[index].src;
	document.getElementById('description').innerHTML = RecipesArray[index].description + "<br>Zubereitungszeit: " + RecipesArray[index].time + "<br>Gang: ";
	
	let gang = RecipesArray[index].gang.split(";");
	let newElement;
	
	for (let i = 0; i < gang.length; i++) {
		newElement = document.createElement("LI");
		newElement.innerHTML = gang[i];
		document.getElementById("gang").appendChild(newElement);
	}
	
	let ingredients = RecipesArray[index].ingredients.split(";");
	
	for (let i = 0; i < ingredients.length; i++) {
		newElement = document.createElement("LI");
		newElement.innerHTML = ingredients[i];
		document.getElementById("ingredients").appendChild(newElement);
	}
	
	document.getElementById('making').innerHTML = RecipesArray[index].making;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**Home**/
function loadHomeRecipes() {
	RandomDish();
	homeIndex1 = Number(window.name);
	document.getElementById('HomeRecipeImg1').src = RecipesArray[Number(window.name)].src;
	document.getElementById('HomeRecipeHeadline1').innerHTML = RecipesArray[Number(window.name)].headline;
	document.getElementById('HomeRecipeText1').innerHTML = RecipesArray[Number(window.name)].description;
	
	do {
		RandomDish();
	}while(homeIndex1 === Number(window.name));
	homeIndex2 = Number(window.name);
	document.getElementById('HomeRecipeImg2').src = RecipesArray[Number(window.name)].src;
	document.getElementById('HomeRecipeHeadline2').innerHTML = RecipesArray[Number(window.name)].headline;
	document.getElementById('HomeRecipeText2').innerHTML = RecipesArray[Number(window.name)].description;
	
	do {
		RandomDish();
	}while(homeIndex1 === Number(window.name) || homeIndex2 === Number(window.name));
	homeIndex3 = Number(window.name);
	document.getElementById('HomeRecipeImg3').src = RecipesArray[Number(window.name)].src;
	document.getElementById('HomeRecipeHeadline3').innerHTML = RecipesArray[Number(window.name)].headline;
	document.getElementById('HomeRecipeText3').innerHTML = RecipesArray[Number(window.name)].description;
}

function loadHomeRecipe(number) {
	number = Number(number);
	if (number === 1) {
		window.name = homeIndex1;
	}
	if (number === 2) {
		window.name = homeIndex2;
	}
	if (number === 3) {
		window.name = homeIndex3;
	}
}

document.querySelector('#SearchForm').addEventListener('submit', (event) => {
	event.preventDefault();
	let suchenValue = document.querySelector("#suchen").value;
	//suchenValue.toLowerCase();
	
	if (suchenValue === "") {
		alert('Bitte geben sie einen Suchbegriff ein!');
		return;
	}
	
	let result = [];
	
	for (let i = 0; i < RecipesArray.length; i++) {
		let temp = RecipesArray[i].headline.search(suchenValue); //.toLowerCase()
		if (temp != -1) {
			result.push(i);
		}
	}
	
	if (result.length === 0) {
		alert('Leider kein passendes Rezept gefunden :(');
		return;
	}
	
	//Zurzeit nur für ein Ergebnis
	alert("Objekt Index: " + result);
	
	let searchForm = document.querySelector('#SearchForm');
	searchForm.remove();
	
	let a = document.createElement('a');
	a.innerHTML = RecipesArray[result[0]].headline;
	a.href = "recipes.html";
	a.addEventListener('click', saveRecipeIndex(result[0]));
	
	document.querySelector('#SearchBody').append(a);
	
});


