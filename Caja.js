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

function calcularTotalIva() {
    const subtotal = listaDePedidos.reduce(
        (total, pedido) => total + pedido.precio,
        0
    );

    return subtotal * 1.16;
}

module.exports = {
    agregarPedido,
    listarPedidos,
    calcularTotal,
    calcularTotalIva
};
