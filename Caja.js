const listaDePedidos = [];

function agregarPedido(nombre, precio, callback = () => {}) {
    setTimeout(() => {
        if (!nombre || typeof precio !== 'number' || precio <= 0) {
            if (typeof callback === 'function') {
                return callback("Pedido cancelado: Datos inválidos.", null);
            }
            return;
        }

        const pedido = { producto: nombre, precio: precio };
        listaDePedidos.push(pedido);

        if (typeof callback === 'function') {
            callback(null, { mensaje: "Pedido listo", pedido });
        }
    }, 5000);
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
