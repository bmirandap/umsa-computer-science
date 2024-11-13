document.getElementById('login-form').addEventListener('submit', function (e) { 
    e.preventDefault(); 
    var username = document.getElementById('username').value; 
    var password = document.getElementById('password').value; 
    if( username == '' || password == '' ){ 
        alert('Porfavor ingrese ambos datos Usuario y Password'); 
        return false;
    } 
    if( !(/^[a-zA-Z0-9]+$/.test(username)) ){ 
        alert('El nombre de usuario solo debe contener letras y números.'); 
        return false; 
    } 
    if( password.length < 8 ){ 
        alert('La contraseña debe tener al menos 8 caracteres'); 
        return false; 
    } 
    alert('Inicio de sesión exitoso'); 
    return true; 
});