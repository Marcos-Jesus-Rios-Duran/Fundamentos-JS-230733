// repaso de arreglos 

// para declarar un arreglo (array) de datos en javaSCript basta con agregar [], y dentro los datos que contendra el arreglo

//estilizacion de los mensajes en salida
const bg = "linear-gradient(11deg, rgb(0,105,255) 0%, rgba(255,20,147,1) 50%, rgba(255,100,200,1) 100%)";
const style_console = `background:${bg}; color:white; border-radius:6px; padding:4px; font-size:1.0rem;`;

console.log("%cPractica 06: Arreglos en JavaScript",style_console)
//declaracion de arreglos 
const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto ", "Septiembre", "Octubre" , "Noviembre", "Diciembre"]
console.log("%c1.- Declaración de arreglos (Arrays",style_console)

console.log(mesesAnio)
console.table(mesesAnio)

//acceder a los valores del arreglo de datos para acceder solo a el valor solo basta con indicar la posicion del dato que queremos dentro de los lmites establecidos, siendo el limite inferior 0 y el limite superior -1

console.log("c2.- Leer o Recuperar los datos del array ",style_console)
console.log(`El primer mes del año es : ${mesesAnio[0]}`)
console.log(`el ultimo mes del año es : ${mesesAnio[mesesAnio.length-1]}`)
// NO SE PUEDEN ACCEDER A ELEMENTOS CON POSICIONES NEGATIVAS O SUPERIORES A EL TAMAÑO DEL ARRAY 

console.log(`El mes del año en la posicion -1 es: ${mesesAnio[-1]}`)
console.log(`el mes treceavo mes del año en la posicion es ${mesesAnio[12]}`)
console.log(`¿Que tipo de dato es un arreglo? : ${typeof(mesesAnio)}`)

// Al ser JS un lenguaje debilmente tipado podemos crear arreglos mixtos de tipos de datos 

let arregloMixto = [
    "String",
    5,
    45.65,
    -200,
    -12546,
    Symbol("Mar"),
    'z',
    false,
    bigIntValue = BigInt("12325456578912"), 
    true,
    { latitud: "20° 10' 18\" N", longitud: "89°", altitud: 796 },
    saludar=null 
];
// mostramos el contenido del objeto 
console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto))

console.log(`Verificamos los tipos de datos de los elementos del arreglo`)
console.log(`El dato en la posicion [0]=  ${arregloMixto[0]} y es de tipo  ${typeof(arregloMixto[0])}`)
console.log(`El dato en la posicion [1]=  ${arregloMixto[1]} y es de tipo  ${typeof(arregloMixto[1])}`)
console.log(`El dato en la posicion [2]=  ${arregloMixto[2]} y es de tipo  ${typeof(arregloMixto[2])}`)
console.log(`El dato en la posicion [3]=  ${arregloMixto[2]} y es de tipo  ${typeof(arregloMixto[3])}`)
console.log(`El dato en la posicion [4]=  ${arregloMixto[4]} y es de tipo  ${typeof(arregloMixto[4])}`)
console.log(`El dato en la posición [5] = ${arregloMixto[5].toString()} y es de tipo ${typeof arregloMixto[5]}`);
console.log(`El dato en la posicion [6]=  ${arregloMixto[6]} y es de tipo  ${typeof(arregloMixto[6])}`)
console.log(`El dato en la posicion [7]=  ${arregloMixto[7]} y es de tipo  ${typeof(arregloMixto[7])}`)
console.log(`El dato en la posicion [8]=  ${arregloMixto[8]} y es de tipo  ${typeof(arregloMixto[8])}`)
console.log(`El dato en la posicion [9]=  ${arregloMixto[9]} y es de tipo  ${typeof(arregloMixto[9])}`)
console.log(`El dato en la posicion [10]=  ${arregloMixto[10]} y es de tipo  ${typeof(arregloMixto[10])}`)
console.log(`El dato en la posicion [11]=  ${arregloMixto[11]} y es de tipo  ${typeof(arregloMixto[11])}`)

console.log("%c3.- Arreglos multidimensionales (Matrices) ",style_console)
// una matriz es una estrucutura multidimensional (Tabla) de n columnas y/o m filas

// Matriz regular
let matriz = [[1, 2, 3, 4], ['a', 'b', 'c', 'd', 'e']];
console.log(matriz);
console.table(matriz);

// Matriz irregular
const matrizIrregular = [["Juan", "Pedro", "María", "Ínes"], [true, false, null], [9.2]];
console.log(matrizIrregular);
console.table(matrizIrregular);

// Leyendo la información de la matriz regular
console.log("Leyendo las propiedades de la matriz regular");
console.log(`El dato en la posición [0] = ${matriz[0].toString()} y es de tipo ${typeof(matriz[0])}`); // Matriz regular
console.log(`El dato en la posición [1] = ${matriz[1].toString()} y es de tipo ${typeof(matriz[1])}`); // Matriz regular

// Leyendo la información de la matriz irregular
console.log("Leyendo las propiedades de la matriz irregular");

// Accediendo a los elementos específicos
console.log(`El dato en la posición [0][0] = ${matrizIrregular[0][0]} y es de tipo ${typeof(matrizIrregular[0][0])}`); // "Juan"
console.log(`El dato en la posición [0][1] = ${matrizIrregular[0][1]} y es de tipo ${typeof(matrizIrregular[0][1])}`); // "Pedro"
console.log(`El dato en la posición [0][2] = ${matrizIrregular[0][2]} y es de tipo ${typeof(matrizIrregular[0][2])}`); // "Maris"
console.log(`El dato en la posición [0][3] = ${matrizIrregular[0][3]} y es de tipo ${typeof(matrizIrregular[0][3])}`); // "Ines"

console.log(`El dato en la posición [1][0] = ${matrizIrregular[1][0]} y es de tipo ${typeof(matrizIrregular[1][0])}`); // true
console.log(`El dato en la posición [1][1] = ${matrizIrregular[1][1]} y es de tipo ${typeof(matrizIrregular[1][1])}`); // false
console.log(`El dato en la posición [1][2] = ${matrizIrregular[1][2]} y es de tipo ${typeof(matrizIrregular[1][2])}`); // null

console.log(`El dato en la posición [2][0] = ${matrizIrregular[2][0]} y es de tipo ${typeof(matrizIrregular[2][0])}`); // 9.2


// Funciones y Metodos 
 // Los metodos de un objeto son  son siempre invocadas usando un "." y el termino al que se delimitan los parametros entre (), en este caso de que no tiene lleve () NO ES UN METODO SINO UNA PROPIEDAD

 console.log("%c4.- Funiones o Metodos de los arreglos ",style_console)

 console.log( "¿Como saber cual es el tamaño de un arreglo?")

console.log(`mesesAnio es un arreglo de tamaño ${mesesAnio.length} `)
console.log(`arregloMixto  es un arreglo de tamaño: ${matriz.length}` )
console.log(`mmmmm, eso me da el el tamaño de numero de filas pero como saber el numero de columnas `)
console.log(`La matriz es  regular tiene un numero de ${matriz[0].length}`)
