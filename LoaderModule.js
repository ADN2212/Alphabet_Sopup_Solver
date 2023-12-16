//En este script estan todas las funciones relativas a la carga de los datos.
//Ojo, al poner toda esta parte dentro de una IIFE estoy evitando que estas funciones sean
//accequibles desde el gobal scope, evitando asi posibles comportamientos erraticos. 
(function loaderModule(){
	let divContainer = document.getElementById('letters-container');
	let input = document.getElementById('fileInput');
	let lettersMatriz = [];
	const deleteButton = document.getElementById('deletter');

	input.addEventListener('change', (event) => {
	//alert('Se ha cargado un archivo!!')
	const file = input.files[0];//El primer valor.

	if (file){
		//El objeto que permite leer los archivos
		let dataReader = new FileReader()
		dataReader.readAsText(file)
		dataReader.onload = (event) => {
			prosesData(event)
			if (isValidMatrix(lettersMatriz)){
				deleteButton.onclick()//Esto ejecuta la funcion que fue asignada deleterModule.js
				putDataInDiv()
				//console.log(lettersMatriz)
			} else {
				alert("Ha introducido una matriz que no es validad.")
				setTimeout(function(){
 					//Para que el user tenga tiempo a ver que subio.
 					input.value = null
					}, 500);
				}	
			};
		} else {
			console.log('There is no file :(')
		}
	})

	function putDataInDiv(){
		let divRow
		let i = 0
		let j = 0
		for (row of lettersMatriz){
			divRow = "<div class = 'row'>"
			for (ch of row){
				divRow += `<div id = "${i},${j}" class = "box horizontal">${ch.toUpperCase()}</div>`
				j += 1
			}
			divRow += '</div>\n';
			j = 0
			i += 1
			divContainer.innerHTML += divRow;
		}
	}

	function prosesData(event){

		lettersMatriz = [];
		
		//deleteButton.onclick()//Esto ejecuta la funcion que fue asignada en modifiers.js 

		let lettersRows = event.target.result.split('\n');
		let currentRow;
		for (row of lettersRows){
			currentRow = []
			for (ch of row){
				if (utilsModule.isLetter(ch)){
					//console.log(`${ch} is a letter`)
					currentRow.push(ch)
				} 
			}
			lettersMatriz.push(currentRow)
		} 
	}

	function isValidMatrix(matrix){

		//Si el user sube un archivo sin carracteres:
		if (matrix.length === 1 && matrix[0].length === 0) {
			return false
		}

		//Si alguna de las filas es de logitud distintas:
		let firtsRowLen = matrix[0].length

		for (let i = 1; i < matrix.length; i++){
			if (firtsRowLen !== matrix[i].length){
				return false
			}

		//otras:
		//	...
		}

		return true

	}

})()