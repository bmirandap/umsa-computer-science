const lista = document.getElementById('lista');
const agregarItem = document.getElementById('agregarItem');
const itemInput = document.getElementById('itemInput');

console.log(lista);
console.log(agregarItem);
console.log(itemInput);

//Funcion para agregar item a la lista
agregarItem.addEventListener('click', function(){
    if( itemInput.value !== '' ){
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = itemInput.value;
        //Boton para eliminar item
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add('boton');
        botonEliminar.addEventListener('click', function(){
            lista.removeChild(nuevoItem);
        });
        // Boton para editar el item
        const botonEditar = document.createElement('button');
        botonEditar.textContent = "Editar";
        botonEditar.classList.add('boton', 'editar');
        botonEditar.addEventListener('click', function(){
            const nuevoTexto = prompt('Editar item:', nuevoItem.textContent);
            if( nuevoTexto ){
                nuevoItem.textContent = nuevoTexto;
                nuevoItem.appendChild(botonEliminar);
                nuevoItem.appendChild(botonEditar);
            }
        });

        nuevoItem.appendChild(botonEliminar);
        nuevoItem.appendChild(botonEditar);
        lista.appendChild(nuevoItem);
        itemInput.value = "";


    }
});



const fechaInput = document.getElementById('fechaInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaFechas = document.getElementById('listaFechas');

agregarBtn.addEventListener('click', function() {
    const fecha = fechaInput.value;
    if (fecha) {
        const li = document.createElement('li');
        li.textContent = fecha;

        // Crear el botón de eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', function() {
            listaFechas.removeChild(li); // Eliminar el elemento de la lista
        });
        

        // Crear el botón de editar
        const editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        editarBtn.addEventListener('click', function() {
            const nuevaFecha = prompt('Ingresa la nueva fecha (YYYY-MM-DD):', fecha);
            if (nuevaFecha) {
                li.firstChild.nodeValue = nuevaFecha; // Actualizar la fecha en la lista
            }
        });



        li.appendChild(editarBtn); // Agregar el botón de editar al elemento de la lista
        li.appendChild(eliminarBtn); // Agregar el botón al elemento de la lista

        listaFechas.appendChild(li);
        fechaInput.value = ''; // Limpiar el input
    } 
});