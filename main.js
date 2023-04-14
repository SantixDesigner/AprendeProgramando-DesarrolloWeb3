//Defino mi clase Cantante.
class Cantante{
    constructor(id, nombre, edad, paises){
        this.id = id
        this.nombre = nombre;
        this.edad = edad;
        this.paises = paises
    }
}

//Asignamos el array de objetos donde se guardarán los cantantes

const arrayDeCantantes = [];

//Definimos los cantantes. Sería más fácil meter todo en uno solo, en realidad.

const cantante = new Cantante(1, "Taylor Swift", 33, "Estados Unidos");
const cantante2 = new Cantante(2, "Ed Sheeran", 32, "Reino Unido");
const cantante3 = new Cantante(3, "Billie Elish", 23, "Estados Unidos");
const cantante4 = new Cantante(4, "Bruno Mars", 37, "Estados Unidos");
const cantante5 = new Cantante(5, "Adele", 34, "Reino Unido");

//Pusheo los cantantes a mi array de objetos
arrayDeCantantes.push(cantante, cantante2, cantante3, cantante4, cantante5);

//Creo un elemento HTML para poder después guardar las cosas.
let acumuladorCantantesHTML = document.createElement("div");

//Observo el ID contenedor del HTML.
let contenedor = document.getElementById('contenedor');

for (let i = 0; i<= 4; i++){ //Recorremos el array de los cantantes...
    let cantantesHTML = `<div>
                            <h2>Nombre: ${arrayDeCantantes[i].nombre}</h2>
                            <h3>Edad: ${arrayDeCantantes[i].edad}</h3>
                            <h3>País: ${arrayDeCantantes[i].paises}</h3>
                            <h4>Id: ${arrayDeCantantes[i].id}
                            <h5> -------------------------- </h5>
                            </div>`
    acumuladorCantantesHTML.innerHTML += cantantesHTML;
}
contenedor.append(acumuladorCantantesHTML); //Agrego el JS a mi archivo HTML

//Stringifeo el array.
const arrayJSON = JSON.stringify(arrayDeCantantes); //luego si queremos ver otra vez el objeto, toca hacer un JSON.parse(arrayJSON), de esta forma, tendremos el objeto una vez más.

console.log(arrayJSON);