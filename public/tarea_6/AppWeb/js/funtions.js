function interpreta_respuesta(resp) {
	var campo = document.getElementById('cedula');
	let mjs_return = document.getElementById('mjs');
	if(resp['status']){
		campo.style.cssText='border: 2px solid green;';
		mjs_return.style.cssText = "color: green";
		mjs_return.innerHTML = resp['mjs'];
	}else{
		campo.style.cssText='border: 2px solid red;';
		mjs_return.style.cssText = "color: red";
		mjs_return.innerHTML = resp['mjs'];
	}
}

function mostrarcalculo(){
	var campo = document.getElementById('cedula');

	fetch('https://app-luhn-ipa.herokuapp.com/',{
		method: 'POST',
		headers:{
			"Content-type": "application/json"
		},
		body:JSON.stringify({
			cedula: campo.value
		})
	})
	.then(respuesta => respuesta.json())
	.then(json => {
		interpreta_respuesta(json);
	});	
}
