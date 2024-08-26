let cuerpoTabla = document.querySelector("tbody");
let contador = document.getElementById('contador');

// Función para crear la tabla de productos
function crearTabla() {
    cuerpoTabla.innerHTML = '';
    contador.innerText = "Productos registrados: " + listaProductos.length;

    // Verificar si hay productos
    if (listaProductos.length === 0) {
        cuerpoTabla.innerHTML = "<tr><td colspan='9'>No hay productos registrados.</td></tr>";
        return;
    }

    listaProductos.forEach((producto) => {
        let fila = document.createElement('tr');

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
                <button class="btn btn-danger" onclick="eliminarProducto(${producto.id})" >
                    <i class='bx bx-trash lx-lg'></i>
                </button>
                <button type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#modalEditar">
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
    let index = listaProductos.findIndex(item => item.id === id);

    if (index >= 0) {
        let confirmacion = confirm(`¿Estás seguro de eliminar a ${listaProductos[index].nombre}?`);
        if (confirmacion) {
            listaProductos.splice(index, 1);
            localStorage.setItem('productos', JSON.stringify(listaProductos)); 
            crearTabla();
        }
    }
}

// Función para editar un producto


// Inicializar la tabla al cargar la página
crearTabla();