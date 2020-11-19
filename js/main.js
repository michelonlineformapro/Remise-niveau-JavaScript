

function getVar(){
	let nom = "Michael";
	alert("Bonjour : " + nom)
}

function getOperations(){
	let a = 25
	let b = 10
	let addition = a + b
	let soustraction = a - b
	let multiplication = a * b
	let division = a / b
	alert ("Les variables : \n a = " + a + "\n b = " + b  + "\n addition = " + addition + "\n soustraction = " + soustraction + "\n multiplication = " + multiplication + "\n division = " + division)
}

function changeText(){
	document.getElementById("text-to-change").innerHTML = "<b>Voici le changement !</b>"
}

function changeStyle(){
	document.getElementById("color-to-change").style.color= "red";
}


function getAge(){
	let age = document.getElementById("age").value
	if(age.length == 0){
		alert("Merci de remplir le champs AGE")
	}else if(age >= 18){
		alert("Vous êtes majeur !")
	}else{
		alert("Vous êtes mineur !")
	}
}

function getLoop(){
	let prenom = "Michael"
	let number = prenom.length
	for(let i = 0; i < number; i++){
		alert(prenom[i])
	}
}

function whileLoop(){
	let i = 0
	let text = ""
	while (i < 10) {
		text += "\nLe nombre est : " + i;
		i++
	  }
	  alert(text)
}

function addSwitchCase(){
	let cas = 2
	switch(cas){
		case 0 :
			alert("La variable vaut 0 => cas 0 ")
			break
			case 1 :
				alert("La variable vaut 1 => cas 1 ")
				break
				case 2 :
					alert("La variable vaut 2 => cas 2 ")
					break
					default :
					alert("La variable est null => cas par defaut")

	}
}


function showObject(){
	let voiture = {
		marque: "Fiat",
		couleur: 'Verte',
		chevaux: 200,
	}

	alert("Nom de l'objet = voiture \n marque = " + voiture.marque + " couleur : " + voiture.couleur + " nombre de chevaux = " + voiture.chevaux)
}

function showArray(){
	let array = ["un", 2, "C l'élément 3", 4.5]
	let getElement = array[2]
	alert(getElement)
}


function addInArray(){
	let fruits = ['pomme', 'banane', 'kiwi']
	fruits.push('JE SUIS AJOUTER')
	alert(fruits)
}



function addClass(){

	class Person{
	
		constuctor(name, age){
			this.name = name
			this.age = age
		}
	}
	let datas = new Person("Michael", 25)
	alert("La classe = " + datas.name + " " + datas.age)
}