// funcion que realiza la multiplicación
// const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
// const crearArchivo = ( j = 5 ) =>{
//     console.log('=============');
//     console.log('  Tabla del: ', j);
//     console.log('=============');
//     let salida = '';
//     for(i = 1;i<=10;i++){
//         salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
//        
//     }
//     console.log(salida);
//     //el file system para grabar un archivo. usando WriteFileSync
//     //cono se ejecuta de manera asincrona ya no va el error.
//     //Paraq controlar el error se usa try - catch.
//     fs.writeFileSync(`tabla-del-${j}.txt` , salida);

/*
    console.log(`Tabla del ${j} Creado`);
}
module.exports = {
    crearArchivo
}*/

// let nombreArchivo = `Tabla del ${j}`;
//         (nombreArchivo)
//             ?resolve(nombreArchivo)
//             :reject (`No existe ${nombreArchivo}`);
//    
//     
//       return promesa;
//    
// }
// module.exports = {
//     crearArchivo
// }

// funcion que realiza la multiplicacion
/* const fs = require('fs');
const { resolve } = require('path');
const crearArchivo = async ( j = 5 ) =>{
        try {
            console.log('=============');
            console.log('  Tabla del: ', j);
            console.log('=============');
            let salida = '';
            for(i = 1;i<=10;i++){
                salida += `${j} x ${i} = ${j * i}\n`;
           
             }
   
            console.log(salida);
       
            fs.writeFileSync(`tabla-del-${j}.txt` , salida);
            return `Tabla del ${j}`;
        } catch (err) {
            throw err;
        }
     
           
    };
     
module.exports = {
    crearArchivo
} */











//Actualizamos código en multiplicar.js
/* const fs = require('fs');
const { resolve } = require('path');
const crearArchivo = async ( j = 5, listar = true ) =>{
        try {
           
            let salida = '';
            for(i = 1;i<=10;i++){
                salida += `${j} x ${i} = ${j * i}\n`;
           
             }
             if(listar){
                console.log('=============');
                console.log('  Tabla del: ', j);
                console.log('=============');
                console.log(salida);
             }
           
       
            fs.writeFileSync(`tabla-del-${j}.txt` , salida);
            return `Tabla del ${j}`;
        } catch (err) {
            throw err;
        }
     
           
    };

     
module.exports = {
    crearArchivo
} */








// helper/multiplicar.js
// Funcion que realiza la multiplicacion y guarda el archivo
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( j = 5, listar = true, hasta = 10 ) => {
try {
    let salida  = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
        salida  += `${j} x ${i} = ${j * i}\n`;
        consola += `${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`;
    }

    if (listar) {
        console.log('============='.green);
        console.log('  Tabla del: ', colors.blue(j));
        console.log('============='.blue);
        console.log(consola);
    }

    
    if (!fs.existsSync('./salida')) {
        fs.mkdirSync('./salida');
    }

    /* fs.writeFileSync(`./salida/tabla-del-${j}.txt`, salida); */

    return `Tabla del ${j}`;

} catch (err) {
    throw err;
}
};

module.exports = {
    crearArchivo
};