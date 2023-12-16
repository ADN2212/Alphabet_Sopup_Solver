(function instructionsModule(){

	let instrucsButton = document.getElementById("instrucs-button")
	let instrucDiv = document.getElementById("instrucs-div")

	instrucsButton.onclick = function (){

		if (instrucDiv.innerHTML.length === 3 || instrucDiv.innerHTML.length === 0){
			
			instrucDiv.classList.remove("instrucs-div-hide")
			instrucDiv.classList.add("instrucs-div")
			
			instrucDiv.innerHTML = `
				<center>
					<h3> Instrucciones </h3>
				</center>
				<p>
					Al ingresar por primera vez en esta web app veras un matriz llena de signos de interrogación cuyas diagonales principales dictan la palabra PLACEHOLDER, esta solo es un preámbulo de como se verá tu sopa de letras cuando la cargues a la app, para hacerlo pulsa el botón que dice seleccionar archivo y selecciona un archivo de texto que contenga la sopa de letras que deseas resolver en forma de texto como el que sigue:
				</p>
					<div>
						<p class = "innerP"> <b> A N A D E </b> </p>
						<p class = "innerP"> <b>L G H I J </b> </p>
						<p class = "innerP"> <b> U A N A O </b> </p>
						<p class = "innerP"> <b> C A R L A </b> </p>
						<p class = "innerP"> <b> I V A N A </b> </p>
					</div>
				<p>
					Como puedes ver, en este cada carácter está separado por un espacio en blanco, pero si deseas puedes obviarlos, luego de haberlo cargado ve al apartado <b>Buscar Palabra</b> y escribe la palabra que quieras buscar en el input, se te avisará si está o no en tu sopa de letras.
					vuelve a pulsar el botón <b>Instrucciones</b> para que desaparezca este texto y el que dice <b>Borrar</b> eliminar para la sopa de ejemplo.    
				</p>
			`
		} else {
			instrucDiv.innerHTML = ""
			instrucDiv.classList.add("instrucs-div-hide")
			instrucDiv.classList.remove("instrucs-div")
		}
	}
})()