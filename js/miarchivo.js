let total = 0;
const productos = [];


// clase de producto
class Producto {
  constructor(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = 0;
  }
  }

// instanciar objetos de producto y agregarlos al array
productos.push(new Producto("Vodka", 1000));
productos.push(new Producto("Gin", 1500));
productos.push(new Producto("Cerveza", 750));


// Funcion en javascript DOMcontentLoad = ejecuta el codigo, despues de que el HTML CARGA

// document.addEventListener('DOMContentLoad', () => {
// // todo lo que ponga aca adentro va a esperar que primero lea el HTML y luego el resto.
//   // crearProductos()
// });

function crearProductos(){
  const contenedorProductos = document.getElementById('container-productos');
  // metodos de array = forEach = por cada producto
  productos.forEach((pepito)=>{
    const hijo1 = document.createElement('div');
    hijo1.classList.add('productos')
  // inyectar el javascript en la estructura HTML = con la interpolacion
  hijo1.innerHTML = `
  <span>${pepito.nombre}</span>
  <p>Precio: ${pepito.precio}</p>
  <p>Cantidad :${pepito.cantidad}</p>
  `
  contenedorProductos.appendChild(hijo1);
  // El appenChild es decirle a contenedorProductos que va agregar HIJOS adentro de el mismo.
  })
}

crearProductos()










function saludar() {
  alert('Bienvenidos a LianBar, las mejores bebidas para vos!');
  let edad = prompt('Ingrese su edad');
  if (edad >= 18) {
    alert('Usted es mayor de edad, puede ingresar a la pagina');
    seleccionarBebidas(); // llama a la función seleccionarBebidas() si el usuario es mayor de edad
    metodoDePago(); // llama a la función metodoDePago() si el usuario es mayor de edad
  } else {
    alert('Lo siento, debe ser mayor de edad para ingresar a la tienda.');
    return; // detiene la ejecución del resto del código si el usuario es menor de edad
  }
}
  
 

function seleccionarBebidas (){
  let elegirBebidas = Number(prompt('¿Que bebida estas buscando? 1-Vodka $1000 2-Gin $1500 3-Cerveza $750'))
  while (elegirBebidas != 0) {
    switch (elegirBebidas) {
      case 1:
        productos[0].cantidad += Number(
          prompt("el producto seleccionado es Vodka, indique la cantidad")
        );
        total += productos[0].cantidad * productos[0].precio;
        break;
      case 2:
        productos[1].cantidad += Number(
          prompt("el producto seleccionado es Gin, indique la cantidad")
        );
        total += productos[1].cantidad * productos[1].precio;
        break;
      case 3:
        productos[2].cantidad += Number(
          prompt("el producto seleccionado es Cerveza, indique la cantidad")
        );
        total += productos[2].cantidad * productos[2].precio;
        break;
      default:
        break;
    }
    elegirBebidas = Number(
      prompt(
        "Desea seguir comprando o ingrese 0 para ir al carrito ¿Que bebida estas buscando? 1-Vodka $1000 2-Gin $1500 3-Cerveza $750"
      )
    );
  }
if (elegirBebidas == 0){
  alert('el total de la compra es de = $ ' + total)
}
}

function metodoDePago(){
  let porcentajeTotal= (total*10)/100;
  let totalConDescuento = total - porcentajeTotal;
  let metodoPago = prompt('¿Como desea pagar? Efectivo / Tarjeta de credito / Tarjeta de debito');
  if (metodoPago == "Efectivo" || metodoPago== "efectivo" || metodoPago == "EFECTIVO"){
    alert('Usted tiene un 10% de descuento en su compra, el total de la compra es de= ' + totalConDescuento);
  }
  else if ( metodoPago == 'tarjeta de credito' || metodoPago == 'TARJETA DE CREDITO' || metodoPago== 'Tarjeta de credito')
  {
  alert('Usted tiene 12 cuotas sin interes')
  }
  else if(metodoPago == 'Tarjeta de debito' || metodoPago == 'tarjeta de debito' || metodoPago == 'TARJETA DE DEBITO'){
    alert('Genial, gracias por tu compra.')
  }
  else {alert('Ingrese un metodo de pago valido')}
}




saludar()
