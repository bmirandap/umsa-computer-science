// EJEMPLOS DE SELECCION
// query selector selecciona una etiqueta(selector)
//por etiqueta
console.log(document.querySelector('p'));
// por id
console.log(document.querySelector('#texto1'));
console.log(document.getElementById('texto1'));
// por clase
console.log(document.querySelector('.texto1'));
console.log(document.getElementsByClassName('texto1'));
// todas las concidencias
console.log(document.querySelectorAll('#texto1'));
// cambia el contenido
const cambio = document.getElementById("texto1");
cambio.textContent = "ejemplo con Textcontent";
// para crear un elemento parrafo
var p_nuevo = document.createElement('p');
p_nuevo.textContent = "Este es un parrafo NUEVO";
document.getElementById("parrafo-nuevo").appendChild(p_nuevo);

// para crear una imagen
const contenedor = document.getElementById("imagen-nueva");
const image = document.createElement("img");
image.src = "https://www.creativefabrica.com/wp-content/uploads/2021/09/11/Camera-Logo-Design-Inspirations-Graphics-17143566-1-1-580x387.jpg";
image.alt = "Imagen";
contenedor.appendChild(image);
document.getElementById("imagen-nueva").appendChild(image);

// para crear una tabla
const tabla = document.createElement("table");
const tablaBody = document.createElement("tbody");
// Crear las filas y las celdas
for(let i = 0; i < 2; i++){
    const fila = document.createElement("tr");
    for(let j = 0; j < 2; j++){
        const celda = document.createElement("td");
        //alt + 96 `
        celda.textContent = `Fila ${i + 1} Columna ${j+1}-`;
        //celda.textContent = `${i+j}-`;
        fila.appendChild(celda); //Añadir cekda a la fila
    }
    tablaBody.appendChild(fila); //Añadir fila al cuerpo
}
// Añadir el cuerpo de la tabla a la tabla
tabla.appendChild(tablaBody);
// Añadir la tabla al contenedor en el HTML
document.getElementById("tabla-nueva").appendChild(tabla);