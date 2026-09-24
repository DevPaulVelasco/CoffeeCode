const productos = [];

function agregarProductos(nombre, precio, cantidad, categoria = "general") {
  const producto = {
    id: productos.length + 1,
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
    categoria: categoria,
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
    return [];
  }

  const categoriaBuscada = categoria.toLowerCase();

  return productos.filter(
    (producto) => (producto.categoria || "general").toLowerCase() === categoriaBuscada
  );
}

function buscarBebidas() {
  return buscarProductosPorCategoria("bebida");
}

function buscarPostres() {
  return buscarProductosPorCategoria("postre");
}


function calcularValorTotalInventario() {
  return productos.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );
}


function calcularPromedioPrecio() {
  if (productos.length === 0) {
    return 0;
  }

  const sumaPrecios = productos.reduce((total, producto) => total + producto.precio, 0);
  return sumaPrecios / productos.length;
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

module.exports = {
  agregarProductos,
  listarProductos,
  buscarProductoPorId,
  find,
  filter,
  buscarProductosBaratos,
  buscarProductosCaros,
  buscarProductosPorCategoria,
  buscarBebidas,
  buscarPostres,
  calcularValorTotalInventario,
  calcularPromedioPrecio,
  editarProductos,
  eliminarProductos
};

