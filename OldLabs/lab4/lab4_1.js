/*
1. Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al 
número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
*/

const numero=prompt("1. Ingresa un número:");
document.write("1. Tabla <table border='1'>");
document.write("<tr> <th>Número</th> <th>Numero^2</th> <th>Numero^3</th> </tr>");

for (let i = 1; i <= numero; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + i * i + "</td>");
    document.write("<td>" + i * i * i + "</td>");
    document.write("</tr>");
}
document.write("</table>");


/*
2. Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de 
manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o 
incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
*/
let numero2_1=Math.floor(Math.random()*10);
let numero2_2=Math.floor(Math.random()*10);
let suma=numero2_1+numero2_2;
//registro del tiempo inicio
let tiempoInicio=new Date().getTime();
const numero2=prompt(`2.¿Cuál es la suma de: ${numero2_1} y ${numero2_2}?`);
//tiempo de respuesta
let tiempoFin=new Date().getTime();
//convertir a segundos
let tiempoRespuesta=(tiempoFin-tiempoInicio)/1000;

document.write(`<br>2. Tiempo de respuesta: ${tiempoRespuesta}.`)
if (numero2==suma){
    document.write("<br>Respuesta correcta<br>");
}  else{
    document.write("<br>Respuesta incorrecta<br>");
}


/*
3. Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de 
números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores 
mayores a 0 en el arreglo.
*/
let array=[-3,0,5,-1,0,2,-4,7];
let resultado3=contador(array);

function contador(array){
    let negativos=0;
    let ceros=0;
    let positivos=0;

    for (let i=0;i<array.length;i++){
        if (array[i]<0){
            negativos++;
        } else if(array[i]===0){
            ceros++;
        } else{
            positivos++;
        }
    }
    return {
        negativos,
        ceros,
        positivos
    };
}
document.write(`<br>3. Arreglo: ${array}`);
document.write(`<br>Negativos: ${resultado3.negativos}<br>Ceros: ${resultado3.ceros}<br>Positivos:${resultado3.positivos}<br>`);


/*
4. Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con
los promedios de cada uno de los renglones de la matriz.
*/
let matriz=[[3,5,7],
            [10,20,30],
            [4,6,8,10],
            [1]]
document.write(`<br>4. Matriz: ${matriz[0]}<br>${matriz[1]}<br>${matriz[2]}<br>${matriz[3]}`);

function promedios(matriz){
    let promediosArray=[];

    for (let i=0;i<matriz.length;i++){
        let suma=0;
        let renglon=matriz[i];

        for (let j=0;j<renglon.length;j++){
        suma+=renglon[j];
        }
        let promedio=suma/renglon.length;
        promediosArray.push(promedio);
    }
    return promediosArray;
}

let resultado4=promedios(matriz);
document.write(`<br>Promedio de arrays de matriz: ${resultado4}<br>`);


/*
5. Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden 
inverso.
*/
let numero5=2468;
document.write(`<br>5. Numero a invertir: ${numero5}`)
function inverso(numero5){
    //convertir numero a string
    let numerostr=numero5.toString();
    //divide la cadena de texto en arreglo de caracteres
    //invierte el orden de los caracteres en el arreglo
    //une los caracteres nuevamente
    let numeroinvertido=numerostr.split("").reverse().join("")
    //convertir a numero de nuevo
    return parseInt(numeroinvertido);
}
let resultado5=inverso(numero5);
document.write(`<br>Numero invertido:${resultado5}.`);

/*
6
*/


