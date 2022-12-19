// FUNCION PARA APLICAR ESTILO A LA OPCION SELECCIONADA EN EL MENU Y QUITAR LA PREVIAMENTE SELECCIONADA

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // Desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

// FUNCION PARA EL MUNE RESPONSIVE
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// DECTECTO EL SCROLLING PARA APLICAR LA ANIMACION DE LAS BARRAS DE HABILIDADES
window.onscroll = function(){ 
    efectoHabilidades() 
};


// FUNCION QUE APLICA LA ANIMACION DE LA BARRA DE HABILIDADES
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
    }
}