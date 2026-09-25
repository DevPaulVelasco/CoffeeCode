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

<<<<<<< HEAD
function filtrarProductos(condicion) {
  if (typeof condicion !== "function") {
=======
function find(callback) {
  return productos.find(callback);
}

function filter(callback) {
  return productos.filter(callback);
}

function buscarProductosBaratos(maximoPrecio = 30) {
  return productos.filter((producto) => producto.precio < maximoPrecio);
}


function buscarProductosCaros(minimoPrecio = 50) {
  return productos.filter((producto) => producto.precio >= minimoPrecio);
}

function buscarProductosPorCategoria(categoria) {
  if (!categoria) {
>>>>>>> a72445286575f22063db367e1b97459b4662d308
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

<<<<<<< HEAD
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
=======
function cargarProductosDemo() {
  const listaDemo = [
    { nombre: "Café Espresso", precio: 45, cantidad: 12, categoria: "bebida" },
    { nombre: "Latte", precio: 60, cantidad: 9, categoria: "bebida" },
    { nombre: "Capuchino", precio: 55, cantidad: 8, categoria: "bebida" },
    { nombre: "Brownie", precio: 50, cantidad: 7, categoria: "postre" },
    { nombre: "Croissant", precio: 30, cantidad: 10, categoria: "postre" },
    { nombre: "Jugo Natural", precio: 40, cantidad: 6, categoria: "bebida" },
    { nombre: "Té Verde", precio: 25, cantidad: 15, categoria: "bebida" },
    { nombre: "Muffin", precio: 35, cantidad: 11, categoria: "postre" }
  ];

  listaDemo.forEach(({ nombre, precio, cantidad, categoria }) => {
    agregarProductos(nombre, precio, cantidad, categoria);
  });
}

cargarProductosDemo();

>>>>>>> a72445286575f22063db367e1b97459b4662d308
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
 