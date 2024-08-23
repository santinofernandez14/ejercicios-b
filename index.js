

/* Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros. */

/* Crear una función que recibe un string y lo convierte en una URL. 
  ej: “pepito” es devuelto como “http://www.pepito.com”
   */

function pulgadasACentimetros(pulgadas) {
    const centimetrosPorPulgada = 2.54;
    return pulgadas * centimetrosPorPulgada;
}


let pulgadas = 10;
let centimetros = pulgadasACentimetros(pulgadas);
console.log(`${pulgadas} pulgadas son ${centimetros} centimetros.`); 

function convertirAUrl(texto) {
    return `http://www.${texto}.com`;
}


let texto = "pepito";
let url = convertirAUrl(texto);
console.log(url); 

/* Crear una función que recibe un string y devuelve la misma frase pero 
con admiración. */

function agregarAdmiracion(frase) {
    return `¡${frase}!`;
}


let frase = "Hola";
let fraseConAdmiracion = agregarAdmiracion(frase);
console.log(fraseConAdmiracion); 

/* Crear una función que calcule la edad de los perros, 
considerando que 1 año para nosotros son 7 de ellos. */

function calcularEdadPerro(edadHumana) {
    const edadPerro = edadHumana * 7;
    console.log(edadPerro);
  }

  
  calcularEdadPerro(10);

/* Crear una función que calcule el valor de tu hora de trabajo, 
introduciendo tu sueldo mensual como parámetro.
  PD: considera que tu mes de trabajo tiene 40 horas. */
  function calcularValorHora(sueldoMensual) {
    const horasPorMes = 40;
    const valorHora = sueldoMensual / horasPorMes;
    console.log(valorHora);
  }

  calcularValorHora(1000);

  /* Crear la función calculadorIMC() que reciba la altura en metros 
  y el peso en kilogramos y calcule el imc de una persona.  
  Luego, ejecutar la función probando diferentes valores. */

  function calculadorIMC(altura, peso) {
    const imc = peso / (altura * altura);
    console.log(imc);
  }

  calculadorIMC(10,2);




  
/* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas 
y lo retorne. 
  Investiga que hace el método de strings .toUpperCase() */

function convertirAMayusculas(frase) {
    return frase.toUpperCase();
}


let frase1 = "hola como estas";
let fraseEnMayusculas = convertirAMayusculas(frase1);
console.log(fraseEnMayusculas); 


/* Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
  pista: te servirá revisar que hace la palabra reservada typeof. */


function tipoDeDato(parametro) {
    return typeof parametro;
}

console.log("los distintos tipos de datos son ");
console.log(tipoDeDato(8));              
console.log(tipoDeDato("hola"));   
console.log(tipoDeDato(true));            
console.log(tipoDeDato({ nombre: "Juan" })); 
console.log(tipoDeDato([1, 2, 3]));      
console.log(tipoDeDato(undefined));       
console.log(tipoDeDato(null));            
console.log(tipoDeDato(function() {}));   

/* Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
  Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi */

function calcularCircunferencia(radio) {
    const PI = Math.PI;
    return 2 * PI * radio;
}


let radio = 5;
let circunferencia = calcularCircunferencia(radio);
console.log(`La circunferencia de un círculo con radio ${radio} es ${circunferencia}.`); // Output: La circunferencia de un círculo con radio 5 es 31.41592653589793.



/*clase 5 */

/*Utiliza una función para generar un número aleatorio entre 1 y 100
como número secreto.
● Implementa un ciclo while que permita al jugador hacer múltiples
conjeturas.
● Dentro del ciclo, solicita al jugador que ingrese una conjetura y
compárala con el número secreto.
● Utiliza condicionales para proporcionar pistas al jugador si su
conjetura es alta o baja.
● Cuando el jugador adivine el número correcto, muestra un mensaje
de felicitaciones junto con el número de intentos realizados.
 */


/*function juegoDeLaAdivinanza() {
    
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let numero;
    let intentos = 0;

    while (numero !== numeroSecreto) {
        
        numero = parseInt(prompt("Adivina el número secreto (entre 1 y 100): "), 10);
        intentos++;

        if (numero < numeroSecreto) {
            alert("demasiado bajo intenta nuevamente");
        } else if (numero > numeroSecreto) {
            alert("demasiado alto intenta nuevamente");
        } else if (numero === numeroSecreto) {
            alert(`felicidades has adivinado el número secreto (${numeroSecreto}) en ${intentos} intentos`);
        } else {
            alert("entrada no valida por favor ingresa un numero");
        }
    }
}


juegoDeLaAdivinanza();*/



/*Escribe una función llamada contarPalabras(). Esta recibirá
un string.
● Implementa un método que permita separar el string
tomando en cuenta el espacio.
● Una vez separado el string, devuelve el número de
elementos resultantes.
● Puedes probar la función con una cadena de caracteres e ir
chequeando cada paso con console.log().
● Verifica la cantidad de elementos devueltos por la función.*/




/*function contarPalabras(frase) {
    //con trim evito contar los espacios y con split separo la cadena en un array de palabras
    y que me separe la palabra en uno o mas espacios con la exprexion regular
    const palabras = frase.trim().split(/\s+/);

    
    return palabras.length;
}


let fraseDePrueba = "hola, ¿como estas?";
console.log(`Frase: "${fraseDePrueba}"`);
console.log("Número de palabras:", contarPalabras(fraseDePrueba)); */


        