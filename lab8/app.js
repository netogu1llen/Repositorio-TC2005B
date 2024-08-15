const filesystem=require('fs'); //fs es el modulo de filesystem

//Escribe el segundo parámetro en el archivo especificado en el primer parámetro
filesystem.writeFileSync('hola.txt','Hola desde note');


const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 

/*setTimeout recibe como parámetro una funcion y la cantidad de segundos que van a 
pasar antes de que se ejute la función*/
setTimeout(() => {
    console.log("hacked");
}, 12000);
