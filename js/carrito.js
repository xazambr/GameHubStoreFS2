/* carrito.js */

let cuponAplicado = null;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderCarrito() {
  const carrito = getCarrito();
  const vacio = document.getElementById("carrito-vacio");
  const contenido = document.getElementById("carrito-contenido");
  const lista = document.getElementById("lista-lineas");

  if (carrito.length === 0) {
    vacio.style.display = "block";
    contenido.style.display = "none";
    return;
  }

  vacio.style.display = "none";
  contenido.style.display = "flex";
  lista.innerHTML = "";

  let subtotal = 0;

  carrito.forEach(linea => {
    const producto = PRODUCTOS.find(p => p.id === linea.productoId);
    if (!producto) return;

    const precioUnitario = precioFinal(producto);
    const totalLinea = precioUnitario * linea.cantidad;
    subtotal += totalLinea;

    const card = document.createElement("div");
    card.className = "card p-3";
    card.innerHTML = `
      <div class="d-flex align-items-center gap-3 flex-wrap flex-sm-nowrap">
        <img src="${imgUrl(producto.imagen, 180, 135)}" alt="${escapeHtml(producto.nombre)}" class="linea-img">
        <div class="flex-fill">
          <p class="linea-marca mb-1">${escapeHtml(producto.marca)} · ${escapeHtml(producto.categoria)}</p>
          <h2 class="linea-nombre mb-1">${escapeHtml(producto.nombre)}</h2>
          <p class="linea-precio mb-0">${fmt(precioUnitario)} c/u</p>
        </div>
        <div class="d-flex flex-column align-items-end gap-2 ms-auto">
          <div class="cantidad-ctrl">
            <button class="qty-btn btn-restar" data-id="${producto.id}">-</button>
            <input type="text" class="form-control qty-input form-control-sm" value="${linea.cantidad}" readonly>
            <button class="qty-btn btn-sumar" data-id="${producto.id}" ${linea.cantidad >= producto.stock ? "disabled" : ""}>+</button>
          </div>
          <p class="linea-subtotal mb-0">Total: <span class="mono fw-bold">${fmt(totalLinea)}</span></p>
          <button class="linea-quitar btn-eliminar" data-id="${producto.id}">✕ Eliminar</button>
        </div>
      </div>
    `;
    lista.appendChild(card);
  });

  calcularResumen(subtotal);
}

function calcularResumen(subtotal) {
  let descuento = 0;
  const filaDcto = document.getElementById("fila-dcto");
  const rDcto = document.getElementById("r-dcto");

  if (cuponAplicado) {
    descuento = Math.round(subtotal * (cuponAplicado.descuento / 100));
    rDcto.textContent = `-${fmt(descuento)} (${cuponAplicado.descuento}%)`;
    filaDcto.style.display = "flex";
  } else {
    filaDcto.style.display = "none";
  }

  const total = Math.max(0, subtotal - descuento);

  document.getElementById("r-subtotal").textContent = fmt(subtotal);
  document.getElementById("r-total").textContent = fmt(total);
}

/* Eventos */
document.addEventListener("DOMContentLoaded", () => {
  initLayout("carrito");

  /* Delegación de eventos para botones de línea */
  document.getElementById("lista-lineas").addEventListener("click", e => {
    const btnRestar = e.target.closest(".btn-restar");
    const btnSumar = e.target.closest(".btn-sumar");
    const btnEliminar = e.target.closest(".btn-eliminar");

    const carrito = getCarrito();

    if (btnRestar) {
      const id = Number(btnRestar.dataset.id);
      const item = carrito.find(l => l.productoId === id);
      if (item) {
        if (item.cantidad > 1) {
          item.cantidad--;
        } else {
          const idx = carrito.findIndex(l => l.productoId === id);
          carrito.splice(idx, 1);
        }
        saveCarrito(carrito);
        initNav("carrito");
        renderCarrito();
      }
    }

    if (btnSumar) {
      const id = Number(btnSumar.dataset.id);
      const item = carrito.find(l => l.productoId === id);
      const prod = PRODUCTOS.find(p => p.id === id);
      if (item && prod && item.cantidad < prod.stock) {
        item.cantidad++;
        saveCarrito(carrito);
        initNav("carrito");
        renderCarrito();
      }
    }

    if (btnEliminar) {
      const id = Number(btnEliminar.dataset.id);
      const nuevoCarrito = carrito.filter(l => l.productoId !== id);
      saveCarrito(nuevoCarrito);
      initNav("carrito");
      renderCarrito();
      mostrarNotif("Producto eliminado del carrito", "error");
    }
  });

  /* Vaciar carrito */
  document.getElementById("btn-vaciar").addEventListener("click", () => {
    saveCarrito([]);
    cuponAplicado = null;
    initNav("carrito");
    renderCarrito();
    mostrarNotif("Carrito vaciado");
  });

  /* Aplicar Cupón */
  document.getElementById("btn-cupon").addEventListener("click", () => {
    const input = document.getElementById("cupon");
    const err = document.getElementById("err-cupon");
    const ok = document.getElementById("ok-cupon");
    const codigo = input.value.trim().toUpperCase();

    err.classList.remove("visible");
    ok.style.display = "none";

    const cuponEncontrado = CUPONES.find(c => c.codigo === codigo);

    if (cuponEncontrado && cuponEncontrado.vigente) {
      cuponAplicado = cuponEncontrado;
      ok.textContent = `✓ Cupón ${cuponEncontrado.codigo} aplicado (${cuponEncontrado.descuento}% DCTO)`;
      ok.style.display = "block";
      renderCarrito();
    } else {
      cuponAplicado = null;
      err.classList.add("visible");
      renderCarrito();
    }
  });

  renderCarrito();
});