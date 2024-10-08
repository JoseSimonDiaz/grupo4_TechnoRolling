const listaProductos = [
  {
      id: 1,
      nombre: "Procesador Amd Ryzen 7 8700F Sin Video AM5",
      stock: 12,
      descripcion: "Potente procesador para gaming y multitarea.",
      categoria: "Procesadores",
      marca: "ryzen",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_06-06-2024-12-06-17-0000000000000730143316699.jpg",
      precio: 400.288
  },
  {
      id: 2,
      nombre: "Placa De Video Nvidia Geforce Evga RTX 3080 ",
      stock: 12,
      descripcion: "Tarjeta gráfica de alto rendimiento para juegos.",
      categoria: "Placas de Video",
      marca: "geforce",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_29-04-2024-02-04-02-0000000000004250812442123.jpg", 
      precio: 859.645
  },
  {
      id: 3,
      nombre: "Memoria RAM Corsair 16GB",
      stock: 12,
      descripcion: "Memoria rápida para un rendimiento superior.",
      categoria: "Memorias RAM",
      marca: "corsair",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_10-06-2024-06-06-21-0000000000000840006652182.jpg", 
      precio: 56776
  },
  {
      id: 4,
      nombre: "Disco Solido SSD",
      stock: 12,
      descripcion: "Almacenamiento veloz y confiable.",
      categoria: "Almacenamiento",
      marca: "gibabyte",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_20-07-2024-11-07-22-0000000000006974202725549.jpg", 
      precio: 50000
  },
  {
      id: 5,
      nombre: "Motherboard Amd Asus",
      stock: 12,
      descripcion: "Placa madre robusta para sistemas AMD.",
      categoria: "Placas Madre",
      marca: "asus",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_20-07-2024-11-07-22-0000000000006974202725549.jpg",
      precio: 300000 
  },
  {
      id: 6,
      nombre: "Fuente Certificada Sentey 650W 80 Plus",
      stock: 12,
      descripcion: "Fuente de poder eficiente y segura.",
      categoria: "Fuentes de Poder",
      marca: "Sentey",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_11-03-2024-06-03-09-0000000000000812366026613.jpg",
      precio: 50000 
  },
  {
      id: 7,
      nombre: "Teclado USB Evga Z12 RGB Gamer 834-W0-12SP-K2",
      stock: 12,
      descripcion: "Teclado gamer con iluminación RGB.",
      categoria: "perifericos",
      marca: "evga",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_01-03-2024-06-03-53-0000000000004250812442031.jpg",
      precio: 50000 
  },
  {
      id: 8,
      nombre: "Auricular PC Gamemax HG3500 USB 7.1 RGB",
      stock: 12,
      descripcion: "Auriculares con sonido envolvente y RGB.",
      categoria: "perifericos",
      marca: "gamemax",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_19-04-2024-03-04-27-0000000000006933435007488.jpg",
      precio: 20000 
  },
  {
      id: 9,
      nombre: "Mouse USB Shenlong M788SP Gamer",
      stock: 12,
      descripcion: "Mouse gamer preciso y ergonómico.",
      categoria: "perifericos",
      marca: "shelong",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_05-02-2024-05-02-30-0000000000007798135512071.jpg",
      precio: 5000
  },
  {
      id: 10,
      nombre: "Gabinete Gamer Gamemax Kreator X1 Fan",
      stock: 12,
      descripcion: "Gabinete espacioso con excelente ventilación.",
      categoria: "gabientes",
      marca: "gamemax",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_21-05-2024-12-05-52-0000000000006931858773195.png",
      precio: 50000 
  },
  {
      id: 11,
      nombre: "Gabinete Gamer Thermaltake S200",
      stock: 12,
      descripcion: "Gabinete con diseño elegante y funcional.",
      categoria: "gabinetes",
      marca: "thermaltake",
      imagen: "https://fullh4rd.com.ar/img/productos/6/gabinete-thermaltake-s200-tg-3-fan-argb-black-0.jpg",
      precio: 50000 
  },
  {
      id: 12,
      nombre: "Monitor 27 Samsung Full HD VA Curvo",
      stock: 12,
      descripcion: "Monitor curvo para una experiencia inmersiva.",
      categoria: "monitor",
      marca: "samsung",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_03-07-2024-01-07-10-0000000000008806088774657.jpg",
      precio: 100000 
  },
  {
      id: 13,
      nombre: "Procesador Intel Core I9 13900KF",
      stock: 12,
      descripcion: "Procesador de alta gama para tareas exigentes.",
      categoria: "Procesadores",
      marca: "intel",
      imagen: "https://www.topcomputacion.com.ar/wp-content/uploads/2023/10/intel_core_i9_13900kf1.jpg",
      precio: 200000 
  },
  {
      id: 14,
      nombre: "Procesador Amd Ryzen 3 3200G 4.0GHz AM4",
      stock: 12,
      descripcion: "Procesador económico con gráficos integrados.",
      categoria: "Procesadores",
      marca: "ryzen",
      imagen: "https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-3-3200g-vega-8-0.jpg",
      precio: 50000 
  },
  {
      id: 15,
      nombre: "Procesador Intel Pentium Gold G6405",
      stock: 12,
      descripcion: "Procesador básico para tareas cotidianas.",
      categoria: "Procesadores",
      marca: "intel",
      imagen: "https://www.venex.com.ar/products_images/1626379088_a6s54f.jpg",
      precio: 50000 
  },
  {
      id: 16,
      nombre: "Placa De Video Radeon Asus RX 7600",
      stock: 12,
      descripcion: "Placa gráfica potente para gaming.",
      categoria: "Placas de Video",
      marca: "radeon",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_04-06-2024-01-06-07-0000000000004711387459225.jpg",
      precio: 100000 
  },
  {
      id: 17,
      nombre: "Refrigeracion Water Cooler Asus",
      stock: 12,
      descripcion: "Sistema de enfriamiento líquido eficiente.",
      categoria: "refrigeracion", 
      marca: "asus",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_698321-MLU74481538203_022024-O.webp",
      precio: 100000 
  },
  {
      id: 18,
      nombre: "Refrigeracion Water Cooler Cooler Master MasterLiquid",
      stock: 12,
      descripcion: "Refrigeración líquida de alto rendimiento.",
      categoria: "refrigeracion", 
      marca: "cooler master",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_15-11-2023-01-11-22-0000000000004719512137703.jpg",
      precio: 100000
  },
  {
      id: 19,
      nombre: "Refrigeracion Water Cooler Gamdias",
      stock: 12,
      descripcion: "Refrigeración de alto rendimiento.",
      categoria: "refrigeracion", 
      marca: "gamdias",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_698321-MLU74481538203_022024-O.webp",
      precio: 100000  
  },
  {
      id: 20,
      nombre: "Refrigeracion Water Cooler Gamdias",
      stock: 12,
      descripcion: "Refrigeración de alto rendimiento.",
      categoria: "refrigeracion", 
      marca: "gamdias",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_698321-MLU74481538203_022024-O.webp",
      precio: 100000 
  },
  {
      id: 21,
      nombre: "Refrigeracion Water Cooler Gamdias",
      stock: 12,
      descripcion: "Refrigeración de alto rendimiento.",
      categoria: "refrigeracion", 
      marca: "gamdias",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_698321-MLU74481538203_022024-O.webp",
      precio: 100000 
  },
  
];

//   const dividirProdutosEnPartes = (size) => {
//     let listaDeProductos = [];
//     for (let i = 0; i < listaProductos.length; i += size) {
//         listaDeProductos.push(listaProductos.slice(i, i + size));
//     }
//     return listaDeProductos;
// };

//   const limiteDeProductos = {
//     productos: dividirProdutosEnPartes(5),
//     limiteDeProductos: dividirProdutosEnPartes(5).length,
//     productosIndex: 0,
//     filtroActivado: null,
//   }

if (!localStorage.getItem('Productos')) { 
  localStorage.setItem('Productos', JSON.stringify(listaProductos)) || [];
}
