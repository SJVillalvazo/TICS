document.write("Una agenda");

let opcion = parseInt(prompt("Escoge una opción del \n 1-Agregar \n 2-Listar \n 3-Salir"));

let seguir = true;

let datos = [];

while(seguir) {
    let opcion = parseInt(prompt("Escoge una opción del \n 1-Agregar \n 2-Listar \n 3-Salir"));
    switch(opcion) {
        case 1:
            alert("Escogiste la opción 1");
            let nombre = prompt("Ingresa tu nombre");
            // ingresar el nombre al array
            datos.push(nombre);
            console.table(datos);
            break;
        case 2:
            alert("Escogiste la opción 2");
            break;
        case 3:
            alert("Escogiste la opción 3, salir");
            seguir = false;
            break;
        default:
            alert("No recibí una opción válida");
            break;
    }
}