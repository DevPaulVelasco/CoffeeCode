 const productos = [];

function agregarProductos(nombre, precio, cantidad) {
  const producto = {
    id: productos.length + 1,
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
    disponible: true
  };

  productos.push(producto);
  return producto;
}

function listarProductos() {
  return productos;
}

function buscarProductoPorId(id) {
  return productos.find((producto) => producto.id === Number(id));
}

function filtrarProductos(condicion) {
  if (typeof condicion !== "function") {
    return [];
  }

  return productos.filter(condicion);
}

function filtrarProductosPorPrecio(precioMaximo) {
  const maximo = Number(precioMaximo);

  if (Number.isNaN(maximo)) {
    return [];
  }

  return productos.filter((producto) => producto.precio <= maximo);
}

function editarProductos(id, nombre, precio, cantidad) {
  const posicion = productos.findIndex(
    (producto) => producto.id === Number(id)
  );

  if (posicion === -1) {
    return null;
  }

  productos[posicion].nombre = nombre;
  productos[posicion].precio = precio;
  productos[posicion].cantidad = cantidad;

  return productos[posicion];
}

function eliminarProductos(id) {
  const posicion = productos.findIndex(
    (producto) => producto.id === Number(id)
  );

  if (posicion === -1) {
    return null;
  }

  return productos.splice(posicion, 1)[0];
}

function prepararCafe() {
  return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      const resultado = Math.random();

      if (resultado < 0.2) {
        rechazar(new Error("Falta un ingrediente para preparar el café."));
        return;
      }

      if (resultado < 0.4) {
        rechazar(new Error("Ocurrió un error en la cocina."));
        return;
      }

      resolver("Café preparado correctamente.");
    }, 1000);
  });
}
module.exports = {
  agregarProductos,
  listarProductos,
  buscarProductoPorId,
  filtrarProductos,
  filtrarProductosPorPrecio,
  editarProductos,
  eliminarProductos,
  prepararCafe
};
 