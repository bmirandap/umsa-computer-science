// Seleccionamos el boton y el parrafo
const botonCambiar = document.getElementById("boton-cambiar")
const mensaje = document.getElementById("mensaje");

// Agregamos un evento 'click' al boton
botonCambiar.addEventListener('click', function(){
    mensaje.textContent = 'El texto ha sido cambiado al hacer click';
});

// Seleccionamos el div
const caja = document.getElementById('caja');

// Cambia el color de fondo al pasar el mouse
caja.addEventListener('mouseenter', function(){
    caja.style.backgroundColor = 'lightcoral';
});

// Restaura el color original al salir el mouse
caja.addEventListener('mouseleave', function(){
    caja.style.backgroundColor = 'lightblue';
});

// Seleccionamos la imagen
const image = document.getElementById('imagen');

// Coloca un borde a la imagen al pasar el mouse
imagen.addEventListener('mouseover', function(){
    imagen.style.border = '3px solid red';
});

// Quita el borde a la imagen al retirar el mouse
imagen.addEventListener('mouseout', function(){
    imagen.style.border = 'none';
});