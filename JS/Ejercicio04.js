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
console.log(`Y para la matrizIrregular?`)

//Para saber la dimensión de una matriz irregular podemos hacer el uso del ciclo

let numeroFilas=matrizIrregular.length
for(let i = 0; i < numeroFilas; i++)
    console.log(`La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`)



console.log("%c5.-  Agregar un nuevo elemento a un arreglo (ÚSH)",style_console)

let estudiantes =["Angel Rufino", "Idai Vargas", "Daniel Bravo", "Esther Gonzalez", "Ailton Airtiaga" ]
console.log("Los elementos del actuales del arreglo son:")
console.table(estudiantes)
console.log("agregamos un nuevo tipo de datos llamado Abril Guzman")
estudiantes.push("Abril Guzman")
console.log("Despues de agregar los elementos del areglo son :")
console.table(estudiantes)
console.log("¿que ása con los arreglos mixtos? ")
console.log("Actualmente arrgeloMixto tiene los siguientes elementos:")
console.table(arregloMixto)
console.log("Agregemos la palabra \"hola\" como nuevo elemento")
console.log("Tmabien agregamos el numero -123456789123456746879123.112678797545 siendo este un Bigint" )
arregloMixto.push("hola")
arregloMixto.push(BigInt(-123456789123456746879123.112678797545 ))
console.log("Despues de estas dos operaciones el arrgelo queda de la siguiente manera:")
console.table(arregloMixto)

console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posicion inicial ",style_console)
console.table(estudiantes)
console.log("Ahora agregamos a Abishaí flores, el comienzo del arreglo.")
estudiantes.unshift("Abishaí Flores")
console.log("Ahora la lista actual es:")
console.table(estudiantes)
console.log("%c7.- Eliminar el elemento de un arreglo en la ultima posición (POP)",style_console)

console.log("El arreglo tiene los siguientes elementos:")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Abril Guzman, es la ultima posicion")
estudiantes.pop();
console.log("Despues de eliminar el elemento el arreglo quedo de la siguiente manera:")
console.table(estudiantes)


console.log("%c8.- Eliinar el elemento de un arreglo en en la primera posicion (SHIFT)",style_console)
console.log("Para este caso elinaremos  Abishaí Flores que es el primero de la lista ")
console.table(estudiantes)
estudiantes.shift();
console.log("ahora despues eliminar queda asi ")
console.table(estudiantes)
console.log("%c9.- Dividir un arreglo en un uno nuevo con posiciones definidas (SPLICE)",style_console)
//CUANDO LA POSICION SPLICE RECIBE UN PARAMETRO ELIMINARA LOS ELEMENTOS DE ESTA POSICION EN ADELANTE
estudiantes.splice(2)
console.table(estudiantes)
estudiantes.push("Zyanya Zacatenco")
estudiantes.push("Tania Ibarra")
estudiantes.push("Juvenal Viveros")
estudiantes.push("Marcos Rios")
estudiantes.push("Jonathan Baldemar")
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es :")
console.table(estudiantes)
console.log("Ahora tenemos los elementos suficientes para usar splice en las posiciones (3,5)")
estudiantes.splice(3,2)
console.log("Resultado:")
console.table(estudiantes)
console.log("Insertamos a \" Antonio Ocpaco \" entre la posicion 0 y 1 del array")
//SPLICE sirve tambien para insertar elementos en posiciones especificcas, ahora insertaremos a: Antonio Ocpaco entre Angel e Idai
estudiantes.splice(1,0,"Antonio Ocpacco")
console.log("Resultado:")
console.table(estudiantes)

console.log("Ahora reemplazaremos el valor de \"Angel Rufino \" Con brandon")
estudiantes.splice(0,1,"Brandom")
console.log("Resultado:")
console.table(estudiantes)

console.log("%c10.- Metodos para la manipulacion de arreglos inmutables",style_console)
let signosZodiacales= ["Aries","Tauro", "Geminis","Cancer","Leo","virgo","Libra","Escorpio","Sagitario","capricornio","Acuario","Piscis"]
//Destructuración de Arreglo
let[signo1,,signo3,,,,signo7,,,,]=signosZodiacales
console.log(`El primer signo Zodiacal es: ${signo1}`)
console.log(`El segundo signo Zodiacal es: ${signo3}`)
console.log(`El segundo signo Zodiacal es: ${signo7}`)
//Congelamos el objeto de zignosZodiacales
Object.freeze(signosZodiacales);


