//consola (log, ingo, warn, error, assert)

console.log("hola mundo");
console.info("esto es información importante");
console.warn("cuidado");
console.error("Te equivocaste");
console.assert(1==0);

//Variables, constantes

//let permite declarar variables
let nombre="Ernesto";
console.log("Hola"+ nombre)
console.log(`${nombre} está programando y con hambre`)
//const declara constantes
const precio_chocolate=89;


//Alcance de las variables

{
    let precio_leche=25;
}

/*Arroja error porque precio crema  fue declarada en 
otro ámbito y finalizó 2 lineas arriba*/
console.log(precio_leche);

