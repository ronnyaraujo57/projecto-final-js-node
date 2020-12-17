function Luhn(valor){
	var sumaT = 0;
	var aux;
	if (!isNaN(valor) && valor.length === 10) {
		for (var i = 0; i <= valor.length - 1; i++) {
			aux = parseInt(valor[i]);
			if (i%2 !== 0) {
				aux = (aux*2).toString();
				aux.length === 2 ? 	sumaT += parseInt(aux[0]) + parseInt(aux[1]) : sumaT += parseInt(aux);
			}else{
				sumaT = sumaT + aux;
			}
		}
		aux = 10-(sumaT%10);
		return aux===10 ? 0 : aux;
	}
	return -1;
}

function mostrarcalculo(){
	let array = document.getElementsByTagName('input');
	let valor = array[0].value;

	let aux = Luhn(valor);
	array[1].value=aux;
	if(aux !== -1){
		array[1].style.cssText='border: 2px solid green;';
	}else{
		array[1].style.cssText='border: 2px solid orange;';
	}
}
