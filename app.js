const readline = require("readline");
const cocina = require("./Cocina");
const cliente = require("./Cliente");
const caja = require("./Caja");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

cocina.agregarProductos("Café", 35, 10);
cocina.agregarProductos("Té", 25, 8);
cocina.agregarProductos("Pan", 20, 12);

function preguntar(texto) {
  return new Promise((resolver) => terminal.question(texto, resolver));
}

function mostrarMenuPrincipal() {
  console.log(`
1. Ver productos
2. Agregar producto
3. Editar producto
4. Eliminar producto
5. Crear pedido
6. Ver pedidos y total
0. Salir
`);
}

async function iniciar() {
  let opcion;

  do {
    mostrarMenuPrincipal();
    opcion = await preguntar("Elige una opción: ");

    switch (opcion) {
      case "1":
        cliente.consultarmenu(cocina.listarProductos());
        break;

      case "2": {
        const nombre = await preguntar("Nombre: ");
        const precio = Number(await preguntar("Precio: "));
        const cantidad = Number(await preguntar("Cantidad: "));
        console.log(cocina.agregarProductos(nombre, precio, cantidad));
        break;
      }

      case "3": {
        const id = Number(await preguntar("ID del producto: "));
        const nombre = await preguntar("Nuevo nombre: ");
        const precio = Number(await preguntar("Nuevo precio: "));
        const cantidad = Number(await preguntar("Nueva cantidad: "));
        console.log(cocina.editarProductos(id, nombre, precio, cantidad));
        break;
      }

      case "4": {
        const id = Number(await preguntar("ID del producto: "));
        console.log(cocina.eliminarProductos(id));
        break;
      }

      case "5": {
        const nombreCliente = await preguntar("Nombre del cliente: ");
        const idProducto = Number(await preguntar("ID del producto: "));
        const pedido = cliente.crearPedido(
          nombreCliente,
          idProducto,
          cocina.listarProductos()
        );

        if (!pedido) {
          console.log("Producto no encontrado.");
          break;
        }

        caja.agregarPedido(pedido.producto, pedido.precio);
        console.log("Pedido creado correctamente.");
        break;
      }

      case "6":
        console.log(cliente.listarPedidos());
        console.log(`Total: $${caja.calcularTotal().toFixed(2)}`);
        break;

      case "0":
        terminal.close();
        break;

      default:
        console.log("Opción no válida.");
    }
  } while (opcion !== "0");
}

iniciar();
