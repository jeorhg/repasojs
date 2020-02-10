// scope

// let musica ='rock';

// if(musica) {
//     let musica = 'grunge';
//     console.log('dentro del if: ', musica); 
// }
// console.log('fuera del if', musica);


const nombre = 'Jorge';
const trabajo = 'diseñadorW';

// concatenar js
console.log('Nombre: ' + nombre +', trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}, trabajo:  ${trabajo}`);

//concatenar con multiples lineas
const contenedorApp = document.querySelector('#app');
// let html = '<ul>' +
//                 '<li> Nombre: ' + nombre + '</li>' +
//                 '<li> Trabajo: ' + trabajo + '</li>' +
//             '</ul>';

let html = `
        <ul>
            <li>Nombre:   ${nombre}  </li> 
            <li>Trabajo:   ${trabajo}  </li> 
        </ul>
`;

contenedorApp.innerHTML = html;


// function declaration
function saludar(nombre) {
    console.log('Bienvenido' + nombre );
}
saludar('Jorge');

//function expression

const cliente = function(nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}
cliente('Jorge');

//parametros por default en las funciones

//func declaration

// function actividad(nombre ='UN tipo', actividad ='enseñar quimica') {
//     console.log(`la persona ${nombre}, esta realizando la actividad 
//     ${actividad}`);
// }

// actividad('Jorge', 'aprender JS');
// actividad('Hector', 'creando landing web');
// actividad('Jorge', );

//func expression
const actividad = function(nombre ='UN tipo', actividad ='enseñar quimica'){
    console.log(`la persona ${nombre}, esta realizando la actividad 
    ${actividad}`);
}

actividad('Jorge', 'aprender JS');
actividad('Hector', 'creando landing web');
actividad('Jorge', );

//arrow functions

let viajando = destino => `Viajando a la ciudad de: ${destino}`;

let viaje;
viaje = viajando ('Cancun');
viaje = viajando ('Cdmx');

console.log(viaje);

//objeto
//object literal
const persona = {
    nombre:'Jorge',
    profesion:'diseñador web',
    edad:39
}

const persona2 = {
    nombre:'Jorge',
    profesion:'animador 3d',
    edad:40
}
console.log(persona);
console.log(persona2);

// object constructor
// function Tarea(nombre, urgencia) {
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }

// //crear nueva tarea
// const tarea1 = new Tarea('aprender JS y React', 'Urgente');
// const tarea2 = new Tarea('preparar cafe', 'Urgente');
// const tarea3 = new Tarea('pasear los perros', 'Media');
// const tarea4 = new Tarea('hacer super', 'Baja');

// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);
// console.log(tarea4);

// object constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//Agregar un prototype a Tarea
Tarea.prototype.mostrarInformacionTarea = function() {
    return`La tarea ${this.nombre} tienen una prioridad de ${this.urgencia}`;
}

//crear nueva tarea
const tarea1 = new Tarea('aprender JS y React', 'Urgente');
const tarea2 = new Tarea('pasear los perros', 'Media');


console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea() );
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea() );