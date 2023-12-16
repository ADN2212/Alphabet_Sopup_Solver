//En este modulo estan todas las funcionalidades relativas a la busqueda de palabras en
//la sopa de letras.
(function searcherModule(){
	let lettersMatriz = []
	const searchBtn = document.getElementById("search-button")
	let divContainer = document.getElementById("letters-container")
	let letterInput = document.getElementById("letter-input")
	let currentWord = ''
	let prevValue = 1

	searchBtn.addEventListener("click", (event) => {
		//console.log(divContainer.value)

		//Estoy hay que repensarlo.
		//pero sirve para detectar cuando el contenido del div de las letras ha cambiado
		//cuando esto sucede hay que resetear el contenido de la matriz de letras.
		if (prevValue === divContainer.value){
			console.log("No ha cambiado")
		} else {
			console.log("Cambió")
			console.log(prevValue, divContainer.value)
			prevValue = divContainer.value
			lettersMatriz = [];
		}

		//Esto se puede resolver mejor buscando una manera de enlazar la matriz con el div
		//que contiene sus valores.
		if (divContainer.children.length === 0){
			alert("No has cargado ninguna sopa de letras")
			lettersMatriz = []
			return
		}

		//Solo cuando la matriz de letras este vacia sera nesesario
		if (lettersMatriz.length === 0){
				getLettersMatriz()
		} 
		
		//Desde aqui empezamos a buscar la palabra dentro de la matriz: 
		currentWord = letterInput.value.toUpperCase()
		
		if (currentWord.length === 0){
			alert("Please type a valid word.")
			return
		}

		console.log(`Searching for ${currentWord}`)
		searchWord(currentWord)
		//console.log(lettersMatriz)
	})


	function searchWord(word){
		//Esta es la funcion que se encarga de ver si una palabra esta en la sopa de letras.
		let firtsletter = word[0]
		const matrizHeight = lettersMatriz.length
		const matrizWidth = lettersMatriz[0].length
		const wordLength = word.length
		let pivots = []
		let extactedWord = ""
		let indexArray = []
		let isFound = false

		for (let i = 0; i < lettersMatriz.length; i++){
			//Aqui estoy asumiento que todas las filas son del mismo largo
			//me asegurare de que asi sea.
			for (let j = 0; j < lettersMatriz[0].length; j++){
				if (lettersMatriz[i][j] === firtsletter){
					pivots.push([i, j])
				}
			}
		}

		//console.log(pivots)
		//Por cada pivot buscar la palabra en todas las direcciones posibles:
		for (p of pivots){
			//A la derecha:
			if (p[1] + wordLength <= matrizWidth){
				[extactedWord, indexArray] = extractWord(p, "rigth", wordLength) 
				if (extactedWord === word){
					//console.log(extactedWord)
					//console.log(indexArray)
					utilsModule.markAsFound(indexArray)
					isFound = true
				}
			}
			//A la izquerda:
			if (p[1] - (wordLength - 1) >= 0) {
				[extactedWord, indexArray] = extractWord(p, "left", wordLength) 
				if (extactedWord === word){
					//console.log(extactedWord)
					//console.log(indexArray)
					utilsModule.markAsFound(indexArray)
					isFound = true
				}
			}
			//hacia abajo:
			if (p[0] + wordLength <= matrizHeight){
				[extactedWord, indexArray] = extractWord(p, "down", wordLength) 
				if (extactedWord === word){
			 		//console.log(extactedWord)
			 		//console.log(indexArray)
			 		utilsModule.markAsFound(indexArray)
			 		isFound = true
			 	}
			}
			//Pa' arriba:
			if (p[0] - (wordLength - 1) >= 0){
				[extactedWord, indexArray] = extractWord(p, "up", wordLength) 
				if (extactedWord === word){
				  //console.log(extactedWord)
				  //console.log(indexArray)
				  utilsModule.markAsFound(indexArray)
				  isFound = true
				}
			}
			//Ahora las diagonales:
			//Al Noreste:			
			if ((p[1] + wordLength <= matrizWidth) && (p[0] - (wordLength - 1) >= 0)){
				[extactedWord, indexArray] = extractWord(p, "rigth-up", wordLength) 
				if (extactedWord === word){
				  //console.log(extactedWord)
				  //console.log(indexArray)
				  utilsModule.markAsFound(indexArray)
				  isFound = true
				}
			}
			//Al Sureste:
			if((p[1] + wordLength <= matrizWidth) && (p[0] + wordLength <= matrizHeight)){
				[extactedWord, indexArray] = extractWord(p, "rigth-down", wordLength) 
				if (extactedWord === word){
				  //console.log(extactedWord)
				  //console.log(indexArray)
				  utilsModule.markAsFound(indexArray)
				  isFound = true
				}
			}
			//Al Suroeste:
			if((p[1] - (wordLength - 1) >= 0) && (p[0] + wordLength <= matrizHeight)){
				[extactedWord, indexArray] = extractWord(p, "left-down", wordLength) 
				if (extactedWord === word){
				  //console.log(extactedWord)
				  //console.log(indexArray)
				  utilsModule.markAsFound(indexArray)
				  isFound = true
				}
			}
			//Al Noroeste:
			if ((p[1] - (wordLength - 1) >= 0) && (p[0] - (wordLength - 1) >= 0)){
				[extactedWord, indexArray] = extractWord(p, "left-up", wordLength) 
				if (extactedWord === word){
				  //console.log(extactedWord)
				  //console.log(indexArray)
				  utilsModule.markAsFound(indexArray)
				  isFound = true
				}
			}
		}

		if (isFound){
			utilsModule.addWordToList(word)
			letterInput.value = ""
		} else {
			//Esto lo pondre en una pantalla de alerta.
			//console.log(`La palabra ${word} no esta en esta sopa de letras :( `)
			alert(`La palabra ${word} no esta en esta sopa de letras :( `)
		}
	}

	function extractWord(pivot, dir, wordLength){
		//Extrae la palabra en la direccion espesificada.
		//console.log(pivot)
		let i = pivot[0]
		let j = pivot[1]
		let indexArray = []
		let extactedWord = ''
		let wl = wordLength
		
		//Los delta son los valores que se le suman o restan a las filas y columnas para moverse a travez de la matriz.
		let deltaJ
		let deltaI
		
		if (dir === "rigth" || dir === "rigth-up" || dir === "rigth-down"){
			deltaJ = 1
		} else if (dir === "left" || dir === "left-up" || dir === "left-down"){
			deltaJ = -1
		} else {
			deltaJ = 0
		}

		if (dir === "down" || dir === "rigth-down" || dir === "left-down"){
			deltaI = 1
		} else if (dir === "up" || dir === "left-up" || dir === "rigth-up"){
			deltaI = -1
		} else {
			deltaI = 0
		}

		do {
		 	extactedWord += lettersMatriz[i][j]
		 	indexArray.push([i, j])
		 	i += deltaI
		 	j += deltaJ
		 	wl -= 1 
		 } while (wl > 0)

 		return [extactedWord, indexArray]
	
	}

	//obtener la matriz de letras:
	function getLettersMatriz(){
		for (child of divContainer.children){
			lettersMatriz.push(child.textContent.split(""))
		}
	} 

})()
