//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(200,150,360,1) 0%, rgba(270,129,12,1) 33%, rgba(255,19,260,1) 90%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`


//Personalización de las salidas a consola

console.warn("Práctica 07: Arreglos en Java Script")

console.log("%c1.-Condicionales - Si/Entonces ... (IF)", style_console)

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso 
let fechaActual=new Date();
//let fechaActual=new Date(2025,4,30);
//console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`)
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`)

//Y si la necesitamos en formato local(?)

const fechaLocalMX= fechaActual.toLocaleString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

console.log(`en formato local (México): ${fechaLocalMX}`)

//Si es antes de las doce saluda con buenos días

if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es ${fechaLocalMX}`)

//Existe un extensor de la sentencia if(Sí) que es else (En Caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año`)
else
    console.log(`Estas en la segunda mitad del año.`)


//que pasa si la validación tiene varias operaciones 
const anio= fechaActual.getFullYear()
let inicioPrimavera= new Date(anio, 2, 21);
let inicioVerano= new Date(anio, 5, 21);
let inicioOtonio= new Date(anio, 8, 23);
let inicioInvierno= new Date(anio, 11, 21);
let estacion;
let horarioVerano= false;

if(fechaActual>= inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la Floracion de muchas plantas...")
    console.log("Los dias son mas largos y las noches mas cortas...")
    console.log("Muchos animales despiertan de la inbernacion")
    console.log()
    estacion="Primavera" 
    horarioVerano=true; 

}
else if(fechaActual>= inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en VERANO...")
    console.log("En esta temporada los abundan los dias sopleados y calurosos...")
    console.log("En esta tem,porada el indioce de turismo vacacional sube...")
    console.log("Mucha gente busca realizar actividades al aire...")
    console.log()
    estacion="Verano" 
    horarioVerano=true;

}
else if(fechaActual>= inicioOtonio && fechaActual< inicioInvierno)
    {
        console.log("Estamos en OTOÑO..")
        console.log("Los arboles suleln cambiar de follaje...")
        console.log("se registran temperaturas mas templadas...")
        console.log("Los animales comienzan con la recoleccion de alimento y preparan sus espacios para la inbernacion, incluso algunas aves migran...")
        console.log()
        estacion="Otono" 
        horarioVerano=true;
    
    }
else
{
    console.log("Estamos en Invierno...")
    console.log("En esta temporada los dias son mas cortos y las ñocxhes mas largas...")
    console.log("En algunas regiones sule nevar ...")
    console.log("Dado las bajas temperaturas,se recomienda abrigarse")
    console.log()
    estacion="Invierno" 
    horarioVerano=false;
}

console.log("%c2.-Oporador Ternario (validacióncumple:no_cumple)", style_console)
//En javaScript existe una operacion simplificada que valida si una condicion se cumple o no, ty que hacer en cada caso 

const edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;

let evaluarMayoriaEdad = (edad) =>
    edad>=18 ? "Eres mayor de edad." : "No eres mayor de edad."

console.log("Evaluando la mayoria de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar qiue la mayoria de edad varia en cada pais por cuestiones legale, por lo que debemos considerar un segundo parametro en la evaluacion.
evaluarMayoriaEdad = (edad,pais)=> 
    (edad>=18 && pais==="MX")? `En ${pais} eres mayor de edad `:`En ${pais} NO eres mayor de edad `;

console.log("Evaluando la mayoria de edad de una persona en Mexico...")
console.log(evaluarMayoriaEdad(edadPersona,"MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona,"US"));

console.log("%c3.-SWICH - CASE (Eleccion por valor definido) ", style_console)

//calculando tu generacion en base a tu edad 
let anioNacimiento = 2003;

function determinarGeneracion(anio) {
    switch (true) {
        case (anio < 1968):
            return "Baby Boomers";
        case (anio >= 1968 && anio <= 1980):
            return "Generación X";
        case (anio > 1980 && anio <= 1993):
            return "Generación Y (Millennials)";
        case (anio > 1993 && anio <= 2010):
            return "Generación Z";
        default:
            return "Generación Alpha o posterior";
    }
}

console.log(determinarGeneracion(anioNacimiento));

console.log("%c4.Manejo de Excepciones  (TRY / CATCH) ", style_console)

//En algunasocasiones existiran errores que no son culpas del programa,si no del usuario.la red,el so e incluuso del programa, o incluso de un middleware.pero que si duda debemos controlar para evitar las fallas de ejecucion.
 
console.log("Intentamos dividir el resultado es: ")
try{//intenta
let result= 0/10 //dividri un entero entre 0
console.log(result)
}
catch(error)
{
    console.log("ocurrio un error"+error.message);
}
 
console.log("Intentamos dividir el resultado es:")
try{//intenta
let result= 10/0 //dividri un entero entre 0
console.log(result)
}
catch(error)
{
    console.log("ocurrio un error"+error.message);
}
 
console.log("Intentamos dividir \"a\"/0 el resultado es: ")
try{//intenta
let result= "a"/0 //dividri un entero entre 0
console.log(result)
}
catch(error)
{
    console.log("ocurrio un error"+error.message);
}
 
console.log("Intentamos dividir ")
try{//intenta
let result= a / 10; //dividri un entero entre 0
console.log(result)
}
catch(error)
{
    console.log("ocurrio un error"+error.message);
}

 
console.log("Intentamos dividir :el valor de la variable x / entre el valor de la variable y,el resultado es: ")
try{//intenta
let x=8,y=2,result=x/y; //dividir dos variables definidas
console.log(result)
}
catch(error)
{
    console.log("ocurrio un error"+error.message);
}

console.log("%c5.- Control de ciclos (BREAK / CONTINUA)", style_console);

//En algunas oacasiones será importante detener un ciclo de manera abrupta para controlar casos especiales de un ciclo 

console.log("Vamos a contar del 1 al 10..")
for(let num=1; num<=10; num++)
        console.log(num);

console.log("Ahora necesitamos que si llega al 7 para de contar ...suponinedo que solo por hoy es de mala suerte...")
for(let num=1; num<=10; num++)
        if(num==7)
            break;
        else
        console.log(num);

console.log("Ahora necesitamos que si llega al 7, te saltes ese número y continues")

        for(let num=1; num<=10; num++)
        {
            if(num==7){
                continue;
            }
               
            console.log(num);
        }
        
console.log("%c6.- Ciclo iterativo -(FOR)", style_console);
//Recorre de manera iterativa (i), de incremental o decremental

console.log("Los días de la semana son en orden ascendente son:")
let dias=["Domingo","Lunes", "Martes", "Miercoles", "Jueves","Viernes", "Sábado"]

for(let i=0; i<dias.length; i++){
    console.log(dias[i])
}
        

console.log("Ahora vamos a imprimir los meses del año en orden descendente...")
let meses=["Enero","Febrero", "Marzo", "Abril", "Mayo","Junio", "Agosto","Septiembre","Octubre", "Noviembre", "Diciembre"]
for(let i=11; i>=0; i--)
        {
            console.log(dias[i])
        }

console.log("%c7.- Ciclo condicional - (WHILE)", style_console);
//Estos ciclos (BUCLE) dependen de una condición para continuar ejecutándose

let finDeSemana=false;
let mensaje="";
let j=0;
//while(j<dias.length){
while(j<dias.length){
    switch(j){ //Usamos 'j' para que coincida con el índice
        case 0: 
            finDeSemana=true;
            mensaje="Domingo de tarea jajajaja"
            break;
        case 1:
            finDeSemana=false;
            mensaje="Lunes, noooo el peor día";
            break;
        case 2:
            finDeSemana=false;
            mensaje="Martes, pues ya que, a seguir chambeando";
            break;
        case 3:
            finDeSemana=false;
            mensaje="miercoles de hueva";
            break;
        case 4:
            finDeSemana=false;
            mensaje="jueves de racismo";
            break;
        case 5:
            finDeSemana=false;
            mensaje="al fin virnecito y el cuerpo lo sabe";
            break;
        case 6:
            finDeSemana=true;
            mensaje="Sábado de limpiar la casa";
            break;
    }

    //Imprimir todos los días
    //console.log(`Día ${j} ${dias[j]}`)
    //console.log(`Mensaje del día: ${mensaje}`);
    //j++;

    //Imprimir los días laborales
    if(!finDeSemana){
        console.log(`Día ${j} ${dias[j]}`)
        console.log(`Mensaje del día: ${mensaje}`);
    }
    j++;

    //Imprimir fin de semana
    //if(finDeSemana){
    //    console.log(`Día ${j} ${dias[j]}`)
    //    console.log(`Mensaje del día: ${mensaje}`);
    //}
    //j++; 
}






console.log("%c8.- Ciclo condicionales,que se ejecuta al menos una vez - (DO WHILE)", style_console);

let episodios = [
    "Episodio 1:  Malcomln  ",
    "Episodio 2: Drake and Josh",
    "Episodio 3: Heartopper",
    "Episodio 4: Nadie nos va a extrañar",
    "Episodio 5: The office"

];

let indice = 0;
let continuarViendo= true;//Esta variable simula la decision del usuario de continuar viendo


do {
    console.log(`Reproducciendo ${episodios[indice]}`);
    
    //simulamos la reproduccion del episodio
   indice++;

   //simulamos una pregunta al usuario si desea seguir viendo 

   if(indice< episodios.length){
    continuarViendo=confirm("¿Deseas continuar con el siguiente episodio ?");
   }else{
    continuarViendo=false;//cuando se acaba la lista de episodios 
   }
   }while(continuarViendo && indice<episodios.length);
console.log("fin de la reproduccion");

console.log("%c9.- Cliclos para recorrer elementos finitos- (FOR ... OF)", style_console);

let seriesTrending=[
    {nombre: "The Witcher",temporada:3, totalViewers: "1.5M",totalReprods:"3.0M"},
    {nombre: "Stranger Things",temporada:4, totalViewers: "6.5M",totalReprods:"10M"},
    {nombre: "The boys",temporada:3, totalViewers: "3.2M"},
    {nombre: "Loki",temporada:2,totalReprods:"250k"},
    {nombre: "Succession",temporada:4}
];

//usando for .. of para recorrer la lista
for (let serie of seriesTrending){
    console.log(`serie: ${serie.nombre}, Temporadas :${serie.temporada}`);
    
}
try{
    console.log(`la ultima serie leida fue :${serie.nombre}`);//no va a funcionar por la varia serie ya no existe ya que su alcance solo estuvo duranrte el ciclo 

}

catch(error)
{
    console.log("Mensaje de error: "+error.message)
}

console.log("%c10.- Cliclos para recorrer las propiedades de elementos finitos- (FOR ... IN)", style_console);

//usabdo for ..in para recorrer cada serie

for (let i in seriesTrending){
    console.log(`Serie ${parseInt(i)+ 1}:`);
    for (let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`)
    }
    console.log(`--------------------`);
}

console.log("%c11.- Cliclos interrumpidos para cada uno de los elementos del arreglo (FOR EACH)", style_console);

//Lista de series de tv trendings con temporadas,viewers y reproducciones 

let seriesTrending2 = [
    {nombre: "The witcher", temporada : 3, reproducciones : 80000000 , viewers : 250000000},
    {nombre: "Stranger Things", temporada: 4,reproducciones:1200000,viewers:400000},
    {nombre: "The boys", temporada: 3,reproducciones:7000000,viewers:22000000},
    {nombre: "Loki", temporada: 2,reproducciones:9000000,viewers:3000000},
    {nombre: "Succession", temporada: 4,reproducciones:6000000,viewers:1800000},
    {nombre: "The Walking Dead", temporada: 16,reproducciones:1600000,viewers:360000},
];

//usando fotEach para recorrer cadea serie y calcular la calificacion
seriesTrending2.forEach((serie, index)=>{
    let calificacion= (serie.reproducciones / serie.viewers).toFixed(2);//calcula la calificacion y la redondea a 2 decimales 
    console.log(`serie: ${index + 1}`);
    console.log(`Nombre: ${serie.nombre}`);
    console.log(`Temporadas: ${serie.temporada}`);
    console.log(`Viewers: ${serie.viewers}`);
    console.log(`Reproducciones: ${serie.reproducciones}`);
    console.log(`Calificacion: ${calificacion}`);
    console.log(`--------------------------`);
 

});


//Usando filter para filter , y map para transformar la informacion 
//lista de series que queremos verificar

let seriesDeseadas = ["The walking Dead","The boys","Loki"];

//usando map e incluso para filtar y obtener los nombres de series con 3 te,poradas 

let seriesConTresTemporadas = seriesTrending2
.filter(serie => serie.temporada<=3)//Filtramos las series que tienen 3 temnporadas
.map(serie => serie.nombre) 
.filter(nombre => seriesDeseadas.includes(nombre));//Filtramos las que estan en la lista de series deseadas


//mostrar los resuktados

console.log("series con 3 temporadas que estan en la lista deseada");
console.log(seriesConTresTemporadas);


  
