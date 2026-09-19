# CoffeeCode

Proyecto basico de una cafeteria realizado en JavaScript. Permite administrar productos, crear pedidos y consultar el total de compra desde la terminal.

## Requisitos

- Tener instalado Node.js.
- Tener este proyecto descargado en la computadora.

Para comprobar que Node.js esta instalado:

```bash
node --version
```

## Como iniciar el proyecto

Abre una terminal dentro de la carpeta del proyecto y ejecuta:

```bash
node app.js
```

## Opciones disponibles

Al iniciar el programa aparece este menu:

```text
1. Ver productos
2. Agregar producto
3. Editar producto
4. Eliminar producto
5. Crear pedido
6. Ver pedidos y total
0. Salir
```

Selecciona una opcion escribiendo su numero y presionando Enter.

## Que hace cada parte

- **Cocina:** agrega, muestra, edita y elimina productos.
- **Cliente:** consulta los productos y crea pedidos.
- **Caja:** recibe los pedidos y calcula el total.
- **app.js:** une las tres partes y muestra el menu principal.

## Archivos principales

```text
Cocina.js
Cliente.js
Caja.js
app.js
```

## Importante

Los productos y pedidos se guardan temporalmente mientras el programa esta abierto. Al cerrar el programa, la informacion se reinicia.
