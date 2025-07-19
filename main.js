

const productosDecoracion = [
    {
        nombre: "Lámpara de mesa de madera",
        vendedor: "Nordic Lights",
        precio: 49.99,
        rating: 4.7,
        descripcion: "Lámpara de mesa minimalista con base de madera natural y pantalla blanca de lino.",
        imagen: "https://example.com/imagenes/lampara-madera.jpg"
    },
    {
        nombre: "Jarrón cerámico blanco mate",
        vendedor: "Casa Zen",
        precio: 24.90,
        rating: 4.5,
        descripcion: "Jarrón decorativo en acabado cerámico blanco mate, ideal para flores secas o solo.",
        imagen: "https://example.com/imagenes/jarron-blanco.jpg"
    },
    {
        nombre: "Lámina abstracta en tonos neutros",
        vendedor: "Art&Form",
        precio: 14.50,
        rating: 4.8,
        descripcion: "Lámina artística estilo abstracto en beige y gris, ideal para marcos A3.",
        imagen: "https://example.com/imagenes/lamina-abstracta.jpg"
    },
    {
        nombre: "Maceta colgante de cuerda",
        vendedor: "Verde Minimal",
        precio: 19.95,
        rating: 4.6,
        descripcion: "Maceta colgante de cerámica blanca con soporte de cuerda de yute natural.",
        imagen: "https://example.com/imagenes/maceta-cuerda.jpg"
    },
    {
        nombre: "Set de velas aromáticas naturales",
        vendedor: "Esencia Pura",
        precio: 29.99,
        rating: 4.9,
        descripcion: "Set de 3 velas con aromas de lavanda, vainilla y eucalipto en envase de cristal ámbar.",
        imagen: "https://example.com/imagenes/velas-aromaticas.jpg"
    },
    {
        nombre: "Reloj de pared minimalista",
        vendedor: "Linea Norte",
        precio: 39.90,
        rating: 4.4,
        descripcion: "Reloj de pared sin números, estilo escandinavo, color negro mate.",
        imagen: "https://example.com/imagenes/reloj-pared.jpg"
    },
    {
        nombre: "Espejo redondo con marco de bambú",
        vendedor: "Deco Eco",
        precio: 59.00,
        rating: 4.7,
        descripcion: "Espejo decorativo con marco de bambú natural, perfecto para entradas o baños.",
        imagen: "https://example.com/imagenes/espejo-bambu.jpg"
    },
    {
        nombre: "Alfombra tejida a mano 60x90cm",
        vendedor: "Terra Home",
        precio: 44.95,
        rating: 4.6,
        descripcion: "Alfombra en tonos arena y gris, hecha a mano con fibras de algodón reciclado.",
        imagen: "https://example.com/imagenes/alfombra-tejida.jpg"
    },
    {
        nombre: "Organizador de escritorio de madera",
        vendedor: "SimpleDesk",
        precio: 18.90,
        rating: 4.5,
        descripcion: "Organizador con compartimentos para bolígrafos, notas y móvil. Minimalista y funcional.",
        imagen: "https://example.com/imagenes/organizador-escritorio.jpg"
    },
    {
        nombre: "Cuadro de hoja seca en marco negro",
        vendedor: "Raíz Estudio",
        precio: 22.99,
        rating: 4.8,
        descripcion: "Decoración botánica real enmarcada. Ideal para espacios relajantes.",
        imagen: "https://example.com/imagenes/cuadro-hoja.jpg"
    },
    {
        nombre: "Cesta de almacenaje tejida",
        vendedor: "Hogar Tranquilo",
        precio: 27.50,
        rating: 4.6,
        descripcion: "Cesta grande tejida con asas, ideal para mantas o juguetes. Material: algodón.",
        imagen: "https://example.com/imagenes/cesta-algodon.jpg"
    },
    {
        nombre: "Luz LED cálida en tira flexible",
        vendedor: "Lumen Home",
        precio: 15.99,
        rating: 4.4,
        descripcion: "Tira LED adhesiva de 3 metros para iluminar estanterías o cabeceros.",
        imagen: "https://example.com/imagenes/tira-led.jpg"
    },
    {
        nombre: "Portavelas de cristal esmerilado",
        vendedor: "Velarte",
        precio: 12.00,
        rating: 4.7,
        descripcion: "Portavelas con acabado mate y forma geométrica, para vela de té.",
        imagen: "https://example.com/imagenes/portavelas.jpg"
    },
    {
        nombre: "Estantería flotante de madera clara",
        vendedor: "Mínimo Estudio",
        precio: 34.95,
        rating: 4.5,
        descripcion: "Estante de pared sin soportes visibles, acabado roble natural.",
        imagen: "https://example.com/imagenes/estanteria-flotante.jpg"
    },
    {
        nombre: "Difusor de aromas de cerámica",
        vendedor: "Luz & Calma",
        precio: 25.00,
        rating: 4.8,
        descripcion: "Difusor para aceites esenciales con diseño nórdico en blanco mate.",
        imagen: "https://example.com/imagenes/difusor-aromas.jpg"
    },
    {
        nombre: "Cuadro line art en blanco y negro",
        vendedor: "Tinta Simple",
        precio: 16.50,
        rating: 4.6,
        descripcion: "Ilustración minimalista de rostro humano, ideal para marcos negros.",
        imagen: "https://example.com/imagenes/cuadro-lineart.jpg"
    },
    {
        nombre: "Cojín decorativo lino natural",
        vendedor: "Soft Living",
        precio: 21.95,
        rating: 4.6,
        descripcion: "Funda de cojín 45x45cm en lino color crudo, textura suave y elegante.",
        imagen: "https://example.com/imagenes/cojin-lino.jpg"
    },
    {
        nombre: "Centro de mesa de ratán",
        vendedor: "Raíz Estudio",
        precio: 32.00,
        rating: 4.5,
        descripcion: "Bandeja decorativa de ratán natural para mesas o recibidores.",
        imagen: "https://example.com/imagenes/centro-ratan.jpg"
    },
    {
        nombre: "Planta artificial tipo eucalipto",
        vendedor: "Verde Minimal",
        precio: 13.75,
        rating: 4.4,
        descripcion: "Planta decorativa realista, ideal para jarrones pequeños.",
        imagen: "https://example.com/imagenes/planta-eucalipto.jpg"
    },
    {
        nombre: "Portarretratos estilo nórdico",
        vendedor: "Casa Zen",
        precio: 11.95,
        rating: 4.7,
        descripcion: "Marco de fotos de madera clara con borde fino, 15x20 cm.",
        imagen: "https://example.com/imagenes/marco-nordico.jpg"
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
