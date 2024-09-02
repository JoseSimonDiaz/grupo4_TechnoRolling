

const showProductId = () => {
  const productId = JSON.parse(localStorage.getItem("productId"));
  const producto = listaProductos.find((producto) => producto.id === productId);
  console.log(producto);
  return producto
};


// renderizarProducto()

const renderProduct = () => {
    const defaultImgPath = '';
    const product = showProductId();
    const productIdHTML = document.getElementById('productId');

productIdHTML.innerHTML += `
<section class="detalleProducto">
                <div class="conteiner_image">
                  <img src="${product.imagen}" alt="imagenProduct">                  
                </div>
                    <div class="detalleDescripcion">
                      <h1>${product.nombre}</h1>
                        <h3>${product.descripcion}</h3>
                       <p>Cantidad en stock: <span id="span"> ${product.stock}</span></p>
                       <p>Categoria: <span id="span">${product.categoria}</span></p>
                        <div class="precio">
                          <p>$<span>${product.precio}</span></p>
                          <button class="comprar" src=""><a href="../pages/404.html">COMPRAR</a></button>
                        </div>
                        <div class="envios">
                          <i  class='bx bxs-truck bx-lg'></i>
                          <h3>Envios a todo el pais</h3>
                        </div>
                    </div>
          </section>`
     
};

renderProduct();