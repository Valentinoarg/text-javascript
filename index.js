// Escuchar el click en el botón
const boton = document.getElementById("boton")
boton.addEventListener("click", preguntarNombre )

// Guardamos referencias a los heading
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

// Preguntar y guardar el nombre al usuario
function preguntarNombre() {
    const nombre = prompt("Introduce tu nombre")
    mostrarNombre(nombre)
}

// Insertar el nombre donde ahora están los ...
function mostrarNombre(nombre) {
    h2.textContent = "Hola 👋!!"
    h1.textContent = nombre
}

// Escuchar el click en el botón Edad
const botonEdad = document.getElementById("botonEdad")
botonEdad.addEventListener("click", preguntarEdad )

// Guardamos referencias a los heading Edad
const h2a = document.getElementById("h2a")
const h2b = document.getElementById("h2b")

// Preguntar y guardar la edad del usuario
function preguntarEdad() {
    const edad = prompt("Introduce tu edad")
    mostrarEdad(edad)
}

// Insertar la edad donde ahora están los ...
function mostrarEdad(edad) {
    h2a.textContent = "Tu edad es de:"
    h2b.textContent = edad
}