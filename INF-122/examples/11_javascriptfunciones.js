//Creando y eliminado imagenes
function crearImagen(){
    const contenedor = document.getElementById("image-container");
    const img = document.createElement("img");
    img.src = "https://www.creativefabrica.com/wp-content/uploads/2021/09/11/Camera-Logo-Design-Inspirations-Graphics-17143566-1-1-580x387.jpg";
    img.alt = "Imagen de ejemplo";
    img.id = "miImagen";// Le asignamos un id para poder eliminar
    img.height = "300";
    img.width = "300";
    contenedor.appendChild(img);
}

function eliminarImagen(){
    const img = document.getElementById("miImagen");
    if( img ){
        img.remove();// Elimina la imagen
    }
}

// Creando y eliminando parrafo
function crearParrafo(){
    const contenedor = document.getElementById("parrafo-container");
    const parrafo = document.createElement("p");
    parrafo.id = "miParrafo";
    parrafo.textContent = "Esta es una oración de ejemplo";
    contenedor.appendChild(parrafo);
}

function eliminarParrafo(){
    const parrafo = document.getElementById("miParrafo");
    if( parrafo ){
        parrafo.remove();
    }
}