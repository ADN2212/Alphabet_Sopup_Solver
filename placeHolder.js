//Esto es solo para mostrar algo antes de que el user cargue una sopa de letras.
(function (){
		let divContainer = document.getElementById('letters-container');
		let divPlaceHolder = ''
		//let divRow = ''
		for (let i = 0; i < 11; i++){
			divPlaceHolder += "<div class = 'row'>"
			for (let j = 0; j < 11; j++){
				divPlaceHolder += `<div id = "${i},${j}" class = "box horizontal">?</div>`
			}
			divPlaceHolder += "</div>"
		}

		divContainer.innerHTML = divPlaceHolder;

		let currentBox;
		let currentBox2;
		const ph = "PLACEHOLDER";

		for (let i = 0; i < 11; i++){
			currentBox = document.getElementById(`${i},${i}`)
			currentBox2 = document.getElementById(`${10-i},${i}`)
			currentBox.innerHTML = ph[i]
			currentBox2.innerHTML = ph[i]
			currentBox.classList.add("foundWordLetter")
			currentBox2.classList.add("foundWordLetter")
		}
})()
