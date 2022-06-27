# Eos Shoes

Eos Shoes es una página de venta de zapatillas marca Vans

Cuenta con

- home de Bienvenida
- seccion de novedades para incluir noticias de la marca
- seccion de contacto para que el usuario pueda enviar dudas o comentarios. Los mismos se alojan en firestore
- seccion de categoria (zapatillas) para un pre seleccion de categoría
- filtro por categorías (desde paginas "zapatillas" o desde navbar lateral en intemList): tomando las categorías de la base de datos se generan filtros de productos
- vistas de listas de productos: vista general de productos con foto y detalles mínimos
- vista de detalles: vista con todos los detalles del producto. Pudiendo seleccionar un producto según modelo, color y talle. También pudiendo seleccionar la cantidad, limitando esta seleccion al stock disponible 
- control de stock: revisa que los usuarios no puedan agregar más items al carrito de los que hay disponibles y revisa el stock real al momento de generar la compra para evitar conflicto en peticiones paralalelas
- carrito: cuenta vista completa de los items del carrito, su total, la opción de sacar un producto del carrito y la opcion de vaciar carrito. Los productos que figuran en el carrito, discriman entre modelo, color y talle. Solo se actualiza la cantidad del producto cuando el modelo, el color y el talle son los mismos.
- checkout: vista de resumen de la compra, donde el usuario deberá cargar sus datos para poder procesar la compra. Mediante el uso de Expresiones Regulares se valida que los datos ingresados por el usuario esten ok. Al preoceder con la compra, se ejecuta un mensaje con el ID de la compra, o un mensaje de error si no hay suficiente stock, mencionando cual es el modelo faltante 

## Instalación

1. Forkeá y cloná el repositorio

2. Parado en la raíz del proyecto corré el comando 

   ```
   npm install
   ```

    para instalar todas las dependecias del proyecto

3. Usá 

   ```
   npm start
   ```

    para correr el proyecto, que estará disponible en http://localhost:3000



## Dependencias

Uso de React Router Dom para la navegación
Uso de FireBase para persistencia de datos
Uso de swettAlert para ejecutar un mensaje con el ID de la compra y darle estetica

## Gift de Muestra

![Alt Text](/src/assets/EosGift.gif)


### Autor

Eneas Baroni

2022 - Curso de React en CoderHouse