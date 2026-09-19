const listaDePedidos = [];
//prueba de commit

let totalAcumulado = 0;

function Agregarpedido(nombre, precio){
    listaDePedidos.push({producto: nombre, precio: precio});

    totalAcumulado += precio;

    console.log('Se agregó "${nombre}" con un precio de $${precio}');
    console.log('Lista de pedidos actual: ', listaDePedidos);
    console.log('Total acumulado: , $${totalAcumulado}');
    console.log('---------------------------------------');
    
}

Agregarpedido("Café Express", 35);
Agregarpedido("Agua", 10);
Agregarpedido("Jugo de Naranja", 45);

