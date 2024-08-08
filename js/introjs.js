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
console.log(`${nombre} está programando y con antojo`)
//const declara constantes
const precio_chocolate=89;


//Alcance de las variables

{
    let precio_leche=25;
}

/*Arroja error porque precio crema  fue declarada en 
otro ámbito y finalizó 2 lineas arriba*/
//console.log(precio_leche);


//alert, prompt, confirm
alert(`los chocolates cuestan ${precio_chocolate}`);
const chocolate_favorito= prompt("¿Cual es tu chocolate favorito");
console.log(`Tu chocolate favorito es ${chocolate_favorito}`);

const is_antojo=confirm("¿tienes antojo de algo dulce?");

if(is_antojo){
    console.info("Pide un chocolate");
} else{
    console.info("Regresa cuando tengas antojo de algo dulce");
}


//funciones tradicionales
function preparar_chocolate(tipo){
    console.log(`Preparando barra de chocolate ${tipo} `);
}

//preparar_chocolate(chocolate_favorito);


//funciones modernas
const leche=()=>{
    console.log("con leche. ");
}

//leche();

document.getElementById("Preparar chocolate").onclick=()=>{
    preparar_chocolate(chocolate_favorito);
    leche();

}