const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

// Lista de productos
const products = [
  {
    name: "Arepa de Huevo",
    category: "Entradas",
    price: 4500,
    image: "arepa_huevo.jpg",
    description: "Típica arepa costeña rellena de huevo frito, crujiente y deliciosa."
  },
  {
    name: "Carimañola de Carne",
    category: "Entradas",
    price: 4000,
    image: "carimanola_carne.jpg",
    description: "Croqueta de yuca rellena con carne molida, ideal como entrada."
  },
  {
    name: "Bollo de Mazorca",
    category: "Entradas",
    price: 3500,
    image: "bollo_mazorca.jpg",
    description: "Bollo de maíz tierno, un clásico acompañamiento Caribeño."
  },
  {
    name: "Arepa Rellena de Queso",
    category: "Arepas",
    price: 5000,
    image: "arepa_queso.jpg",
    description: "Deliciosa arepa rellena con queso costeño derretido."
  },
  {
    name: "Arepa Rellena de Pollo",
    category: "Arepas",
    price: 7000,
    image: "arepa_pollo.jpg",
    description: "Arepa rellena con pollo desmechado sazonado al estilo Caribe."
  },
  {
    name: "Arepa Rellena Mixta",
    category: "Arepas",
    price: 9000,
    image: "arepa_mixta.jpg",
    description: "Mezcla de carne, pollo y queso dentro de una arepa fresca."
  },
  {
    name: "Cerdo al Barril",
    category: "Asados",
    price: 17000,
    image: "cerdo_barril.jpg",
    description: "Corte de cerdo al barril, jugoso y lleno de sabor."
  },
  {
    name: "Chicharrón Crujiente",
    category: "Asados",
    price: 8500,
    image: "chicharron.jpg",
    description: "Chicharrón de cerdo crujiente, ideal para acompañar tus platos."
  },
  {
    name: "Chorizo Costeño",
    category: "Asados",
    price: 7000,
    image: "chorizo.jpg",
    description: "Chorizo típico costeño, preparado a la parrilla."
  },
  {
    name: "Morcilla Costeña",
    category: "Asados",
    price: 8000,
    image: "morcilla.jpg",
    description: "Morcilla sazonada al estilo Caribe, asada y deliciosa."
  },
  {
    name: "Enyucado",
    category: "Postres",
    price: 5000,
    image: "enyucado.jpg",
    description: "Postre tradicional a base de yuca y coco rallado."
  },
  {
    name: "Dulce de Leche Cortada",
    category: "Postres",
    price: 4500,
    image: "dulce_leche.jpg",
    description: "Delicioso dulce típico de leche cortada y especias."
  },
  {
    name: "Postre de Natas",
    category: "Postres",
    price: 6000,
    image: "postre_natas.jpg",
    description: "Postre cremoso hecho con natas de leche y azúcar."
  },
  {
    name: "Jugo de Corozo",
    category: "Bebidas",
    price: 4000,
    image: "jugo_corozo.jpg",
    description: "Bebida refrescante hecha con corozo, típica de la región Caribe."
  },
  {
    name: "Jugo de Tamarindo",
    category: "Bebidas",
    price: 4500,
    image: "jugo_tamarindo.jpg",
    description: "Delicioso jugo de tamarindo, una bebida clásica del Caribe."
  },
  {
    name: "Agua de Panela con Limón",
    category: "Bebidas",
    price: 3000,
    image: "agua_panela.jpg",
    description: "Bebida tradicional dulce y refrescante con un toque de limón."
  },
  {
    name: "Limonada de Coco",
    category: "Bebidas",
    price: 6000,
    image: "limonada_coco.jpg",
    description: "Refrescante limonada con crema de coco, ideal para días calurosos."
  },
  {
    name: "Arepa Rellena de Chorizo",
    category: "Arepas",
    price: 7500,
    image: "arepa_chorizo.jpg",
    description: "Arepa rellena de chorizo costeño asado al punto perfecto."
  },
  {
    name: "Butifarra Costeña",
    category: "Asados",
    price: 7000,
    image: "butifarra.jpg",
    description: "Tradicional butifarra costeña, jugosa y llena de sabor."
  },
  {
    name: "Arepa Rellena de Carne",
    category: "Arepas",
    price: 7500,
    image: "arepa_carne.jpg",
    description: "Arepa rellena con carne desmechada, sazonada al estilo Barranquilla."
  }
];

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Conectado a MongoDB. Insertando productos...');
        await Product.deleteMany(); // Limpia la colección antes de insertar
        await Product.insertMany(products);
        console.log('Productos insertados correctamente.');
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
        mongoose.disconnect();
    });
