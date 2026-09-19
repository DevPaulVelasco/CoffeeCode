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


function crearPedido(cliente, productoId, menu) {
  const producto = menu.find(prod => prod.id === productoId);

  if (producto) {
    const pedido = {
      cliente: cliente,
      producto: producto.nombre,
      precio: producto.precio
    };

    pedidos.push(pedido);
    return pedido;
  }

  return null;
}


function listarPedidos() {
  return pedidos;
}

module.exports = {
  consultarmenu,
  crearPedido,
  listarPedidos
};