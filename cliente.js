 
const menu = [
  { id: 1, nombre: "Café", precio: 15 },
  { id: 2, nombre: "Jugo", precio: 30 },
  { id: 3, nombre: "Galletas", precio: 10 },
  { id: 4, nombre: "Pan", precio: 12 }
];


const pedidos = [];


function consultarmenu(menu) {
  console.log(`
==================================================
            MENÚ DE LA CAFETERÍA      
==================================================
ID    | PRODUCTO                     | PRECIO
--------------------------------------------------`);

  menu.forEach(prod => {
    const idFormateado = prod.id.toString().padEnd(5, " ");
    const nombreFormateado = prod.nombre.padEnd(28, " ");
    const precioFormateado = `$${prod.precio.toFixed(2)}`;

    console.log(`${idFormateado}| ${nombreFormateado}| ${precioFormateado}`);
  });

  console.log(`==================================================`);
}


function crearPedido(cliente, productoId) {
  const producto = menu.find(prod => prod.id === productoId);

  if (producto) {
    pedidos.push({ cliente: cliente, producto: producto.nombre, precio: producto.precio });
    console.log(`\n Pedido creado para ${cliente}: ${producto.nombre}`);
  } else {
    console.log("\n Producto no encontrado");
  }
}


function listarPedidos() {
  console.log(`
==================================================
               LISTA DE PEDIDOS               
==================================================`);

  if (pedidos.length === 0) {
    console.log("No hay pedidos registrados.");
  } else {
    pedidos.forEach(p => {
      console.log(`Cliente: ${p.cliente} | Producto: ${p.producto} | Total: $${p.precio.toFixed(2)}`);
    });
  }
  console.log(`==================================================`);
}


consultarmenu(menu);


crearPedido("Carlos", 1);
crearPedido("María", 3);  

listarPedidos();
