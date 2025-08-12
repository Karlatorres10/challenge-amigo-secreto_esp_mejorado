// Lista para guardar los amigos
let listaAmigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    
    if (nombre === "") {
        alert("Por favor escribe un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = "";
    mostrarLista();
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

// Función para sortear un nombre al azar
function sortearAmigo() {
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "";

    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = ` El amigo secreto es: ${amigoSorteado}`;
    resultadoHTML.appendChild(li);
}

