

const productosDecoracion = [
  {
    nombre: "Lámpara de mesa de madera",
    vendedor: "Nordic Lights",
    precio: 49.99,
    rating: 4.7,
    descripcion: "Lámpara de mesa minimalista con base de madera natural y pantalla blanca de lino.",
    imagen: "https://img-1.kwcdn.com/product/fancy/a5136c77-e340-4a55-8283-fdfaa0cd537c.jpg?imageView2/2/w/800/q/70/format/webp",
    disponible: true,
    categoria: "Iluminación",
    oferta: true
  },
  {
    nombre: "Jarrón cerámico blanco mate",
    vendedor: "Casa Zen",
    precio: 24.90,
    rating: 4.5,
    descripcion: "Jarrón decorativo en acabado cerámico blanco mate, ideal para flores secas o solo.",
    imagen: "https://medias.maisonsdumonde.com/image/upload/f_auto,q_auto/v1/img/jarron-de-gres-gris-alt-19-1000-15-24-228189_1.jpg",
    disponible: true,
    categoria: "Decoración",
    oferta: false
  },
  {
    nombre: "Lámina abstracta en tonos neutros",
    vendedor: "Art&Form",
    precio: 14.50,
    rating: 4.8,
    descripcion: "Lámina artística estilo abstracto en beige y gris, ideal para marcos A3.",
    imagen: "https://img-1.kwcdn.com/product/fancy/a1bce724-3a94-4b82-9f67-e885baba7a7c.jpg?imageView2/2/w/800/q/70/format/webp",
    disponible: true,
    categoria: "Arte",
    oferta: false
  },
  {
    nombre: "Maceta colgante de cuerda",
    vendedor: "Verde Minimal",
    precio: 19.95,
    rating: 4.6,
    descripcion: "Maceta colgante de cerámica blanca con soporte de cuerda de yute natural.",
    imagen: "https://media.adeo.com/media/2110990/media.jpeg?width=650&height=650&format=jpg&quality=80&fit=bounds",
    disponible: false,
    categoria: "Plantas",
    oferta: true
  },
  {
    nombre: "Set de velas aromáticas naturales",
    vendedor: "Esencia Pura",
    precio: 29.99,
    rating: 4.9,
    descripcion: "Set de 3 velas con aromas de lavanda, vainilla y eucalipto en envase de cristal ámbar.",
    imagen: "https://img-1.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8da73d222562ec3a86a6ae160f4a38ce.jpg?imageView2/2/w/800/q/70/format/webp",
    disponible: true,
    categoria: "Decoración",
    oferta: false
  },
  {
    nombre: "Reloj de pared minimalista",
    vendedor: "Linea Norte",
    precio: 39.90,
    rating: 4.4,
    descripcion: "Reloj de pared sin números, estilo escandinavo, color negro mate.",
    imagen: "https://medias.maisonsdumonde.com/image/upload/f_auto,q_auto/v1/img/reloj-calado-d-50-1000-1-35-194498_1.jpg",
    disponible: false,
    categoria: "Decoración",
    oferta: true
  },
  {
    nombre: "Espejo redondo con marco de bambú",
    vendedor: "Deco Eco",
    precio: 59.00,
    rating: 4.7,
    descripcion: "Espejo decorativo con marco de bambú natural, perfecto para entradas o baños.",
    imagen: "https://medias.maisonsdumonde.com/image/upload/f_auto,q_auto/v1/img/espejo-beige-55-cm-1000-0-24-218841_1.jpg",
    disponible: true,
    categoria: "Decoración",
    oferta: true
  },
  {
    nombre: "Alfombra tejida a mano 60x90cm",
    vendedor: "Terra Home",
    precio: 44.95,
    rating: 4.6,
    descripcion: "Alfombra en tonos arena y gris, hecha a mano con fibras de algodón reciclado.",
    imagen: "https://www.tapeso.es/wp-content/uploads/2024/01/Scandinavisch-vloerkleed-arc-bend-creme.jpg",
    disponible: false,
    categoria: "Textil",
    oferta: false
  },
  {
    nombre: "Organizador de escritorio de madera",
    vendedor: "SimpleDesk",
    precio: 18.90,
    rating: 4.5,
    descripcion: "Organizador con compartimentos para bolígrafos, notas y móvil. Minimalista y funcional.",
    imagen: "https://m.media-amazon.com/images/I/810iecx7djL._AC_SL1500_.jpg",
    disponible: true,
    categoria: "Almacenaje",
    oferta: true
  },
  {
    nombre: "Cuadro de hoja seca en marco negro",
    vendedor: "Raíz Estudio",
    precio: 22.99,
    rating: 4.8,
    descripcion: "Decoración botánica real enmarcada. Ideal para espacios relajantes.",
    imagen: "https://img-1.kwcdn.com/product/fancy/b7dba092-3ff0-457e-bc10-0203087fe597.jpg?imageView2/2/w/800/q/70/format/webp",
    disponible: true,
    categoria: "Arte",
    oferta: false
  },
  {
    nombre: "Cesta de almacenaje tejida",
    vendedor: "Hogar Tranquilo",
    precio: 27.50,
    rating: 4.6,
    descripcion: "Cesta grande tejida con asas, ideal para mantas o juguetes. Material: algodón.",
    imagen: "https://cdn2.jysk.com/getimage/wd3.large/238837",
    disponible: false,
    categoria: "Almacenaje",
    oferta: false
  },
  {
    nombre: "Luz LED cálida en tira flexible",
    vendedor: "Lumen Home",
    precio: 15.99,
    rating: 4.4,
    descripcion: "Tira LED adhesiva de 3 metros para iluminar estanterías o cabeceros.",
    imagen: "https://www.efectoled.com/964611-product_1500x1500/bobina-de-tira-led-regulable-220v-cob-320-ledm-720-lmm-cri90-ancho-12mm-50m-ip65.jpg",
    disponible: true,
    categoria: "Iluminación",
    oferta: true
  },
  {
    nombre: "Portavelas de cristal esmerilado",
    vendedor: "Velarte",
    precio: 12.00,
    rating: 4.7,
    descripcion: "Portavelas con acabado mate y forma geométrica, para vela de té.",
    imagen: "https://img-1.kwcdn.com/product/fancy/a541effb-bc10-42f8-87a6-2f504b34ffac.jpg?imageView2/2/w/800/q/70/format/webp",
    disponible: false,
    categoria: "Decoración",
    oferta: true
  },
  {
    nombre: "Estantería flotante de madera clara",
    vendedor: "Mínimo Estudio",
    precio: 34.95,
    rating: 4.5,
    descripcion: "Estante de pared sin soportes visibles, acabado roble natural.",
    imagen: "https://img-eu.kwcdn.com/local-goods-img/2029ded05c/d3fe6719-491b-4602-a53d-492f26e21bed.jpeg?imageView2/2/w/800/q/70/format/webp",
    disponible: true,
    categoria: "Muebles",
    oferta: false
  },
  {
    nombre: "Difusor de aromas de cerámica",
    vendedor: "Luz & Calma",
    precio: 25.00,
    rating: 4.8,
    descripcion: "Difusor para aceites esenciales con diseño nórdico en blanco mate.",
    imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBLsW8dL4S0AZ8ertaa0mzofJtWM-ns22YBtoN0Kkp-khpy1fBDA6JMmysohR1LR5dzZLeYfq0bJy1wJopfltNQAff8bbucTDbtnkaP2i2ToSVLLfAf3hdEA",
    disponible: true,
    categoria: "Aromaterapia",
    oferta: false
  },
  {
    nombre: "Cuadro line art en blanco y negro",
    vendedor: "Tinta Simple",
    precio: 16.50,
    rating: 4.6,
    descripcion: "Ilustración minimalista de rostro humano, ideal para marcos negros.",
    imagen: "https://m.media-amazon.com/images/I/61DsuMw1NqL.jpg",
    disponible: true,
    categoria: "Arte",
    oferta: false
  },
  {
    nombre: "Cojín decorativo lino natural",
    vendedor: "Soft Living",
    precio: 21.95,
    rating: 4.6,
    descripcion: "Funda de cojín 45x45cm en lino color crudo, textura suave y elegante.",
    imagen: "https://img-1.kwcdn.com/product/1e23312618/7e152e7c-dc4d-45a0-9e95-f4577113350f_1002x1002.jpeg?imageView2/2/w/800/q/70/format/webp",
    disponible: false,
    categoria: "Textil",
    oferta: true
  },
  {
    nombre: "Centro de mesa de ratán",
    vendedor: "Raíz Estudio",
    precio: 32.00,
    rating: 4.5,
    descripcion: "Bandeja decorativa de ratán natural para mesas o recibidores.",
    imagen: "https://img-1.kwcdn.com/product/fancy/d22dc18f-8af5-4b27-a01a-0eda53754153.jpg?imageView2/2/w/800/q/70/format/webp",
    disponible: true,
    categoria: "Decoración",
    oferta: true
  },
  {
    nombre: "Planta artificial tipo eucalipto",
    vendedor: "Verde Minimal",
    precio: 13.75,
    rating: 4.4,
    descripcion: "Planta decorativa realista, ideal para jarrones pequeños.",
    imagen: "https://medias.maisonsdumonde.com/image/upload/f_auto,q_auto/v1/img/eucalipto-artificial-y-maceta-de-cristal-1000-10-6-203653_1.jpg",
    disponible: false,
    categoria: "Plantas",
    oferta: false
  },
  {
    nombre: "Portarretratos estilo nórdico",
    vendedor: "Casa Zen",
    precio: 11.95,
    rating: 4.7,
    descripcion: "Marco de fotos de madera clara con borde fino, 15x20 cm.",
    imagen: "https://www.novodistribuciones.com/237096-detalles/portafotos-10x15-madera.jpg",
    disponible: true,
    categoria: "Decoración",
    oferta: true
  }
];


const header = document.querySelector("header");

// Crear elementos
const nav = document.createElement("nav");
nav.className = "header-nav";

const logo = document.createElement("div");
logo.className = "logo";
logo.innerHTML = `<img src="./assets/logo.png"></img>`;

const menu = document.createElement("ul");
menu.className = "nav-menu";

const links = [
    { nombre: "Inicio", url: "#" },
    { nombre: "Productos", url: "#productos" },
    { nombre: "Sobre Nosotros", url: "#nosotros" },
    { nombre: "Contacto", url: "#contacto" }
];

links.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.nombre;
    li.appendChild(a);
    menu.appendChild(li);
});

const carritoBtn = document.createElement("button");
carritoBtn.className = "btn-carrito";
carritoBtn.textContent = "🛒 Carrito";

// Insertar en el nav
nav.appendChild(logo);
nav.appendChild(menu);
nav.appendChild(carritoBtn);

// Insertar en el header
header.appendChild(nav);


// Listado de productos

for(const producto of productosDecoracion){
    const item = document.createElement("div");
    item.className = "fichaProducto"
    item.innerHTML = `
    <h3>${producto.nombre}</h3>
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <p>${producto.descripcion}</p>
    <p>Precio: ${producto.precio}€</p>
    <p>Valoración: ${producto.rating}</p>
    <p>Vendedor: ${producto.vendedor}</p>
    <button class="añadir"> 🛒 Añadir al carrito </button>
    `;
    document.querySelector("#productos").appendChild(item);
}
// Menú aside. Filtros
const categorias = ["Todas las categorías"];
const disponibles = ["Disponible", "Agotado"];

for (let producto of productosDecoracion){
    if (!categorias.includes(producto.categoria)){
        categorias.push(producto.categoria);
    }
}
const filtroCategoria = document.createElement("select");
const filtroDisponibilidad = document.createElement("select");
document.querySelector("#side").appendChild(filtroCategoria);
document.querySelector("#side").appendChild(filtroDisponibilidad);

for (let categoria of categorias){
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    filtroCategoria.appendChild(option);
}
for (let disponible of disponibles){
    const option = document.createElement("option");
    option.value = disponible;
    option.textContent = disponible;
    filtroDisponibilidad.appendChild(option);
}

