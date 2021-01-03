const tabBody = document.querySelectorAll(".container .tabBody");
const form = document.getElementById("formulario");
const indicador = document.querySelectorAll(".indicador");
const inputs = document.getElementsByTagName('input');

function tab(index, direccion) {
	if(direccion === "next" ){
		tabBody[index-1].style.display = 'none';
		indicador[index-1].className = "indicador";
	}
	else{
		tabBody[index+1].style.display = 'none';
		indicador[index+1].className = "indicador";
	}

	if(tabBody[index].style.display === 'none'){
		tabBody[index].style.display = 'block';
		indicador[index].className +=" activo";
	}else
		tabBody[index].style.display = 'none';

}

function agregar_fila(){
	let count = inputs.length;
	var tablaDinamica = document.querySelector("#tablaDinamica");
	console.log(`nueva fila (elementos ${count})`);
	for (var uno in inputs) {
		console.log("primer nivel for");
		if (uno.id === 'datosPersonales') {
			var fila = document.createElement("tr");
			for (var j = 0; j < count; i++) {
				console.log("segundo nivel for");
				var celda = document.createElement("td");
				var textCelda = document.createTextNode(uno.value);

				celda.appendChild(textCelda);
				fila.appendChild(celda);
			}
			tablaDinamica.appendChild(fila);
		}
	}
}

