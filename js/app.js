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


// si activo esto no funciona arreglos y .map --->
// let html = `
//         <ul>
//             <li>Nombre:   ${nombre}  </li> 
//             <li>Trabajo:   ${trabajo}  </li> 
//         </ul>
// `;

// contenedorApp.innerHTML = html;


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


//destructuring de objetos
const aprendiendoJS ={
    version:{
        nueva : 'ES6',
        anterior : 'ES5',
    },
    frameworks: ['React', 'VueJs', 'AngularJS']
}

//destructuring es extraer valores de un objeto 

// console.log(aprendiendoJS);

// //version anterior
// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.frameworks[1];


//destructuring forma nueva
let {anterior} = aprendiendoJS.version;
console.log(anterior);

// object literal enhancement

const banda = 'Metallica';
const genero = 'heavy metal';
const canciones = 'master of puppets';

// forma anterior
// const Metallica = {
//     banda : banda,
//     genero : genero,
//     canciones : canciones,
// }

//forma nueva

const Metallica = {banda, genero, canciones};

console.log(Metallica);


//metodos o funciones en un objeto 

// const persona = {
//     // nombre: 'Jorge',
//     // trabajo: 'Diseñador web',
//     (property) musicaRock: Boolean
//     musicaRock : true,
//     mostrarInformacion() {
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
//     }
// }

// persona.mostrarInformacion();


//arreglos y .map

//const carrito = ['Producto1', 'Producto2', 'Producto3'];
// carrito = ['Producto1', 'Producto2', 'Producto3'];
 
// //console.log(carrito);

// // const appContenedor = document.querySelector('#app');

// // let html = '';
// // carrito.forEach(producto => {
// //     html += `<li>${producto}</li>`;
// // })

// // appContenedor.innerHTML = html;

// carrito.map(Producto => {
//     return 'El producto es ' + Producto;
// } );


//keys
// const persona = {
//     nombre: 'Jorge',
//     trabajo: 'Diseñador web',
//     edad: '39',
// }

console.log(Object.keys(persona));


//spread operator ...

let lenguajes = ['JS', 'PHP', 'Python'];
let frameworks = ['ReactJs', 'Laravel', 'Django'];

//unir arreglos en uno solo

// forma antigua  let combinacion = lenguajes.concat(frameworks);
let combinacion = [...lenguajes,...frameworks];

console.log(combinacion);


//filter find y reduce

const personas =[
    {nombre: 'Jorge', edad: 39, aprendiendo: 'JS'},
    {nombre: 'Pablo', edad: 28, aprendiendo: 'PHP'},
    {nombre: 'Alejandra', edad: 21, aprendiendo: 'AdobeXD'},
    {nombre: 'Carla', edad: 30, aprendiendo: 'Python'},
    {nombre: 'Miguel', edad: 33, aprendiendo: 'ReactJS'},
]

console.log(personas);

//mayores de 28
const mayores = personas.filter(persona => {
    return persona.edad > 28;
});

//console.log(mayores);

//que aprende alejandra y su edad

const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});

//console.log('Alejandra esta aprendiendo: ' + alejandra.aprendiendo);

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);
console.log(total);
//console.log(total / personas.length);


//PROMISES

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout( () => {
        let descuento = true;

        if(descuento) {
            resolve('Descuento aplicado');
        } else {
            reject('No se pudo aplicar el descuento')
        }
        }, 3000);
    });

    aplicarDescuento.then(resultado => {
    console.log(resultado);
});


const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
//pasar la cantidad a la API

const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

//llamando ajax
const xhr = new XMLHttpRequest();

//abrir la conexion
xhr.open('GET', api, true);

//on load
xhr.onload = () => {
    if(xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results );
    } else {
        reject(Error(xhr.statusText));
    }
}

//opcional on error
xhr.onerror = (error) => reject(error);

//send
xhr.send()
});

descargarUsuarios(20)
    .then(
        miembros => imprimirHTML (miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    )

    function imprimirHTML(usuarios) {
        let html = '';
        usuarios.forEach(usuario => {
            html += `
                <li>
                    Nombre: ${usuario.name.first} ${usuario.name.last}
                    País: ${usuario.nat}
                    Imagen:
                        <img src="${usuario.picture.medium}">
                </li>
            `;
        });

        const contenedorApp = document.querySelector('#app');
        contenedorApp.innerHTML = html;
    }
