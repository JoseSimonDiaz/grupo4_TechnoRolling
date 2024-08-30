let cuerpoTabla = document.querySelector("tbody");
let contador = document.getElementById("contador");

// Función para obtener la lista de productos desde localStorage
function obtenerProductos() {
    const productosGuardados = localStorage.getItem("Productos");
    return productosGuardados ? JSON.parse(productosGuardados) : [];
}

// Función para guardar la lista de productos en localStorage
function guardarProductos(productos) {
    localStorage.setItem("Productos", JSON.stringify(productos));
}

// Función para crear la tabla de productos
function crearTabla() {
    let listaProductos = obtenerProductos(); // Obtener productos desde localStorage
    cuerpoTabla.innerHTML = "";
    contador.innerText = "Productos registrados: " + listaProductos.length;

    // Verificar si hay productos
    if (listaProductos.length === 0) {
        cuerpoTabla.innerHTML = "<tr><td colspan='9'>No hay productos registrados.</td></tr>";
        return;
    }

    listaProductos.forEach((producto) => {
        let fila = document.createElement("tr");
        let celdas = `
            <td><img src="${producto.imagen}" alt="" style="width: 50px;"></td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.marca}</td>
            <td>${producto.stock}</td>
            <td>${producto.precio}</td>
            <td>${producto.categoria}</td>
            <td>${producto.id}</td>
            <td>
                <button class="btn btn-danger" onclick="eliminarProducto(${producto.id})">
                    <i class='bx bx-trash lx-lg'></i>
                </button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="prepararEdicion(${producto.id})">
                    <i class='bx bx-pencil' style='color:#fff'></i>
                </button>
            </td>
        `;
        fila.innerHTML = celdas;
        cuerpoTabla.appendChild(fila);
    });
}

// Función para eliminar un producto
function eliminarProducto(id) {
    let listaProductos = obtenerProductos();
    let index = listaProductos.findIndex((item) => item.id === id);
    
    if (index >= 0) {
        let confirmacion = confirm(`¿Estás seguro de eliminar a ${listaProductos[index].nombre}?`);
        if (confirmacion) {
            listaProductos.splice(index, 1); // Eliminar el producto
            guardarProductos(listaProductos); // Actualizar el localStorage
            crearTabla(); // Actualizar la tabla
        }
    }
}

// Función para preparar la edición de un producto (cargar datos en el modal)
function prepararEdicion(id) {
    let listaProductos = obtenerProductos();
    let producto = listaProductos.find((item) => item.id === id);
    
    if (producto) {
        document.getElementById("editarNombre").value = producto.nombre;
        document.getElementById("editarDescripcion").value = producto.descripcion;
        document.getElementById("editarMarca").value = producto.marca;
        document.getElementById("editarStock").value = producto.stock;
        document.getElementById("editarPrecio").value = producto.precio;
        document.getElementById("editarCategoria").value = producto.categoria;
        document.getElementById("editarId").value = producto.id;
    }
}

// Función para editar un producto
function editarProducto() {
    let listaProductos = obtenerProductos();
    let id = parseInt(document.getElementById("editarId").value);
    let producto = listaProductos.find((item) => item.id === id);

    if (producto) {
        producto.nombre = document.getElementById("editarNombre").value;
        producto.descripcion = document.getElementById("editarDescripcion").value;
        producto.marca = document.getElementById("editarMarca").value;
        producto.stock = document.getElementById("editarStock").value;
        producto.precio = document.getElementById("editarPrecio").value;
        producto.categoria = document.getElementById("editarCategoria").value;

        guardarProductos(listaProductos); // Actualizar el localStorage
        crearTabla(); // Actualizar la tabla

        // Cerrar el modal de edición
        const modal = bootstrap.Modal.getInstance(document.getElementById("modalEditar"));
        modal.hide();
    }
}

// Inicializar la tabla al cargar la página
crearTabla();
