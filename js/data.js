/* ── DATOS COMPARTIDOS — GameHub Store ──────────────────────────────────────── */

const PRODUCTOS = [
  {
    id: 1,
    nombre: "ASUS ROG Strix G16 (2024)",
    categoria: "Notebooks",
    marca: "ASUS",
    precio: 1299990,
    descuento: 10,
    stock: 5,
    rating: 4.5,
    resenas: 23,
    imagen: "1593640495253-23196b27a87f",
    descripcion: "Notebook gaming de alto rendimiento con panel 165Hz, ideal para competitivo y creación de contenido.",
    specs: [
      ["CPU", "Intel Core i7-13650HX"],
      ["GPU", "NVIDIA RTX 4060 8GB"],
      ["RAM", "16GB DDR5 4800MHz"],
      ["Almacenamiento", "512GB NVMe SSD"],
      ["Pantalla", "16\" 165Hz FHD IPS"],
      ["Batería", "90Wh"],
    ],
  },
  {
    id: 2,
    nombre: "MSI GeForce RTX 4070 Ti GAMING X TRIO",
    categoria: "Tarjetas Gráficas",
    marca: "MSI",
    precio: 899990,
    descuento: 0,
    stock: 3,
    rating: 4.8,
    resenas: 41,
    imagen: "1591488320449-011701bb6704",
    descripcion: "Tarjeta gráfica de última generación con ray tracing en tiempo real y DLSS 3.",
    specs: [
      ["VRAM", "12GB GDDR6X"],
      ["Bus", "192-bit"],
      ["Boost Clock", "2610 MHz"],
      ["TDP", "285W"],
      ["Puertos", "HDMI 2.1, 3x DP 1.4a"],
      ["Cooler", "TRIPLE FROZR 3S"],
    ],
  },
  {
    id: 3,
    nombre: "AMD Ryzen 9 7950X",
    categoria: "Procesadores",
    marca: "AMD",
    precio: 649990,
    descuento: 15,
    stock: 8,
    rating: 4.9,
    resenas: 87,
    imagen: "1555617981-dac3772ad4c5",
    descripcion: "El procesador más potente de la familia Ryzen 7000, ideal para workstations y gaming de alto nivel.",
    specs: [
      ["Núcleos", "16C / 32T"],
      ["Frecuencia base", "4.5 GHz"],
      ["Frecuencia boost", "5.7 GHz"],
      ["TDP", "170W"],
      ["Socket", "AM5"],
      ["Caché total", "80MB"],
    ],
  },
  {
    id: 4,
    nombre: "Logitech G Pro X Superlight 2",
    categoria: "Periféricos",
    marca: "Logitech",
    precio: 189990,
    descuento: 0,
    stock: 12,
    rating: 4.7,
    resenas: 156,
    imagen: "1527814050087-3793815479db",
    descripcion: "El mouse gaming inalámbrico más ligero de Logitech, diseñado con atletas de esports de élite.",
    specs: [
      ["Sensor", "HERO 2 25K"],
      ["DPI", "100 - 25,600"],
      ["Peso", "60g"],
      ["Batería", "95 horas"],
      ["Conexión", "Wireless 2.4GHz"],
      ["Botones", "5 programables"],
    ],
  },
  {
    id: 5,
    nombre: "PlayStation 5 Slim Digital",
    categoria: "Consolas",
    marca: "Sony",
    precio: 549990,
    descuento: 5,
    stock: 2,
    rating: 4.6,
    resenas: 312,
    imagen: "1607853202273-797f1c22a38e",
    descripcion: "La consola más vendida de Sony en su versión compacta Digital Edition.",
    specs: [
      ["CPU", "AMD Zen 2 - 3.5GHz"],
      ["GPU", "10.3 TFLOPS RDNA 2"],
      ["RAM", "16GB GDDR6"],
      ["Almacenamiento", "1TB SSD"],
      ["Resolución máxima", "8K"],
      ["Ray Tracing", "Sí"],
    ],
  },
  {
    id: 6,
    nombre: "LG UltraGear 27GP850-B QHD",
    categoria: "Monitores",
    marca: "LG",
    precio: 379990,
    descuento: 20,
    stock: 7,
    rating: 4.5,
    resenas: 68,
    imagen: "1593640495253-23196b27a87f",
    descripcion: "Monitor gaming QHD con panel Nano IPS, 165Hz y 1ms. Perfecto para gaming competitivo.",
    specs: [
      ["Panel", "IPS Nano"],
      ["Tamaño", "27\""],
      ["Resolución", "2560x1440 QHD"],
      ["Frecuencia", "165Hz"],
      ["Tiempo respuesta", "1ms GTG"],
      ["HDR", "HDR10"],
    ],
  },
  {
    id: 7,
    nombre: "Corsair K100 RGB Optical",
    categoria: "Periféricos",
    marca: "Corsair",
    precio: 249990,
    descuento: 0,
    stock: 0,
    rating: 4.3,
    resenas: 44,
    imagen: "1541140532154-b024d705b90a",
    descripcion: "Teclado mecánico premium con switches ópticos de velocidad ultrarrápida y rueda de control iCUE.",
    specs: [
      ["Switch", "Cherry MX Speed Optical"],
      ["Retroiluminación", "RGB por tecla"],
      ["Conexión", "USB Type-C detachable"],
      ["Software", "iCUE"],
      ["Antighosting", "Full NKRO"],
    ],
  },
  {
    id: 8,
    nombre: "SteelSeries Arctis Nova Pro Wireless",
    categoria: "Periféricos",
    marca: "SteelSeries",
    precio: 329990,
    descuento: 10,
    stock: 6,
    rating: 4.6,
    resenas: 92,
    imagen: "1505740420928-5e560c06d30e",
    descripcion: "Auriculares gaming inalámbricos de referencia con batería intercambiable y DAC Hi-Fi.",
    specs: [
      ["Drivers", "40mm Neodimio"],
      ["Frecuencia", "10 - 40,000 Hz"],
      ["Micrófono", "ClearCast Gen 2 retráctil"],
      ["Conexión", "Wireless + Bluetooth"],
      ["Batería", "2x intercambiables 22h"],
    ],
  },
  {
    id: 9,
    nombre: "AMD Radeon RX 7900 XTX",
    categoria: "Tarjetas Gráficas",
    marca: "AMD",
    precio: 799990,
    descuento: 8,
    stock: 4,
    rating: 4.4,
    resenas: 29,
    imagen: "1591488320449-011701bb6704",
    descripcion: "GPU insignia de AMD con 24GB de VRAM, perfecta para 4K y cargas de trabajo creativas.",
    specs: [
      ["VRAM", "24GB GDDR6"],
      ["Bus", "384-bit"],
      ["Boost Clock", "2500 MHz"],
      ["TDP", "355W"],
      ["Puertos", "HDMI 2.1, 2x DP 2.1"],
      ["API", "DirectX 12 Ultimate"],
    ],
  },
  {
    id: 10,
    nombre: "Intel Core i9-14900K",
    categoria: "Procesadores",
    marca: "Intel",
    precio: 589990,
    descuento: 0,
    stock: 6,
    rating: 4.7,
    resenas: 63,
    imagen: "1555617981-dac3772ad4c5",
    descripcion: "Procesador Intel de 14a generación con la máxima frecuencia del mercado de consumo.",
    specs: [
      ["Núcleos", "24C (8P+16E) / 32T"],
      ["Frecuencia base", "3.2 GHz P-Core"],
      ["Frecuencia boost", "6.0 GHz"],
      ["TDP", "125W / 253W PL2"],
      ["Socket", "LGA1700"],
      ["Caché L3", "36MB"],
    ],
  },
  {
    id: 11,
    nombre: "Samsung Odyssey G9 49 OLED",
    categoria: "Monitores",
    marca: "Samsung",
    precio: 1499990,
    descuento: 12,
    stock: 1,
    rating: 4.8,
    resenas: 17,
    imagen: "1593640495253-23196b27a87f",
    descripcion: "El monitor ultrawide OLED más inmersivo del mercado, con curvatura 1800R y 240Hz.",
    specs: [
      ["Panel", "QD-OLED"],
      ["Tamaño", "49\" Curvo 1800R"],
      ["Resolución", "5120x1440 (32:9)"],
      ["Frecuencia", "240Hz"],
      ["Tiempo respuesta", "0.03ms GtG"],
      ["HDR", "DisplayHDR True Black 400"],
    ],
  },
  {
    id: 12,
    nombre: "Xbox Series X",
    categoria: "Consolas",
    marca: "Microsoft",
    precio: 629990,
    descuento: 0,
    stock: 3,
    rating: 4.5,
    resenas: 198,
    imagen: "1607853202273-797f1c22a38e",
    descripcion: "La consola más potente de Microsoft con soporte nativo para 4K a 120fps y Quick Resume.",
    specs: [
      ["CPU", "AMD Zen 2 - 3.8GHz"],
      ["GPU", "12 TFLOPS RDNA 2"],
      ["RAM", "16GB GDDR6"],
      ["Almacenamiento", "1TB NVMe SSD"],
      ["Quick Resume", "Sí"],
      ["Game Pass", "Compatible"],
    ],
  },
];

const RESENAS = [
  { id: 1, productoId: 1, usuario: "Felipe Mora",       puntuacion: 5, comentario: "Excelente rendimiento en todos los juegos. La pantalla de 165Hz marca una diferencia enorme.", fecha: "2024-11-10" },
  { id: 2, productoId: 1, usuario: "Valentina Riquelme",puntuacion: 4, comentario: "Muy bueno en general, aunque la batería podría ser mejor bajo carga máxima.", fecha: "2024-11-05" },
  { id: 3, productoId: 1, usuario: "Ignacio Soto",      puntuacion: 5, comentario: "Llegó en perfectas condiciones. La velocidad de la RAM DDR5 se nota muchísimo.", fecha: "2024-10-28" },
  { id: 4, productoId: 2, usuario: "Carolina Vega",     puntuacion: 5, comentario: "DLSS 3 en 4K es una locura. El cooler triple es silencioso incluso bajo carga máxima.", fecha: "2024-11-12" },
  { id: 5, productoId: 3, usuario: "Matias Fuentes",    puntuacion: 5, comentario: "El mejor procesador para cargas mixtas. En rendering y gaming es brutal.", fecha: "2024-11-01" },
  { id: 6, productoId: 4, usuario: "Andrea Castro",     puntuacion: 5, comentario: "60 gramos en un mouse inalámbrico es increíble. Cero latencia perceptible.", fecha: "2024-10-20" },
  { id: 7, productoId: 5, usuario: "Diego Pizarro",     puntuacion: 4, comentario: "Excelente consola, la SSD es rapidísima. La ausencia de lector de discos es el único pero.", fecha: "2024-11-20" },
];

const CUPONES = [
  { codigo: "GAMER10", descuento: 10, vigente: true  },
  { codigo: "NEON20",  descuento: 20, vigente: true  },
  { codigo: "CADUCADO",descuento: 15, vigente: false },
];

const CATEGORIAS = ["Notebooks", "Tarjetas Gráficas", "Procesadores", "Periféricos", "Consolas", "Monitores"];
const MARCAS     = [...new Set(PRODUCTOS.map(p => p.marca))];

/* ── HELPERS ──────────────────────────────────────────────────────────────────── */
function fmt(n) {
  return "$" + Number(n).toLocaleString("es-CL", { maximumFractionDigits: 0 });
}

function precioFinal(p) {
  return Math.round(p.precio * (1 - p.descuento / 100));
}

function imgUrl(id, w = 600, h = 400) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;
}

function estrellas(r) {
  const llenas = Math.floor(r);
  const media  = (r % 1) >= 0.5 ? 1 : 0;
  return "★".repeat(llenas) + (media ? "½" : "") + "☆".repeat(5 - llenas - media);
}

/* ── CARRITO (localStorage) ───────────────────────────────────────────────────── */
function getCarrito() {
  try { return JSON.parse(localStorage.getItem("gh_carrito") || "[]"); }
  catch { return []; }
}

function saveCarrito(carrito) {
  localStorage.setItem("gh_carrito", JSON.stringify(carrito));
}

function cantidadCarrito() {
  return getCarrito().reduce((s, l) => s + l.cantidad, 0);
}

function agregarAlCarrito(productoId, cantidad) {
  const carrito = getCarrito();
  const producto = PRODUCTOS.find(p => p.id === productoId);
  if (!producto || producto.stock === 0) return false;

  const existe = carrito.find(l => l.productoId === productoId);
  if (existe) {
    existe.cantidad = Math.min(existe.cantidad + cantidad, producto.stock);
  } else {
    carrito.push({ productoId, cantidad: Math.min(cantidad, producto.stock) });
  }
  saveCarrito(carrito);
  return true;
}

/* ── NAV COMÚN ────────────────────────────────────────────────────────────────── */
function initNav(paginaActiva) {
  const badge = document.getElementById("carrito-badge");
  if (badge) {
    const n = cantidadCarrito();
    badge.textContent = n;
    badge.style.display = n > 0 ? "flex" : "none";
  }

  document.querySelectorAll(".nav-link[data-pagina]").forEach(el => {
    if (el.dataset.pagina === paginaActiva) el.classList.add("activo");
  });
}

/* ── NOTIFICACIÓN ─────────────────────────────────────────────────────────────── */
function mostrarNotif(msg, tipo = "ok") {
  let notif = document.getElementById("notif-global");
  if (!notif) {
    notif = document.createElement("div");
    notif.id = "notif-global";
    notif.className = "notif";
    document.body.appendChild(notif);
  }
  notif.textContent = (tipo === "ok" ? "✓ " : "⚠ ") + msg;
  notif.style.borderColor = tipo === "ok" ? "var(--color-exito)" : "var(--color-error)";
  notif.style.color       = tipo === "ok" ? "var(--color-exito)" : "var(--color-error)";
  notif.classList.add("visible");
  setTimeout(() => notif.classList.remove("visible"), 2800);
}