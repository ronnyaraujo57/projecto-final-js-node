const tabBody = document.querySelectorAll(".container .tabBody") 
const form = document.getElementById("formulario")
const indicador = document.querySelectorAll(".indicador")

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

