// repaso de objetos 
const bg = "llenar gradient (11deg, rgba(2,0,36,1) 0%, rgba(9,121,1) 33%)";
console.warn("Practica 05: Repaso de Objetos en JavaScript");

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

    //Ahora lo declaramos como un OBJETO
    console.log();
    let Producto=
    {
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

        let Producto2 =
        {
            Clave:316,
            Nombre:"Lentes para sol",
            Marca: "Oakley",
            Modelo:"QNTM kato",
            Precio: 6829.00,
            Disponibilidad: true,
            Stock: 5,
            SKU:"DO9481D-0356",
            Imagen: "../assets/Products/sungglasses/katoRed.png",
            Barcode:888392491626,
            Categorias:["Deportes","Lentes","Nombre","Accesorios"]
        }
        let comprador ={
            Clave :3216,
            Nombre :"Marcos",
            Apellido : "Rios ",
            Tipo : "Frecuente",
            correo: "mrcojdr25@gmail.com",
            Pais_Origen : "México",
            Saldo : 140000.00
        }
        let Pedido={
            Producto_clave:316,
            comprador_clave: 3216,
            cantidad: 2,
            Estatus: "Carrito de compras"
        }
    // en base a los tres objetos neccesitamos calcular el costo de la compra y si alcanza con su saldo para comprar con su saldo a favor 
    let {Precio:Producto_Precio}=Producto2
    let {Pedido_Cantidad : Cantidad}=   Pedido
    let { Saldo_Actual : Saldo}=comprador

    console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de ${(Pedido_Cantidad*Producto_Precio)}   `)