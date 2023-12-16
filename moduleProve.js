//Ejemplo de como usar una IIFE para encapsular variables.
const myModule = (function(){
	let innerVal = 10;
	const obj = {
		get: () => {
			return innerVal;	
		},
		increase: (val) => {
			innerVal += val
			return innerVal;
		}
	}
	return obj;
})()