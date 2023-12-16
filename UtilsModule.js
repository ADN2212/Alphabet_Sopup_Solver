const utilsModule = (function(){
	
	let wordsList = document.getElementById("word-list")

	const utils = {	
		
		isLetter: function (ch){
			let currentLetterAsciiCode = ch.charCodeAt(0) 
			return (
				currentLetterAsciiCode >= 65 
				&& currentLetterAsciiCode <= 90) 
				|| (currentLetterAsciiCode >= 97 && currentLetterAsciiCode <= 122)
				|| ch === "ñ" || ch === "Ñ"
		},

		markAsFound: function(indexArray){
			//Esta funcion itera sobre cada uno de los pares de indices y optiene los divs para luego
			//darles el estilo que corresponde a una letra de una palabra encontada.  
			let currentDiv;
			for (const [i, j] of indexArray){
				currentDiv = document.getElementById(`${i},${j}`)
				currentDiv.classList.add("foundWordLetter")
			} 
		},

		addWordToList: function(word){
			//agrega una palabra a las lista si esta no esta en ella.

			for (li of wordsList.children){
				if (word === li.textContent){
					alert(`${word} ya está en la lista de palabras encontradas.`)
					return
				}
			}
			wordsList.innerHTML += `<li>${word}</li>`
		},
	}

	return utils;

})()
