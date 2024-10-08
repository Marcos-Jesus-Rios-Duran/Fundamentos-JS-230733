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