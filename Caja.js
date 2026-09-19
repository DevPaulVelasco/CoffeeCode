const listaDePedidos = [];

function agregarPedido(nombre, precio) {
    const pedido = { producto: nombre, precio: precio };
    listaDePedidos.push(pedido);
    return pedido;
}

function listarPedidos() {
    return listaDePedidos;
}

function calcularTotal() {
    return listaDePedidos.reduce((total, pedido) => total + pedido.precio, 0);
}

module.exports = {
    agregarPedido,
    listarPedidos,
    calcularTotal
};