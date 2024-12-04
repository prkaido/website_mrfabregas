

# Mr. Fàbregas Website

¡Bienvenido al proyecto web de **Mr. Fàbregas**! Este es un sitio web interactivo para un restaurante especializado en arepas, carnes al barril y postres. Incluye funcionalidades como menú dinámico, carrito de compras, reservas y sistema de inicio de sesión/registro.

---

## Estructura del Proyecto

```
MrFabregas/
├── backend/
│   ├── server.js              # Archivo principal del servidor
│   ├── models/                # Modelos de la base de datos (MongoDB)
│   ├── routes/                # Rutas de la API
│   ├── package.json           # Dependencias del backend
│   └── .env                   # Variables de entorno
├── frontend/
│   ├── index.html             # Página de inicio
│   ├── menu.html              # Página del menú
│   ├── carrito.html           # Página del carrito
│   ├── reserva.html           # Página de reservas
│   ├── login.html             # Página de inicio de sesión
│   ├── register.html          # Página de registro
│   ├── css/                   # Estilos personalizados
│   ├── img/                   # Imágenes del proyecto
│   └── js/                    # Scripts del frontend
└── README.md                  # Instrucciones del proyecto
```

---

## Requisitos Previos

1. **Node.js** (versión LTS recomendada).
2. **MongoDB** (local o remoto como MongoDB Atlas).
3. Navegador web compatible con HTML5 y CSS3.

---

## Instalación y Configuración

### 1. Clonar el repositorio
Clona el proyecto en tu máquina local:
```bash
git clone https://github.com/tu_usuario/mrfabregas-website.git
cd mrfabregas-website
```

### 2. Configuración del Backend
Navega a la carpeta `backend`:
```bash
cd backend
```

#### Instala las dependencias:
```bash
npm install
```

#### Configura las variables de entorno:
Crea un archivo `.env` con el siguiente contenido:
```
MONGODB_URI=mongodb://localhost:27017/mrfabregas
PORT=5000
```

#### Inicia el servidor:
```bash
nodemon server.js
```
El servidor estará disponible en `http://localhost:5000`.

### 3. Configuración del Frontend
Navega a la carpeta `frontend` y abre `index.html` en un navegador o usa un servidor local como Live Server.

---

## Funcionalidades

### 1. **Inicio**: Página de inicio slider promocion, con botón de inicio de sesión y registro. 
- todas las páginas tienen una barra de navegación.(barra de navegación: inicio, sobre mí, servicios, proyectos, contacto), cabecera con logo, barra de busqueda, inicio de sesion y menú de navegación, pie de página con redes sociales y derechos de autor.
- el slider promocional tiene 3 imágenes con texto de descripción y botón de inicio
- el botón de inicio de sesión y registro lleva a la página de inicio de sesión y registro
- el menú de navegación tiene un estilo de bootstrap
- el logo es un enlace a la página de inicio
- la barra de busqueda es un input de texto con un botón de búsqueda
- el pie de página tiene un estilo de bootstrap y tiene un enlace a la página de derechos
- el menú de navegación tiene un estilo de bootstrap
- el botón de inicio de sesión y registro tiene un estilo de bootstrap
- el botón de inicio tiene un estilo de bootstrap
- el slider promocional tiene un estilo de bootstrap
- el texto de descripción del slider promocional tiene un estilo de bootstrap
- el botón de inicio de sesión y registro tiene un estilo de bootstrap
- el menú de navegación tiene un estilo de bootstrap

### 2. **Menú**
- el menú tiene un estilo de bootstrap
- el menú tiene un enlace a la página de inicio
- Visualiza las categorías de productos: entradas, arepas, carnes al barril, postres y bebidas.
-los productos se visualizaran en tarjetas con imagen, nombre, precio y descripción.
- cada tarjeta tiene un botón de agregar al carrito.
- el carrito se visualiza en la parte superior derecha con el número de productos y el total.
- el carrito tiene un botón de vaciar carrito.
- el carrito tiene un botón de finalizar compra.
- al finalizar compra se redirige a la página de pago.
- al pagar se redirige a la página de confirmación de pago.
- al confirmar pago se redirige a la página de agradecimiento.
- Busca productos utilizando la barra de búsqueda.
- Navega a través de las categorías.
- Visualiza los productos de cada categoría.
- Verifica el stock de cada producto.
- Agrega productos al carrito de compras.
- Verifica el carrito de compras.
- Realiza la compra.
- Verifica el historial de compras.
- Verifica el perfil del usuario.
- Realiza el login.
- Realiza el registro.
- Realiza el logout.
- Verifica el estado de la cuenta.

### 3. **Carrito**
- el carrito tiene un estilo de bootstrap
- Agrega productos al carrito.
- Visualiza el resumen del pedido.
- Elimina productos del carrito.
- Realiza el pago.
- Recibe un mensaje de confirmación de pago.
- Visualiza el historial de pedidos.
- Elimina pedidos del historial.
- Visualiza el detalle de cada pedido.

### 4. **Reservas**
- el menú tiene un estilo de bootstrap
- Registra reservas para un día y hora específicos.
- Visualiza las reservas realizadas.
- Elimina reservas.
- Visualiza el detalle de cada reserva.
- Realiza el pago de la reserva.
- Recibe un mensaje de confirmación de pago.
### 5. **Turno**
- el menú tiene un estilo de bootstrap
- Registra turnos para un día y hora específicos.
- Visualiza los turnos realizados.
- Elimina turnos.

### 6. **Inicio de Sesión/Registro**    
- el menú tiene un estilo de bootstrap
- Sistema básico de autenticación de usuarios.
- Inicia sesión con un usuario existente
- olvidar contraseña.
- Registra un nuevo usuario.
- Visualiza el perfil del usuario.
- Edita el perfil del usuario.
- Elimina el perfil del usuario.
- Visualiza el historial de pedidos y reservas del usuario.
- Elimina pedidos y reservas del usuario.
- Visualiza el detalle de cada pedido y reserva del usuario.
- Realiza el pago de pedidos y reservas.
- Recibe un mensaje de confirmación de pago.
- Visualiza el detalle de cada pago.
- Elimina pagos.
- Visualiza el historial de pagos.
### 7. **sobre nosotros**
- el menú tiene un estilo de bootstrap
- Visualiza la información de la empresa.
- Visualiza el mapa de ubicación de la empresa.
- Visualiza el contacto de la empresa.
- Visualiza el horario de atención de la empresa.
- Visualiza el número de teléfono de la empresa.
- Visualiza el correo electrónico de la empresa.
- Visualiza el sitio web de la empresa.
- Visualiza el redes sociales de la empresa.
---

## Tecnologías Utilizadas

### Frontend:
- **HTML5**, **CSS3** (con Bootstrap 5).
- **JavaScript** (dinamismo e interacción).
- **React** (framework de JavaScript para construir interfaces de usuario).
- **Redux** (gestión de estado global).
- **React Router** (navegación entre componentes).
- **Axios** (gestión de solicitudes HTTP).
- **Material UI** (componentes de interfaz de usuario).
- **Moment.js** (gestión de fechas y horas).
- **SweetAlert2** (notificaciones y mensajes).
- **React Hook Form** (gestión de formularios).
- **React Select** (componentes de selección).
- **React Date Picker** (componentes de selección de fechas).
- **React Time Picker** (componentes de selección de horas).


### Backend:
- **Node.js** con **Express**.
- **MongoDB** con **Mongoose**.
- **Passport.js** para autenticación de usuarios.
- **Stripe** para procesamiento de pagos.
- **Nodemailer** para envío de correos electrónicos.
- **Multer** para subida de archivos.
- **Bcrypt** para encriptación de contraseñas.
- **Validator** para validación de datos.
- **Moment.js** para manejo de fechas.
- **Lodash** para funciones útiles.

---

## Autor
Desarrollado por [Maria Florez](https://github.com/tu_usuario).

¡Disfruta del proyecto y no dudes en contribuir o reportar problemas! 🚀
