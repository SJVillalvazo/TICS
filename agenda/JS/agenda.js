let seguir = true;
let datos = [];

while(seguir){
    let opcion = parseInt(prompt(
        "Bienvenido a tu agenda personal \n" +
        "1. Agregar contacto \n" +
        "2. Lista de contactos \n" +
        "3. Eliminar contacto \n" +
        "4. Salir"
    ));

    switch(opcion) {
        case 1:
            let nombre = prompt("Ingresa tu nombre");
            let edad = parseInt(prompt("Ingresa tu edad"));
            let telefono = prompt("Ingresa tu telefono");
            let id_contacto = datos.length + 1;
            let agenda = {id_contacto, nombre, edad, telefono };
            
            agenda.nombre = nombre;
            agenda.edad = edad;
            agenda.telefono = telefono;
            agenda.id_contacto = id_contacto;
            datos.push(agenda);
            console.log(datos);
            alert("Contacto agregado correctamente");
            break;
        case 2:
            let todos = "";
            for(let i = 0; i < datos.length; i++) {
                todos += "Nombre: " + datos[i].nombre + "\n";
                todos += "Edad: " + datos[i].edad + "\n";
                todos += "Telefono: " + datos[i].telefono + "\n";
                todos += "-----------------------\n";
            }

            if(datos.length === 0) {
                alert("No hay contactos registrados");
            } else {
                alert(todos);
                console.table(datos);
            }
            break;
        case 3:
            let id_eliminar = parseInt(prompt("Ingresa el ID del contacto a eliminar"));
            let index_contacto = datos.findIndex(contacto => contacto.id_contacto === id_eliminar);

            if(index_contacto !== -1) {
                datos.splice(index_contacto, 1);
                alert("Contacto eliminado exitosamente");
            } else {
                alert("ID de contacto no existente");
            }    
        case 4:
            if(confirm("¿Estas seguro de que quieres salir?")) {
                seguir = false;
            }
            break;
        default:
            alert("No recibí una opción válida");
    }
    alert("¡Gracias por usar tu agenda personal!");
}