Spotba es un e-commerce para la venta de zapatillas Nike, principalmente estilo Jordan. Es el proyecto final para el curso de React por CODER HOUSE, desarrollado por Andres De Innocentiis, en el cual se aplica todo lo visto durante el curso:
 
 
****(GIF DENTRO DE LA CARPETA DEL PROYECTO)****


Tecnologías Aplicadas hasta el momento.

- React.js
- Javascript
- Node.js
- HTML & CSS
- Github
- Firebase

Dependencias extras agregadas hasta el momento:
- react-router-dom
- Lottie
- Firebase

Ideas para aplicar a futuro:
- Three.js para el ItemDetail, para renderizar en un canvas 3D cada producto.
- Control de stock (La idea sería: una vez que se avanza hacia el checkout, remover provisoriamente los items del stock de la base de datos para evitar conflictos de doble gasto, y en caso de cancelar la orden, se restablecen en el stock) - Ya tiene un "control de stock" aplicado, que solamente chequea que lo que se quiere comprar desde el item Detail sea menor al stock tomado de la base de datos. Dicho control es obviamente insuficiente ya que los items nunca se descuentan del stock y puede continuar ordenandose pedidos con el mismo item.
- Envío de factura de compra por correo electrónico.

Opté por utilizar un filtro de categorías por fuera del Navbar, ya que me pareció que mejoraría la experiencia de usuario, a la vez que quedaría el contenido mejor ordenado.

Para el display de productos y la carga de ordenes de compra utilicé Firebase (Firestore) donde se creó la colección "products", y al realizar la orden de compra, en caso de no haberse ya creado la colección "orders" la misma se crea en ese mismo momento.

Instalación

​
1. Forkea o clona el repositorio.

​
2. Parado en la raíz del proyecto corré el comando:

​

npm install

​ para instalar todas las dependecias del proyecto ​
3. Digita el comando:

​

npm start

​ para correr el proyecto, que estará disponible en http://localhost:3000 ​ ​




Andres De Innocentiis.
