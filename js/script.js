
document.getElementById("registrar").addEventListener('click', mostrarDatos);

function mostrarDatos() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;

    alert("Tu nombre: " + nombre + "\ntu correo: " + correo + "\nteléfono: " + telefono + "\nse ha registrado con éxito");

    return false;

}



