// Selección de elementos del DOM
const productosRow = document.querySelector(".row");
const verMas = document.querySelector(".verMas");
const searchInput = document.getElementById("search");
const categoriasConteiner = document.querySelector(".categoriasProductos");
const listaDeCategorias = document.querySelectorAll(".categorias");

// Creación y estilización del mensaje de "No hay productos"
const mensajeNoProductos = document.createElement("p");
mensajeNoProductos.textContent = "No hay productos";
mensajeNoProductos.style.display = "none";
mensajeNoProductos.style.color = "red";

// Añadir el mensaje al DOM
productosRow.parentElement.appendChild(mensajeNoProductos);

// Función para crear el HTML de un producto
const crearProductoHTML = ({ id, nombre, imagen, precio }) => `
  <div class="col">
    <div class="card">
      <div class="container-IMG">
        <img src="${imagen}" class="card-img-top" alt="Imagen de ${nombre}" />
      </div>
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">$ ${precio}</p>
        <button class="btn btn-primary" onclick="setProductId(${id})">VER PRODUCTO</button>
      </div>
    </div>
  </div>
`;

// Función para guardar el ID del producto y redirigir a la página de detalles
const setProductId = (id) => {
  localStorage.setItem("productId", JSON.stringify(id));
  window.location.href = "../pages/detalleDeProducto.html";
};

// Función para dividir los productos en partes
const dividirProdutosEnPartes = (size, listaProductos) => {
  let listaDeProductos = [];
  for (let i = 0; i < listaProductos.length; i += size) {
    listaDeProductos.push(listaProductos.slice(i, i + size));
  }
  return listaDeProductos;
};

// Inicializa `limiteDeProductos` y divide la lista de productos
const inicializarLimiteDeProductos = (listaProductos) => ({
  productos: dividirProdutosEnPartes(5, listaProductos),
  limiteDeProductos: dividirProdutosEnPartes(5, listaProductos).length,
  productosIndex: 0,
  filtroActivado: null,
});

// Función para renderizar la lista de productos
const renderizarProductos = (productos) => {
  if (productos.length === 0) {
    mensajeNoProductos.style.display = "block";
    productosRow.innerHTML = "";
  } else {
    mensajeNoProductos.style.display = "none";
    productosRow.innerHTML = productos.map(crearProductoHTML).join("");
  }
};

// Función para filtrar productos por nombre o categoría
const filtrarProductos = (termino) => {
  const listaProductos = obtenerListaProductos();
  const terminoLower = termino.toLowerCase();
  const productosFiltrados = listaProductos.filter(
    ({ nombre, categoria }) =>
      nombre.toLowerCase().includes(terminoLower) ||
      categoria.toLowerCase().includes(terminoLower)
  );
  renderizarProductos(productosFiltrados);
};

// Evento de búsqueda
searchInput.addEventListener("input", (e) => filtrarProductos(e.target.value));

// Función para mostrar más productos
const aumentarLimite = () => {
  const { productos, productosIndex } = limiteDeProductos;
  limiteDeProductos.productosIndex += 1;
  renderizarProductos(productos.slice(0, productosIndex + 1).flat());

  // Ocultar el botón "ver más" si se muestran todos los productos
  if (productosIndex + 1 >= productos.length) {
    verMas.style.display = "none";
  }
};

// Función para cambiar el estado del botón
const estadoDeBoton = (categoriaSeleccionada) => {
  listaDeCategorias.forEach((categoriasBtn) => {
    if (categoriasBtn.dataset.category === categoriaSeleccionada) {
      categoriasBtn.classList.add("activado");
    } else {
      categoriasBtn.classList.remove("activado");
    }
  });
};

// Función para aplicar el filtro de la categoría seleccionada
const estadoDeFiltro = (boton) => {
  const listaProductos = obtenerListaProductos();
  const categoria = boton.dataset.category;
  limiteDeProductos.filtroActivado = categoria !== "Todo" ? categoria : null;
  estadoDeBoton(categoria); // Cambiar el estado del botón
  productosRow.innerHTML = ""; // Limpiar los productos existentes
  if (limiteDeProductos.filtroActivado) {
    renderizarProductosFiltrados(); // Filtrar productos
    limiteDeProductos.productosIndex = 0;
  } else {
    renderizarProductos(listaProductos); // Mostrar todos los productos
  }
};

// Función para manejar el clic en un botón de categoría
const aplicarFiltro = ({ target }) => {
  if (!filtroDeBotonInactivo(target)) {
    return;
  }
  estadoDeFiltro(target);
};

// Función para renderizar los productos filtrados
const renderizarProductosFiltrados = () => {
  const listaProductos = obtenerListaProductos();
  const productosFiltrados = listaProductos.filter(
    (producto) => producto.categoria === limiteDeProductos.filtroActivado
  );
  renderizarProductos(productosFiltrados);
};

// Función para verificar si el botón no está activo
const filtroDeBotonInactivo = (elemento) => {
  return (
    elemento.classList.contains("categorias") &&
    !elemento.classList.contains("activado")
  );
};

// Vincular la función aplicarFiltro a los botones de categorías
listaDeCategorias.forEach((boton) => {
  boton.addEventListener("click", aplicarFiltro);
});

// Función para obtener la lista de productos desde el localStorage
const obtenerListaProductos = () => {
  const productosGuardados = localStorage.getItem("Productos");
  return productosGuardados ? JSON.parse(productosGuardados) : [];
};

// Inicializar la página
const iniciar = () => {
  const listaProductos = obtenerListaProductos();
  
  // Inicializa limiteDeProductos con los productos disponibles
  limiteDeProductos = inicializarLimiteDeProductos(listaProductos);
  
  // Si hay productos, renderizarlos
  if (listaProductos.length > 0) {
    renderizarProductos(limiteDeProductos.productos[0]);
  } else {
    mensajeNoProductos.style.display = "block";
  }
  
  verMas.addEventListener("click", aumentarLimite);
  categoriasConteiner.addEventListener("click", aplicarFiltro);
};

iniciar();
