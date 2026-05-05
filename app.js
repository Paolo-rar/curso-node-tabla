/* hacer la tabla del 5 en javascrip
console.clear();
console.log('=============');
console.log('  Tabla del 5');
console.log('=============');
const j = 5;
for(i = 1;i<=10;i++){
    console.log(`${j} x ${i} = ${j * i}`);
       
} */





/* // hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log('  Tabla del 5');
console.log('=============');
const j = 5;
let salida = '';
for(i = 1;i<=10;i++){
    salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
       
}
console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si
//algo sale mal.
fs.writeFile('tabla-del-5.txt' , salida, (err) => {
    if(err) throw err;
    console.log('Tabla-del-5 creado');
}) */



// hacer la tabla del 5 en javascrip
/* const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const j = 4;
crearArchivo(j)
    .then( nombreArchivo =>console.log(nombreArchivo, 'Creado')) // incluir el tratamiento del error
    .catch( err =>console.log(err)); */



// hacer la tabla del 5 en javascrip
// const {crearArchivo} = require('./helper/multiplicar');
// const yargs = require('yargs/yargs');
// const argv = yargs(process.argv.slice(2)).argv;


// console.clear();
// console.log(process.argv);
// console.log(argv);
// console.log('j de yargs:', argv.j);
//const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( '='); //separa el string por el caracter =
//console.log(j);
/* crearArchivo(j)
    .then( nombreArchivo =>console.log(nombreArchivo, 'Creado'))
    .catch( err =>console.log(err)); */









// Configuración de Yargs.

// hacer la tabla del 5 en javascrip
/* const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs/yargs')(process.argv.slice(2))
    .option('b', {
        alias: 'base',
        type: 'number'
    })
    .argv;
console.clear();
//console.log(process.argv);
console.log(argv);
console.log('Base de yargs:', argv.b); */









// Comando node app -b=10. Se creara la tabla del 10.
/* const { crearArchivo } = require('./helper/multiplicar');
const argv = require('yargs/yargs')(process.argv.slice(2))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('La base debe ser un número');
        }
        return true;
    })
    .argv;


console.clear();
console.log(argv); 


crearArchivo(argv.b)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err)); */






//comando node app -b=8 -l se muestra en pantalla y crea archivo.
/* const { crearArchivo } = require('./helper/multiplicar');
const argv = require('yargs/yargs')(process.argv.slice(2))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('La base debe ser un número');
        }
        return true;
    })
    .argv;

console.clear();
console.log(argv); 

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err)); */










// hacer la tabla del 5 en javascript
const { crearArchivo } = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err => console.log(err));