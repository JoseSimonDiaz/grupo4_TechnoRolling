const listaProductos = [
    {
      id: 1,
      nombre: "Procesador Amd Ryzen 7 8700F Sin Video AM5",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "Procesadores",
      marca: "ryzen",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_06-06-2024-12-06-17-0000000000000730143316699.jpg",
      precio: 400.288
    },
    {
      id: 2,
      nombre: "Placa De Video Nvidia Geforce Evga RTX 3080 ",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "Placas de Video",
      marca: "geforce",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_29-04-2024-02-04-02-0000000000004250812442123.jpg", 
      precio: 859.645
    },
    {
      id: 3,
      nombre: "Memoria RAM Corsair 16GB",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "Memorias RAM",
      marca: "corsair",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_10-06-2024-06-06-21-0000000000000840006652182.jpg", 
      precio: 56776
    },
    {
      id: 4,
      nombre: "Disco Solido SSD",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "Almacenamiento",
      marca: "gibabyte",
      imagen: "https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/0000000000004719331806873.jpg", 
      precio: 50000
      
    },
    {
      id: 5,
      nombre: "Motherboard Amd Asus",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "Placas Madre",
      marca: "asus",
      imagen: "https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/0000000000004718017927185.jpg",
      precio: 300000 
    },
    {
      id: 6,
      nombre: "Fuente Certificada Sentey 650W 80 Plus",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "Fuentes de Poder",
      marca: "Sentey",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_11-03-2024-06-03-09-0000000000000812366026613.jpg",
      precio: 50000 
    },
    {
      id: 7,
      nombre: "Teclado USB Evga Z12 RGB Gamer 834-W0-12SP-K2",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "perifericos",
      marca: "evga",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_01-03-2024-06-03-53-0000000000004250812442031.jpg",
      precio: 50000 
    },
    {
      id: 8,
      nombre: "Auricular PC Gamemax HG3500 USB 7.1 RGB",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "perifericos",
      marca: "gamemax",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_19-04-2024-03-04-27-0000000000006933435007488.jpg",
      precio: 20000 
    },
    {
      id: 9,
      nombre: "Mouse USB Shenlong M788SP Gamer",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "perifericos",
      marca: "shelong",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_05-02-2024-05-02-30-0000000000007798135512071.jpg",
      precio: 5000
    },
    {
      id: 10,
      nombre: "Gabinete Gamer Gamemax Kreator X1 Fan",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "gabientes",
      marca: "gamemax",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_21-05-2024-12-05-52-0000000000006931858773195.png",
      precio: 50000 
    },
    {
      id: 11,
      nombre: "Gabinete Gamer Thermaltake S200",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "gabinetes",
      marca: "thermaltake",
      imagen: "https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/148_05-01-2023-03-01-18-0000000000004713227533645_1.jpg",
      precio: 50000 
    },
    {
      id: 12,
      nombre: "Monitor 27 Samsung Full HD VA Curvo",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "monitor",
      marca: "samsung",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_03-07-2024-01-07-10-0000000000008806088774657.jpg",
      precio: 100000 
    },
    {
      id: 13,
      nombre: "Procesador Intel Core I9 13900KF",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "Procesadores",
      marca: "intel",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_05-07-2024-03-07-10-0000000000005032037258623.jpg",
      precio: 200000 
    },
    {
      id: 14,
      nombre: "Procesador Amd Ryzen 3 3200G 4.0GHz AM4",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "Procesadores",
      marca: "ryzen",
      imagen: "https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/0000000000000730143309851.webp",
      precio: 50000 
    },
    {
      id: 15,
      nombre: "Procesador Intel Pentium Gold G6405",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "Procesadores",
      marca: "intel",
      imagen: "https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/0000000000005032037215497.jpg",
      precio: 50000 
    },
    {
      id: 16,
      nombre: "Placa De Video Radeon Asus RX 7600",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "Placas de Video",
      marca: "radeon",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_04-06-2024-01-06-07-0000000000004711387459225.jpg",
      precio: 100000 
    },{
      id: 17,
      nombre: "Refrigeracion Water Cooler Asus",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "refrigeracion", 
      marca: "asus",
      imagen: "https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/148_08-08-2023-06-08-14-4711387121252.jpg",
      precio: 100000 
    },
    {
      id: 18,
      nombre: "Refrigeracion Water Cooler Cooler Master MasterLiquid",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "refrigeracion", 
      marca: "cooler master",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_15-11-2023-01-11-22-0000000000004719512137703.jpg",
      precio: 100000 
    },
    {
      id: 19,
      nombre: "Pad Mouse Asus Rog Sheath Pink LTD XL",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "perifericos", 
      marca: "asus",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_14-03-2024-04-03-35-0000000000004718017233774.jpg",
      precio: 50000 
    },
    {
      id: 20,
      nombre: "Perifericos Mouse USB Logitech",
      stock: 12,
      descripcion: "texto fachero:D",
      categoria: "perifericos", 
      marca: "logitech",
      imagen: "https://www.qloud.ar/SITES/IMG/m-y-m-computacion-06-2020/0000000000000097855157553.jpg",
      precio: 100000 
    },
    {
      id: 21,
      stock: 12,
      descripcion: "texto fachero:D",
      nombre: "Perifericos Joystick Redragon ",
      categoria: "perifericos", 
      marca: "redragon",
      imagen: "https://statics.qloud.ar/m-y-m-computacion-06-2020/148_09-11-2023-04-11-32-0000000000006950376718952.png",
      precio: 20000 
    }
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
    localStorage.setItem('Productos', JSON.stringify(listaProductos));
   }