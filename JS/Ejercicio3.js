// Repaso de objetos 
const bg = "linear-gradient(11deg, rgb(2,0,36) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console =`background:${bg}; color:white; border-radius:6px; padding:4px; font-size:1.0rem;`;
console.warn("Practica 05: Repaso de Objetos en JavaScript");
console.log("%c1.- Variables Independientes", style_console);

// Variables independientes 
let producto_nombre = "computadora ASUS gamer laptop 17*";
let producto_marca = "ASUS";
let producto_modelo = "TUF 17";
let producto_precio = 15749.50;
let producto_disponibilidad = true;
let producto_SKU = Symbol("TUF70W-HK221W");
let producto_stock = 15;
let producto_Imagen = null; // Cambiado a 'null'
let producto_Barcode; // Cambiado el nombre a 'Barcode'
let producto_categoria = ["ELECTRONICOS", "Computación", "Gaming", "Promociones BUEN FIN", "Mejor Valorados"];

// Accedemos a los valores de las características del producto de la marca de manera independiente 
console.log(`Los datos del producto son: 
Nombre: ${producto_nombre}, Tipo de dato: ${typeof(producto_nombre)} 
Marca: ${producto_marca}, Tipo de dato: ${typeof(producto_marca)} 
Modelo: ${producto_modelo}, Tipo de dato: ${typeof(producto_modelo)} 
Precio: ${producto_precio}, Tipo de dato: ${typeof(producto_precio)} 
Disponibilidad: ${producto_disponibilidad}, Tipo de dato: ${typeof(producto_disponibilidad)} 
SKU: ${producto_SKU.toString()}, Tipo de dato: ${typeof(producto_SKU)} 
Stock: ${producto_stock}, Tipo de dato: ${typeof(producto_stock)} 
Imagen: ${producto_Imagen}, Tipo de dato: ${typeof(producto_Imagen)} 
Barcode: ${producto_Barcode}, Tipo de dato: ${typeof(producto_Barcode)} 
Categoría: ${producto_categoria}, Tipo de dato: ${typeof(producto_categoria)}`);

// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objeto ", style_console);

    let Producto=
    {
        ID:1856,
        Nombre:"Tenis Deportivos",
        Marca:"Nike",
        Modelo:"Jordan '24",
        Precio: 3326.25,
        Disponibilidad: false,
        Stock: 0,
        Sku: "D25485-612",
        Imagen: "../assets/Products/sneakers/JORDAN.png",
        Barcode:null,
        Categorias:["Deportivos","Juvenil"]
    }
    //Ahora leamos el objeto completo
    console.table(Producto)
    // Para accceder a  las propiedades del objeto utilizamos un "." y el noombre de la propiedad a leer 
    console.log("accediendo a propiedades especificas del producto")
    console.log(`Nombre completo del producto${Producto.Nombre} 
        \n Marca del producto ${Producto.Marca} \n Modelo del producto: ${Producto.Modelo} \n Precio del producto ${Producto.Precio} 'n Disponibilidad del producto ${Producto.Disponibilidad}\n Stock del producto ${Producto.Stock} \n Sku del producto ${Producto.Sku} \n Barcode del producto ${Producto.Barcode} \n Categoria del prodcuto ${Producto.Categorias}`)
        if(Producto.Disponibilidad == 0)
            console.log('Estatus:Agotado')
        else
        console.log(`Estatus: ${Producto_Stock} unidades disponibles`)
        
        let Producto2 = {
            Clave: 316,
            Nombre: "Lentes para sol",
            Marca: "Oakley",
            Modelo: "QNTM kato",
            Precio: 6829.00,
            Disponibilidad: true,
            Stock: 5,
            SKU: "DO9481D-0356",
            Imagen: "../assets/Products/sungglasses/katoRed.png",
            Barcode: 888392491626,
            Categorias: ["Deportes", "Lentes", "Nombre", "Accesorios"]
        };
        
        let comprador = {
            Clave: 3216,
            Nombre: "Marcos",
            Apellido: "Rios",
            Tipo: "Frecuente",
            correo: "mrcojdr25@gmail.com",
            Pais_Origen: "México",
            Saldo: 140000.00
        };
        
        let Pedido = {
            id:3456,
            Producto_clave: 316,
            comprador_clave: 3216,
            cantidad: 2,
            Estatus: "Carrito de compras",
            TipoPago: "Tarjeta"
        };
        console.log ("%c3.- Destructuramiento de datos",style_console)
        // Calcular el costo de la compra y verificar el saldo
        let Precio = Producto2.Precio;
        let Cantidad = Pedido.cantidad;
        let SaldoActual = comprador.Saldo;
        
        let Costo_Compra = Precio * Cantidad;
        console.log(`El cliente ha agregado a su carrito de compras ${Cantidad} unidades, con un costo total de: ${Costo_Compra}`);
        
        if (Costo_Compra <= SaldoActual) {
            console.log("El cliente tiene saldo suficiente");
        } else {
            console.log("El cliente no tiene saldo suficiente");
        }        
        //Actualizar el valor de los defaultTypeResolver.
        console.log ("%c4.- Actualización de los valores de las propiedades de un objeto",style_console)

        console.log(`El objeto actualmente tiene los siguients valores: `)
        console.log(JSON.stringify( Producto2,null,2))
        console.log (`Por cuestiones de infraccion el costo del producto ha cambiado y debe de ser actualizado... de &6,829.00 a 6915.00`)
        Producto2.Precio=6915.00;
        console.log("Los nuevos valores del producto son :")
        console.log(Producto2)

        // ¿Puedo cambiar no solo el valor sino tambien el tipo de dato de un objeto en JS?
        console.log("----------------------------------------------------")
        console.log("El objeto tiene los actualmente los siguientes valores")
        let tipoDisponibilidad= typeof(Producto2.Disponibilidad)
        console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
        console.log(JSON.stringify(Producto2,null,2))
        Producto2.Disponibilidad= "si"
        let nuevoTipoDisponibilidad =typeof(Producto2.Disponibilidad)
        console.log(Producto2)
        console.log(`El nuevo tipo de dato de la disponibilidad es: ${typeof(nuevoTipoDisponibilidad)}`)
        //Agregar nuevas propiedades al objeto

        console.log("%c5.- Agregar nuevas propiedades al objeto", style_console);
        // para agregar una nueva prpiedad utlizaremos el nombre del objeto los corchetes [] y la nueva propiedad on su valor pordefecto.
        console.log("Los datos actuales del comprador son:")
        console.log(comprador)
        comprador['Direccion'] = "Av. Benito Juárez NO. 1525, Interior 4D, Xicotepec de Júarez Puebla, México "
        comprador['Tipo']= "Nuevo Cliente"
        comprador['ActividadReciente']=true
        comprador['TotalCompras']=3516.25
        console.log("Despues de haber agregado la spropiedades Direccion,Tipo, ActividadReciente y TotalCompras ....")
        console.table(comprador)

        //Eliminar propiedades existentes de un Objeto
        console.log("%c6.- Eliminar  propiedades existentes de un objeto", style_console);
        console.log("La estructura y valores del objeto PEDIDO son previos a la modificación :")
        console.table(Pedido)
        delete Pedido.TipoPago;
        console.table(Pedido)


        console.log("Despues de la modificación...")
        console.table(Pedido)
        console.log("%c7.- Metodos para controlar la mutabilidad de los objetos, congelacion (FREEZE)",style_console)

        // si deseamos no permitir que los objetos sean modificados ni en las estructuras, ni en el valor, utilizaremos el metodo FREEZE(Congelar)  
        console.log("La estructura actual del objeto COMPRADOR ES: ")
        console.table(comprador)
        Object.freeze(comprador)
        //Intetamos argegar, como eliminar o modificar los valores de sus propiedades 
        comprador.fechaUltimaCompra="05-09-2024"
        delete comprador.Tipo
        comprador.Direccion="calle 16 de septiembre #102,col manantiales, Huachinango, Puebla  ";
        console.log("verificamos si se ralizaron los cambios en el objeto COMPRADOR")
        console.table(comprador)
        console.log("%c8.- Metodos para controlar la mutabilidad de los objetos, sellando (SEAl)",style_console);
        // 
        console.log("Objeto antes de ser modificado: ")
        console.log("Objetos antes de ser modificados: ")
        console.table(Pedido)  
        //Sellamos al objeto
        Object.seal(Pedido)
        //Intetamos modificar su estructura 
        Pedido['FechaPedido']="25/09/2024 :11:05:03"
        delete Pedido['cantidad']
        console.log("Verificacion si se realizaron los cambios en el objeto PEDIDO")
        console.table(Pedido)
        // Ahora intentamos modificar el valor de las propiedades 
        Pedido.Cantidad = 5
        console.log(`verifiacamos si se realizaron los cambios en el Objeto PEDIDO:`)
        console.table(Pedido)
        // deestructuracion de objetos
        console.log("%c9.- Destructuracion de 2 o mas Objetos ", style_console)
        let {Precio: productoPrecio, Marca:productoMarca}= Producto
        let {correo: clienteCorreo, Pais_Origen: clientePais, Saldo: clienteSaldo, Tipo: clienteTipo}=comprador


        // 
        if(productoPrecio>2000){
            productoPrecio="Caro"
        }
        else{
            productoPrecio="Barato"
        }
        if(clienteSaldo>0){
            clienteSaldo="A favor"
        } else if(clienteSaldo<0){
            clienteSaldo="EN contra"
        } else {
            clienteSaldo="sin deuda"
        }
        //
        let clienteNivel="Premium";

        if(clienteTipo=="Premium"){
            clienteNivel=1
        } 
        if (clienteTipo=="Freenium"){
            clienteTipo=2
        } else {
            clienteTipo=3
        }
        if (clientePais=="México"){
            clientePais=  "Nacional"
        } else {
            clientePais="Extranjero"
        }
        let clientePromocion={clienteCorreo,clientePais,clienteNivel,clienteSaldo,productoMarca,productoPrecio}

        //El nuevo objetoque creamos seria un ejemplo de la informacion que deberiamos enviar al area de marketoing para la promocion del nuevo producto
        console.table(clientePromocion)
    

        // OPERACIONES SOBRE OBJETOS 
        console.log("%c10.- Unión de objetos usando el metodo de asignacion (ASSING)",style_console)

        console.log("Imprimimos la estructura y valores del obejt PRODUCTO")
        console.table(Producto);
        // Suponemos que el usuario ya realizo el pago el pedido que convertira en una venta que requiera informacion de ambos objetos 

        const Venta=Object.assign(Producto,Pedido)
        console.log("Consultamos este nuevo Objeto Venta ")
        console.table(Venta)
        