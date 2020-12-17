const json_menu = {
	"Inicio": [],
	"Tareas": ["Menu Dinamico","Servicio Web modulo 10"],
	"Contacto": ["sobre mi..."]
};

function dinamicMenu(p_json_menu){
	var aux;
	document.write("<nav><ul>");
	for(let label in p_json_menu){
		aux = `<li>${label}`;
		aux += split_level(p_json_menu[label]);
		document.write(aux+"</li>");
	}
	document.write("</ul></nav>")
}

function split_level(info)
{
    var nivel_1 = "<ul>";
    for(let sub in info)
    {
        if(typeof info[sub] == "object"){
            for(let label in info[sub])
            {
                nivel_1+= `<li>${label}<ul>`;
                for(let nivel_2 in (info[sub][label]))
                {
                    nivel_1+=`<li>${(info[sub][label])[nivel_2]}</li>`;
                }
            } 
            nivel_1+="</ul>";
        }else{
            nivel_1+=`<li>${info[sub]}</li>`;
        }
    }
    return nivel_1+"</ul>";
}

dinamicMenu(json_menu)