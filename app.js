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
7. Buscar producto
8. Filtrar productos
9. Ver promociones
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

        console.log("Buscando producto en el sistema...");

        // Simula la búsqueda en el sistema durante 2 segundos
        const pedido = await new Promise((resolver) => {
          setTimeout(() => {
            const resultado = cliente.crearPedido(
              nombreCliente,
              idProducto,
              cocina.listarProductos()
            );
            resolver(resultado);
          }, 2000); // 2 segundos de búsqueda
        }); 

        // Si no existe, muestra el mensaje tras los 2 segundos de espera
        if (!pedido) {
          console.log("Pedido cancelado: Producto no encontrado.");
          break;
        }

        console.log("Producto encontrado. Procesando pedido...");

        await new Promise((resolver) => {
          caja.agregarPedido(pedido.producto, pedido.precio, (error, respuesta) => {
            if (error) {
              console.log(error);
            } else {
              console.log(`${respuesta.mensaje}: ${respuesta.pedido.producto} para ${nombreCliente}`);
            }
            resolver();
          });
        });

        await new Promise((resolver) => setTimeout(resolver, 10000));

        break;
      }
     

      case "6":
        console.log(cliente.listarPedidos());
        console.log(`Subtotal: $${caja.calcularTotal().toFixed(2)}`);
        console.log(`Total con IVA: $${caja.calcularTotalIva().toFixed(2)}`);
        break;

      case "7": {
        const idProducto = Number(await preguntar("ID del producto: "));
        const producto = cocina.buscarProductoPorId(idProducto);

        if (!producto) {
          console.log("Producto no encontrado.");
          break;
        }

        console.log(producto);
        break;
      }

      case "8": {
        const precioMaximo = Number(await preguntar("Precio máximo: "));
        const productosFiltrados = cocina.filtrarProductosPorPrecio(precioMaximo);

        if (!productosFiltrados.length) {
          console.log("No hay productos con ese filtro.");
          break;
        }

        cliente.consultarmenu(productosFiltrados);
        break;
      }

      case "9":
        cliente.mostrarPromociones(cocina.listarProductos());
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