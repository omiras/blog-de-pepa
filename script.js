// Información de las ciudades
const ciudades = {
    palamos: {
        nombre: "Palamós",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7S9XTzYJAo90itEe4avmv2JyFs6pcgnvIw&s",
        descripcion: "Palamós es una localidad costera de la Costa Brava, conocida por sus playas y su puerto pesquero. Es famosa por sus gambas y su ambiente marinero."
    },
    blanes: {
        nombre: "Blanes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/BLANES_DONDE_COMIENZA_LA_%29%28%28%28%28%28%C2%BA%29_COSTA_BRAVA%28%C2%BA%29%29%29%29%29%28_-_panoramio.jpg/330px-BLANES_DONDE_COMIENZA_LA_%29%28%28%28%28%28%C2%BA%29_COSTA_BRAVA%28%C2%BA%29%29%29%29%29%28_-_panoramio.jpg",
        descripcion: "Blanes es la puerta de entrada a la Costa Brava, famosa por su jardín botánico y su animado paseo marítimo. Sus playas y calas son muy apreciadas por los visitantes."
    }
};

// Función para mostrar la información de la ciudad seleccionada
function mostrarCiudad(ciudadKey) {

    if (!ciudadKey) {
        document.querySelector('#cityInfo').style.display = "none";
        document.querySelector('#accomodations').innerHTML = "";
        document.querySelector('#accomodationsInfo').style.display = "none";
        return;
    }

    const info = ciudades[ciudadKey];
    document.querySelector('#cityInfo').style.display = "block";
    document.querySelector('#cityNombre').textContent = info.nombre;
    const img = document.querySelector('#cityImagen');
    img.src = info.imagen;
    img.alt = info.nombre;
    document.querySelector('#cityDescripcion').textContent = info.descripcion;
    mostrarAlojamientos(ciudadKey);
}

// Función para mostrar alojamientos de la ciudad seleccionada
async function mostrarAlojamientos(ciudadKey) {
    const accomodationsDiv = document.querySelector('#accomodations');
    accomodationsDiv.innerHTML = '';
    const res = await fetch('https://bravabook.onrender.com/api/apartments/search?city=' + ciudadKey);
    const data = await res.json();
    
    document.querySelector('#accomodationsInfo').style.display = "block";
    document.querySelector('#numAccomodations').textContent = data.length;
    
    for (const a of data) {
        const article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = `
                <header>${a.title}</header>
                <a href="https://bravabook.onrender.com/apartment/${a._id}#reservation" style="text-decoration:none;color:inherit;">
                    <img src="${a.mainPhoto}" alt="${a.title}" style="border-radius:8px;" />
                    <footer><strong>Precio:</strong> ${a.price} €</footer>
                </a>
            `;
        accomodationsDiv.appendChild(article);
    }

    accomodationsDiv.style.display = 'block';
}
// Inicializar selector y evento
const selector = document.querySelector('#citySelector');
mostrarCiudad(selector.value); // Mostrar la ciudad inicial
selector.addEventListener('change', function (e) {
    mostrarCiudad(e.target.value);
});
