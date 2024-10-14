// Repaso de  Ciclo y Sentencias de Control
//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0, 146, 70, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(206, 17, 38, 1) 100%)";
const style_console = `background: ${bg}; color: black; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;


//Personalización de las Salidas a Consola
console.warn("Práctica 07: Arreglos en Java Script")
console.log("%c1.- Condicionales Si/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en vase a una prueba lógica de verdadero  o falso
let fechaActual = new Date();
//let fechaActual = new Date(2024,7, 5); // 0 representa enero
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);
// y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });
console.log(`en formato local (México): ${fechaLocalMX}`);
// Si es antes de las doce saluda con un buenos días
if (fechaActual.getHours() < 12)
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`);
// Existe un extensor de la sentencia if(Sí) que es else (en caso contrario)
if (fechaActual.getMonth() <= 6)
    console.log(`Estas en la primera mitad del año.`);
else
    console.log(`Estas en la segunda mitad del año.`);

// Que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtonio = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);
let estacion;
let horarioVerano = false;
if (fechaActual >= inicioPrimavera && fechaActual < inicioVerano) {
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la floración de muchas plantas...")
    console.log("Los días son más largos y las noches más cortas...")
    console.log("Muchos animales despiertan de la hibernación... ")
    console.log()
    estación = "Primavera"
    horarioVerano = "True"
}
else if (fechaActual >= inicioVerano && fechaActual < inicioOtonio) {
    console.log("Estamos en Verano...")
    console.log("En esta temporada los abundan los dias de Soleados y Calurosos...")
    console.log("En esta temporada el índice de turismo vacacional sube ...")
    console.log("Mucha gente busca realizar actividades al aire libre ... ")
    console.log()
    estación = "Verano"
    horarioVerano = "True"
}
else if (fechaActual >= inicioOtonio && fechaActual < inicioInvierno) {
    console.log("Estamos en Otoño...")
    console.log("Los árboles comienzan a cambiar de follaje...")
    console.log("Se registrarán temperaturas más templadas  ...")
    console.log("Los animales comienzan la recolección de alimentosy preparan sus espacios para la hibernación e incluso algunas aves migran.  ")
    console.log()
    estación = "Otoño"
    horarioVerano = "false"
}
else {
    console.log("Estamos en Invierno...")
    console.log("En esta temporada los dias son más cortos y las noches más largas...")
    console.log("En algunas regiones suele nevar ...")
    console.log("Mucha gente busca realizar actividades al aire libre ... ")
    console.log()
    estación = "Invierno"
    horarioVerano = "True"
}
console.log("%c2.- Operador ternario (Validacion ? cumple : no_cumple)", style_console);
// En java script existe una operacion simplficada que valida si una condicion se cumple o no y que hacer en ada caso 
let edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;

// Usando solo una línea para verificar la mayoría de edad
console.log(((edad) => edad >= 18 ? "Eres mayor de edad." : "No eres mayor de edad.")(edadPersona));

// Función para verificar la mayoría de edad
const verificarEdad = (edadPersona) =>
    edadPersona >= 18 ? "Eres mayor de edad." : "No eres mayor de edad.";

console.log("Evaluando la mayoría de edad de una persona:");
console.log(verificarEdad(20)); // Ejemplo para 20 años
console.log(verificarEdad(16)); // Ejemplo para 16 años

// Función para evaluar la mayoría de edad considerando el país
let evaluarMayoriaEdad = (edad, pais) => 
    (edad >= (pais === "MX" ? mayoriaEdadMX : mayoriaEdadUS)) 
    ? `En el país ${pais} eres mayor de edad` 
    : `En ${pais} NO eres mayor de edad`;

console.log("Evaluando la mayoría de edad en México:");
console.log(evaluarMayoriaEdad(edadPersona, "MX")); // Para 18 años en México

console.log("Evaluando la mayoría de edad en Estados Unidos:");
console.log(evaluarMayoriaEdad(edadPersona, "US")); // Para 18 años en EE. UU.

console.log("%c3.- Switch - CASE (Eleccion por valor definido",style_console)
//calculando tu generacion en base a tu edad 
edadPersona=19;
let fechaNacimiento=2005;
let generacion =(fechaNacimiento)=>{
switch (true) {
    case (fechaNacimiento < 1968):
        return "Baby Boomers";
        
    case (fechaNacimiento >= 1968 && fechaNacimiento <= 1980):
        return "Generación X";
        break;
    case (fechaNacimiento > 1980 && fechaNacimiento <= 1994):
        return "Generación Millennials";
        break;
    case (fechaNacimiento > 1994 && fechaNacimiento <= 2009):
        return "Generación Z";
        break;
    case (fechaNacimiento > 2012 && fechaNacimiento <= fechaActual):
        return "Generación Alpha";
        break;
    default:
        return "Fecha de nacimiento no válida";
}}

console.log(`Dado que nacio en el año ${fechaNacimiento} Tu generación es: ${generacion}`);


console.log("%c8.- Ciclo Condicionales que se ejecuta al menos una vez- (DO While)", style_console);

// SIMULEMOS UNA LISTA DE EPISODIOS DE UNA TEMPORADA 
let episodios = [
    "Episodio 1: SIN RUMBO",
    "Episodio 2: La revelación",
    "Episodio 3: Alma sin rumbo",
    "Episodio 4: A lo lejos",
    "Episodio 5: Acá entre nosotros"
];

let indice = 0;
let continuarViendо = true; // Esta variable simula la decisión del usuario de continuar viendo

do {
    console.log(`Reproduciendo ${episodios[indice]}`);
    // Simulamos la reproducción del episodio
    indice++;

    // Simulamos una pregunta al usuario si desea seguir viendo
    if (indice < episodios.length) {
        continuarViendо = confirm("¿Deseas seguir viendo?"); // Simula una pregunta al usuario
    } else {
        continuarViendо = false; // No hay más episodios
    }
} while (continuarViendо);

// Ciclo para recorrer objetos iterables como mapas, arreglos, cadenas y conjuntos de datos
console.log("%c9.- Ciclos para recorrer elementos finitos  ( )", style_console);

let seriesTrending = [
    { nombre: "The Witcher", temporadas: 3, TotalViewers: "1.5M", TotalReprods: "3.0M" },
    { nombre: "Stranger Things", temporadas: 4, TotalViewers: "6.5M", TotalReprods: "10M" },
    { nombre: "The Boys", temporadas: 3, TotalViewers: "3.2M", TotalReprods: "3.0M" },
    { nombre: "Another Series", temporadas: 3, TotalViewers: "1.5M", TotalReprods: "3.0M" }
];

for (let serie of seriesTrending) {
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
}

try {
    // Aquí 'serie' no estará definida, ya que su alcance es dentro del ciclo for
    console.log(`La última serie fue: ${serie.nombre}`); 
} catch (error) {
    console.log("Mensaje de error: " + error.message);
}

console.log("%c10.- CICLOS PARA RECORRER LAS PROPIEDADES DE ELEMENTOS FINITOS (FOR-IN)", style_console);
// USANDO CADA FOR...IN para recorrer cada serie
for (let i in seriesTrending) {
    console.log(`Serie ${parseInt(i) + 1}:`); // Se corrige para mostrar el índice correctamente
    for (let propiedad in seriesTrending[i]) {
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
    }
    console.log(".........");
}

console.log("%c11.- Ciclos ininterrmpidos para cada uno de elementos del arreglo- (FOR EACH)",style_console);
//Lista de series de tv trnding con temporadas, viewers y reproducciones
let seriesTrendig2=[
    {nombre:"The witcher",temporadas:3,totalViewers:"8000000",totalReprods:"25000000"},
    {nombre:"stranger Things",temporadas:4,totalViewers:"12000000",totalReprods:"4000000"},
    {nombre:"The Boys",temporadas:3,totalViewers:"7000000",totalReprods:"22000000"},
    {nombre:"Loki",temporadas:2,totalViewers:"9000000",totalReprods:"3000000"},
    {nombre:"Succession",temporadas:4,totalViewers:"6000000",totalReprods:"18000000"},
    {nombre:"The witcher Dead",temporadas:16,totalViewers:"16000000",totalReprods:"36000000"}
];
//Usando forEach para recorrer cada serie y calcular la calificacion
seriesTrendig2.forEach((serie,indix)=>{
    let calificacion=(serie.reproducciones/serie.viewers).toFixed(2);
    //Calcula la calificacion y la redondea a 2 decimales
console.log(`serie: ${indix+1}:`);
console.log(`Nombre: ${serie.nombre}`);
console.log(`Tempodaras: ${serie.temporadas}`);
console.log(`Viewers: ${serie.viewers}`);
console.log(`reproducciones: ${serie.reproducciones}`);
console.log(`calificacion: ${calificacion}`);
//Muestra la calificacion
console.log(`---------------------------`);
});
//Usando Filter para filtrar, y map para transformar la informacion
//Lista de series que queremos verificar
let seriesDeseadas=["The walking dead","The Boys","Loki"];
//Usando map e includes para filtrar y obtener los nombres de series con 3 temporadas
let seriesConTresTemporadas=seriesTrendig2
.filter(serie=>serie.temporadas<=3)
//filtramos las series que tienen 3 temporadas
.map(serie=>serie.nombre)
//Obtenemos solo los nombres de esas series
.filter(nombre=>seriesDeseadas.includes(nombre));
//Filtramos las que estan en la lista de series deseadas
//Mostrar los resultados
console.log("series con 3 temporadas que estan en la lista deseada:");
console.log(seriesConTresTemporadas);