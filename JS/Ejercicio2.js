// undifined CUANDO UNA VARIEBLE ES CR4EADO PERO NO INCIALISADA (null)
console.warn("--- Tipo de dato UNDIFINED")
let cliente;
console.log(`El cliente es: ${(cliente)}`);
console.log(`El tipo de dato de la bvariable cliente es: ${typeof(cliente)} ` );

cliente="Juan Romero"
console.log(`El cliente es: $(cliente)`);
console.log(`El tipo de dato de la variable cliente es:  ${typeof(cliente)}`);

cliente= 19227
console.log(`El clientre es: $(cliente) `)
console.log(`El tipo de dato de la variable cliente es  ${typeof(cliente)}`);

console.log(`El cliente a realizado `);


//bolean-boleanos- TRUE/FALSE 

console.warn("---Tipo de dato : BOOLEAN (boleano - true/false)");
let esPremium="No lo se";
console.log(`¿Es el cliente premium?  ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}` );

console.log("Asignando el valor true a la variable.")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable.")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log(`¿Es el cliente Premium? : ${esPremium}` );
console.log("Cambiando el valor de esPremium a false")
esPremium=0;

if (esPremium)
    console.log("El cliente pago por usar su sevicio:")
else
console.log("El cliente recibe los sevicios gratuitos:")


// numeros 
var cantidad;
const costo_producto= 10.50
let saldo_cuenta=2500.0
let monto_transaccion;

console.warn("--- Tipo de dato - NUMBER (Numeros, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta} Tipo de dato= ${typeof(saldo_cuenta)}`);
cantidad=0;
console.log(`Has elegido comprar ${(cantidad)} de productos`);
console.log(`El importe total de la compra es:  ${(cantidad, costo_producto)}`)
saldo_cuenta=saldo_cuenta- (cantidad,costo_producto);
console.log(`Tu nuevo saldo es de : ${saldo_cuenta} ` )

monto_transaccion=2500;
console.log(`Tu bono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta,monto_transaccion}` );


//STRING cadena de crarcteres 
const alumno = "Brandon Leon Cabrera"
let producto;


console.warn("--- Tipo de dato - STRING  (Cadeda de caracteres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);

//inicialisamos el valor de la variable producto

producto= "MONITOR 20\" FULL HD"
console.log(`El nombre del PRODUCTO es: ${typeof(producto)}`);

//manipulando los string 

console.log(`Mas adelante podre transformar el contenido de los STRING  usando los metodos y funciones especidficas, como convertir su valor amayuscula: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minusculas; ${producto} => ${producto.toLowerCase()}`);

// 5. BIGINT (numero de dimensiones de mayor amplitud )
console.warn("--- Tipo de Dato -BIGINT (Numero amplio)");
const numeroGrande  = 1234567890
const numeroGrande2 = 12345678901234567890
let numeroGrande3 = 123456789012345678901234567890
let numeroGrande4 = 1234567890123456789012345678901234567890

console.log(`El primer experimento de un numero grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es : ${typeof(numeroGrande)}`);
console.log(`El segundo experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es : ${typeof(numeroGrande2)}`);
console.log(`El tercer experimento de un numero grande es: ${numeroGrande3}, que NO es soportado por NUMBER, y su tipo de dato es : ${typeof(numeroGrande3)}`);
console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4}, que NO es soportado por NUMBER, y su tipo de dato es : ${typeof(numeroGrande4)}`);


numeroGrande3= BigInt(123456789012345678901234567890);
console.log(`El quinto experimento de un numero grande es: ${numeroGrande3}, que ya  fue convertido a BigInt, y su tipo de dato es : ${typeof(numeroGrande3)}`);

numeroGrande4= BigInt(1234567890123456789012345678901234567890);
console.log(`El sexto experimento de un numero grande es: ${numeroGrande4}, que ya  fue convertido a BigInt, y su tipo de dato es : ${typeof(numeroGrande4)}`);


//¿Se puden realizar operaciones matematicas entre un NUMBER y un BOGINT?

const numero = 129;
console.log(`Intendando realizar la suma de: numero + numeroGrande3, el resultado es :  ${BigInt(numero) + numeroGrande3}`)

// 6. Symbol 
console.warn("---Tipo de dato Symbol");
const numero1= 5;
const numero2=5.0;
const numero3 = "5";
const numero4= "5.0";
const numero5 =Symbol(5)
const numero6= Symbol(5)
const numero7= Symbol(5.0);
const numero8 =Symbol("5");
const numero9=Symbol(5.0);


//Pruebas comparativas 

console.log("Es 5 igual a 5.0?")
if(numero1==numero2)
    console.log("Se comparo numero1 con numero2, dterminando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero2, determinando que NO tienen el mismo valor")


console.log("Es 5 = a \"5\"?")
if(numero1==numero3)
    console.log("Se comparo numero1 con numero3, dterminando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero2, determinando que NO tienen el mismo valor")
////
console.log("Es 5 === \"5\"")
if(numero1===numero3)// Estructamente igual (Equidad) mismo valor, mismo dato
    console.log("Se comparo numero1 con numero2, dterminando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero2, determinando que tienen el mismo valor pero NO el mismo tipo de dato")

////
console.log("Es 5 = a \"5.0\"")
if(numero1==numero4)// Estructamente igual (Equidad) mismo valor, mismo dato
    console.log("Se comparo numero1 con numero2, dterminando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero2, determinando que tienen el mismo valor pero NO el mismo tipo de dato")

////Symbol
console.log(`¿Es 5 === Symbol(5) , antes de compararlos utilizamos que tipo de dato son : siendo numero1 del tipo de dato : ${typeof(numero1)} y numero5 del tipo ${typeof(numero5)}?`)
if (numero1===numero5)
    console.log("Se comparo numero1 con numero5, dterminando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor pero NO el mismo tipo de dato")
///
console.log(`¿Es 5 === Symbol(\"5\") , antes de compararlos utilizamos que tipo de dato son : siendo numero1 del tipo de dato : ${typeof(numero1)} y numero5 del tipo ${typeof(numero8)}?`)
if (numero1===numero8)
    console.log("Se comparo numero1 con numero8, dterminando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero8, determinando que tienen el mismo valor pero NO el mismo tipo de dato")
///
console.log(`¿Es 5 === Symbol(5.0) , antes de compararlos utilizamos que tipo de dato son : siendo numero1 del tipo de dato : ${typeof(numero1)} y numero9 del tipo ${typeof(numero9)}?`)
if (numero1===numero9)
    console.log("Se comparo numero1 con numero9, dterminando que tienen el mismo valor. ")
else
console.log("Se comparo numero1 con numero9, determinando que tienen el mismo valor pero NO el mismo tipo de dato")
////
console.log(`¿Es 5 === Symbol(5) , antes de compararlos utilizamos que tipo de dato son : siendo numero1 del tipo de dato : ${typeof(numero5)} y numero9 del tipo ${typeof(numero6)}?`)
if (numero5===numero6)
    console.log("Se comparo numero1 con numero6, dterminando que tienen el mismo valor. ")
else
console.log("Se comparo numero5 con numero6,es la condicion symbol lo que lo hace unico ")
////

// 7. NULL 
console.warn("Tipo de dato NULL (Nulo o vacio)");
//El tipo de dato malo se asigna cuando el sistema o el usuario saalen de la variabl pero prefiern dejarlo vacio, bajao su conacentimiento, a diferencia de DEFINED que su valor es desconocido

let nobreUsuario = null;
let passwordUsuario= null;
let generoUusuario = null;
let estatusRelacionSentimental = null;
let fecha_UltimoPost;

//Supongamos que estqamos  programando un face social, tipo Fcaebook en la que parte de la informacion se publicara en el perfil del usuario 
//Si el usuario no ha iniciado sesion ene el dispositivo mobiol o en la apliccion we, puede djearcontenido e acceso publico y no existaira informacion para entrar 
//En la HU que el usuasrio deseee logearse debra ingresar su numero de telefono y un acontraseña 
//Supongamos que el usuario : Abril con correo electronico aguzm347@gmail desea ingresar con su contraseña 12345

nombreUsuario= "Brandon Leon"
passwordUsuario="pas123"

//en este momento de ejecucion del sisitema no sabemos su genero, ni su estatus de relacion sentimental 

console.log(`El usuario: ${nobreUsuario} esta intentando logearse con una contraseña de ${passwordUsuario}`);

//Lo que prosigue es que el sisitema contrajera los datos ingresado con la base de datos y en caso de que los datos sean correctos comensara la sesion en la plataforma actualizada 

generoUusuario="M"
estatusRelacionSentimental=null

console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener accesoa  su información de perfil podemos deducir que es del género ${generoUusuario} y que su estatus de relación es ${estatusRelacionSentimental} y su última publicación la realizó el: ${fecha_UltimoPost}`)

//comporando nulll vs undefined
//undefined y null tienen el mismo valor ,no tienen el m ismo tipo de dato
console.log("comparacion de la equidad entre undefined y null:");

console.log(
    fecha_UltimoPost == estatusRelacionSentimental ?
       "ambas variables tienen el  mismo valor":
        "las variables no tienen el mismo valor");

console.log("comparacion de la equidad entre undefined y null:");

console.log(fecha_UltimoPost === estatusRelacionSentimental ?
"ambas variables tienen el  mismo valor y el mismo dato":
"las variables  tienen el mismo valor,pero no el mismo dato");