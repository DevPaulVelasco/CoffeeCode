const pedidos = [];

function consultarmenu(menu = []) {
  if (!menu.length) {
    console.log("No hay productos disponibles.");
    return;
  }

  console.log(`
==================================================
            MENÚ DE LA CAFETERÍA 
==================================================
ID    | PRODUCTO                     | PRECIO
--------------------------------------------------`);

  menu.forEach((prod) => {
    const idFormateado = prod.id.toString().padEnd(5, " ");
    const nombreFormateado = prod.nombre.padEnd(28, " ");
    const precioFormateado = `$${prod.precio.toFixed(2)}`;

    console.log(`${idFormateado}| ${nombreFormateado}| ${precioFormateado}`);
  });

  console.log(`==================================================`);
}

function crearPedido(cliente, productoId, menu = []) {
  const producto = menu.find((prod) => prod.id === productoId);

  if (!producto) {
    return null;
  }

  const pedido = {
    idPedido: pedidos.length + 1,
    cliente: cliente,
    producto: producto.nombre,
    precio: producto.precio,
    estado: "Pedido recibido"
  };

  pedidos.push(pedido);
  procesarEstadoPedido(pedido);
  return pedido;
}

function listarPedidos() {
  return pedidos;
}

function mostrarPromociones(menu = []) {
  console.log(`\nPROMOCIONES DEL DÍA (10%)`);

  if (!menu.length) {
    console.log("No hay productos disponibles.");
    return;
  }

  const promociones = menu.map((prod) => ({
    nombre: prod.nombre,
    precioOferta: prod.precio * 0.9
  }));

  promociones.forEach((promo) => {
    console.log(`• ${promo.nombre}: Oferta a $${promo.precioOferta.toFixed(2)}`);
  });
}

function mostrarProductosDisponibles(menu = []) {
  console.log(`\nPRODUCTOS DISPONIBLES`);

  if (!menu.length) {
    console.log("No hay productos disponibles.");
    return;
  }

  const listaNombres = menu.map((prod) => prod.nombre);
  console.log(`Disponibles: ${listaNombres.join(", ")}`);
}

function procesarEstadoPedido(pedido) {
  if (!pedido) {
    return;
  }

  console.log(`\n[ESTADO] Cliente: ${pedido.cliente} | Estado: ${pedido.estado}`);

  setTimeout(() => {
    if (pedido.estado === "Cancelado" || pedido.estado === "Pedido entregado") {
      return;
    }

    pedido.estado = "Preparando pedido";
    console.log(`[ESTADO] Cliente: ${pedido.cliente} | Estado: ${pedido.estado} (${pedido.producto})`);

    setTimeout(() => {
      if (pedido.estado === "Cancelado" || pedido.estado === "Pedido entregado") {
        return;
      }

      pedido.estado = "Empacando pedido";
      console.log(`[ESTADO] Cliente: ${pedido.cliente} | Estado: ${pedido.estado} (${pedido.producto})`);

      setTimeout(() => {
        if (pedido.estado === "Cancelado") {
          return;
        }

        pedido.estado = "Pedido entregado";
        console.log(`[ESTADO] Cliente: ${pedido.cliente} | Estado: ${pedido.estado} (${pedido.producto})`);
      }, 3000);
    }, 4000);
  }, 2000);
}

function cancelarPedido(idPedido) {
  const pedido = pedidos.find((p) => p.idPedido === idPedido);

  if (pedido && pedido.estado !== "Pedido entregado") {
    pedido.estado = "Cancelado";
    console.log(`\n[CANCELACIÓN] El pedido #${idPedido} de ${pedido.cliente} ha sido cancelado.`);
    return true;
  }

  console.log(`\n[CANCELACIÓN] No se puede cancelar el pedido #${idPedido}.`);
  return false;
}

module.exports = {
  consultarmenu,
  crearPedido,
  listarPedidos,
  mostrarPromociones,
  mostrarProductosDisponibles,
  cancelarPedido
};
 
 