// Lista para guardar los nombres
let listaAmigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Quita espacios innecesarios

    // Validar si está vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Agregar el nombre al arreglo
    listaAmigos.push(nombre);

    // Limpiar el campo de texto
    input.value = "";

    // Actualizar la lista en pantalla
    mostrarLista();
}

// Función para mostrar la lista en el HTML
function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpia el contenido anterior

    // Recorre la lista de amigos y los agrega al HTML
    listaAmigos.forEach(function(nombre) {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Validar que haya al menos un nombre
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Elegir un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Mostrar el resultado en el HTML
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li> El amigo secreto sorteado es: <strong>${listaAmigos[indiceAleatorio]}</strong></li>`;
}

