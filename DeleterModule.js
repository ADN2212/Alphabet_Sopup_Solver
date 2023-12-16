//Aqui tambien, el uso de la IIFE evita que, por ejemplo, un user avanzado pueda ejecutar la funcion
//deleteMatriz desde la consola, igual se puede XD. 
(function deleterModule(){
	const deleteButton = document.getElementById("deletter");
	let divContainer = document.getElementById("letters-container")
	let input = document.getElementById("fileInput")
	let wordsList = document.getElementById("word-list")
	let instrucDiv = document.getElementById("instrucs-div")

	divContainer.value = 1//sirve para detectar cuando cambio el contenido del div.
	
	deleteButton.onclick = function deleteMatrix(){
		if (divContainer.children.length !== 0){
			input.value = null
		}
		divContainer.value += 1
		divContainer.innerHTML = ''
		wordsList.innerHTML = ''
		//instrucDiv.innerHTML= ''
		//instrucDiv.classList.add("instrucs-div-hide")
		//instrucDiv.classList.remove("instrucs-div")
		console.log('Sopa de Letras Eliminada');
	}

})()