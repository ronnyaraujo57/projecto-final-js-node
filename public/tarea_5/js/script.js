form.addEventListener('submit', (e) => {
    if(ValidarTelefono())
    {
        e.preventDefault();
    }else{
        e.preventDefault();
    }
})

function ValidarTelefono(){
    var data = {
        "Nombre":document.getElementById("nombre").value,
        "Empresa":document.getElementById("empresa").value,
        "Cargo":document.getElementById("cargo").value,
        "Telefono":document.getElementById("telefono_m").value,
        "Correo":document.getElementById("email-personal").value
    };
	var teleMovil = document.getElementById('telefono_m').value;
	var patronTele = /^\d{3}\-\d{3}\-\d{4}$/;

	if(teleMovil.match(patronTele)){
        generarQR(data);
        return true;
    }
    else
        return false;
}

function generarQR(Data){
    let img = document.querySelector("img");
    let size = "150x150";
    var datos = "";
    let servicio = "https://api.qrserver.com/v1/create-qr-code/";

    for(let key in Data){
        Array.isArray(Data[key]) ? datos += `${key}:${Data[key][0]}` : datos += `${key}:${Data[key]}`;
    }
    img.src = `${servicio}?size=${size}&data=${datos}`;
    console.log(datos);
}