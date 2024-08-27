const crearCarousel = (imagenes) => {
  const div = document.createElement("div");
  div.id = "carouselExampleSlidesOnly";
  div.className = "carousel slide";
  div.setAttribute("data-bs-ride", "carousel");
  let innerHTML = '<div class="carousel-inner">';
  for (let i = 0; i < imagenes.length; i += 4) {
    const activeClass = i === 0 ? " active" : "";
    innerHTML += ` <div class="carousel-item${activeClass}"> <div class="d-flex"> ${imagenes
      .slice(i, i + 4)
      .map(
        (imagen) =>
          ` <div class="carousel-item-img"> <img src="${imagen.src}" class="d-block w-100 img-carousel" alt="${imagen.alt}"> </div>`)
      .join("")} 
      </div> 
    </div>`;
  }
  innerHTML += "</div>";
  div.innerHTML = innerHTML;
  document.getElementById("marcas").appendChild(div);
};

// Ejemplo de array de imágenes
const imagenes = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Logo_Razer_2017.png",
    alt: "Marca 1",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Intel-logo-2022.png",
    alt: "Marca 2",
  },
  { 
    src: "https://cdn.worldvectorlogo.com/logos/redragon.svg", 
    alt: "Marca 3" },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Logo_Razer_2017.png",
    alt: "Marca 4",
  },
  // { src: 'img5.jpg', alt: 'Marca 5' },
  // { src: 'img6.jpg', alt: 'Marca 6' },
  // { src: 'img7.jpg', alt: 'Marca 7' },
  // { src: 'img8.jpg', alt: 'Marca 8' },
  // { src: 'img9.jpg', alt: 'Marca 9' },
  // { src: 'img10.jpg', alt: 'Marca 10' },
  // { src: 'img11.jpg', alt: 'Marca 11' },
  // { src: 'img12.jpg', alt: 'Marca 12' }
];
crearCarousel(imagenes);

// { src: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Logo_Razer_2017.png', alt: 'Marca 1' },
// { src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Intel-logo-2022.png', alt: 'Marca 2' },
// { src: 'https://cdn.worldvectorlogo.com/logos/redragon.svg', alt: 'Marca 3' },
// { src: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Logo_Razer_2017.png', alt: 'Marca 4' },
