//Ingresar dos valores y sumarlos.//
let numero1 = 4;
let numero2 = 7;

let suma = numero1 + numero2;

console.log("La suma de", numero1, "y", numero2, "es:", suma);

//Ingresar tres valores e indicar cual es el mayor y cual el menor.//
let num1 = 15;
let num2 = 8;
let num3 = 23;

let mayor = Math.max(num1, num2, num3);

let menor = Math.min(num1, num2, num3);

console.log("Los números son:",num1, num2, num3);
console.log("El número mayor es:",mayor);
console.log("El número menor es:",menor);

//Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.//
let palabra = "Aeropuerto";

let cantidad = palabra.length;

console.log(palabra + " tiene " + cantidad + " letras.");

//Ingresar un número e indicar si es par.//
let numero = 13;

if (numero % 2 === 0) {
  console.log(numero + " es un número par.");
} else {
  console.log(numero + " es un número impar.");
}

//Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.//
let palabrarep = "lapicera";
let repetir = 5;
for (let i = 0; i < repetir; i++) {
  console.log(palabrarep);
}


//Ingresar dos valores enteros y enumerar los elementos que los separan.//
let n1 = 14;
let n2 = 8;

if (n1 < n2) {
  for (let i = n1 + 1; i < n2; i++) {
    console.log(i);
  }
} if (n2 < n1) {
  for (let i = n2 + 1; i < n1; i++) {
    console.log(i);
  }
}

//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.//
let numA = 11;
let numB = 24;

let meno = Math.min(numA, numB);
let mayo = Math.max(numA, numB);

for (let i = meno + 1; i < mayo; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.//

for (let i = 1; i < 100; i++) {
  if (i % 2 === 0 && i % 5 === 0) {
    console.log(i);
  }
}


//Obtener la suma de los elementos de un array.//

let numerosArray1 = [42, 43, 44, 45, 46];
let sumaArray = 0;
for (let i = 0; i < numerosArray1.length; i++) {
  sumaArray += numerosArray1[i];
}
console.log("La suma de los elementos del array (", numerosArray1, ") es:", sumaArray);

//Sumar solo los elementos pares de un array.//
let numerosArray2 = [22, 23, 24, 25, 26];	
let sumaPares = 0;
for (let i = 0; i < numerosArray2.length; i++) {
  if (numerosArray2[i] % 2 === 0) {
    sumaPares += numerosArray2[i];
  }
}
console.log("La suma de los elementos pares del array (", numerosArray2, ") es:", sumaPares);

//Ingresar una palabra e identificar las letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal//
let palabraContar = "dinosaurios";
let contadorLetras = {};
for (let letra of palabraContar) {
  if (contadorLetras[letra]) {
    contadorLetras[letra]++;
  } else {
    contadorLetras[letra] = 1;
  }
}
console.log("La palabra", palabraContar, "tiene las siguientes letras:", contadorLetras);

//Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.//

let personas = [
  { nombre: "Lucía", sexo: "F", edad: 25 },
  { nombre: "Lautaro", sexo: "M", edad: 18 },
  { nombre: "Jerónimo", sexo: "M", edad: 30 },
  { nombre: "Leonardo", sexo: "M", edad: 22 },
  { nombre: "Julieta", sexo: "F", edad: 38 }
];

// Promedio de edad
let sumaEdades = 0;
for (let i = 0; i < personas.length; i++) {
  sumaEdades += personas[i].edad;
}
let promedioGeneral = sumaEdades / personas.length;
console.log("Promedio general de edad:", promedioGeneral);

// Mujer con mayor edad
let mujerMayor = null;
for (let i = 0; i < personas.length; i++) {
  if (personas[i].sexo === "F") {
    if (mujerMayor === null || personas[i].edad > mujerMayor.edad) {
      mujerMayor = personas[i];
    }
  }
}
  console.log("Mujer con mayor edad:", mujerMayor.nombre);


// Hombre con menor edad
let hombreMenor = null;
for (let i = 0; i < personas.length; i++) {
  if (personas[i].sexo === "M") {
    if (hombreMenor === null || personas[i].edad < hombreMenor.edad) {
      hombreMenor = personas[i];
    }
  }
}
  console.log("Hombre con menor edad:", hombreMenor.nombre);


// Promedio de edad de las mujeres
let sumaEdadesMujeres = 0;
let cantidadMujeres = 0;
for (let i = 0; i < personas.length; i++) {
  if (personas[i].sexo === "F") {
    sumaEdadesMujeres += personas[i].edad;
    cantidadMujeres++;
  }
}
  let promedioMujeres = sumaEdadesMujeres / cantidadMujeres;
  console.log("Promedio de edad de las mujeres:", promedioMujeres);
 
//Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado.//

function obtenerDivisibles(minimo, maximo, divisor) {
  let lista = [];

  for (let i = minimo; i <= maximo; i++) {
    if (i % divisor === 0) {
      lista.push(i);
    }
  }

  return lista;
}

let resultado = obtenerDivisibles(1, 65, 5);
console.log("Numeros divisibles por 5 entre 1 y 65:", resultado);
