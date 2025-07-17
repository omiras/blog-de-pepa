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


    // Si selecionamos la opción "----", "reseteamos" todos los contenedores
    if (!ciudadKey) {
        document.querySelector('#cityInfo').style.display = "none";
        document.querySelector('#accomodations').innerHTML = "";
        document.querySelector('#accomodationsInfo').style.display = "none";
        return;
    }

    // Obtenemos el objeto "palamos" o "blanes"
    const info = ciudades[ciudadKey];

    // Modificamos estilos en línea para que se vea el contenedor #cityInfo y ponemos el nombre de la ciudad seleccionada en la propiedad .textContent del objeto del DOM #cityNombre. Puesto que "info" es un objeto, debemos usar la notación "." para acceder a la propiedad "nombre"
    document.querySelector('#cityInfo').style.display = "block";
    document.querySelector('#cityNombre').textContent = info.nombre;
    
    // Rellenamos los atributo "src" (url de la imagen) y "alt" (texto alternativo)
    const img = document.querySelector('#cityImagen');
    img.src = info.imagen;
    img.alt = info.nombre;

    // Rellenamos el contenedor del DOM donde debe ir la descripción de la ciudad escogida
    document.querySelector('#cityDescripcion').textContent = info.descripcion;

    mostrarAlojamientos(ciudadKey);
}

// Función para mostrar alojamientos de la ciudad seleccionada
async function mostrarAlojamientos(ciudadKey) {
    const accomodationsDiv = document.querySelector('#accomodations');

    // Esta operación "limpia" todo el contenido del contenedor #accomodations
    accomodationsDiv.innerHTML = '';

    // Realizamos una petición GET a la API
    const res = await fetch('https://bravabook.onrender.com/api/apartments/search?city=' + ciudadKey);
    // convertimos el JSON a un array de objetos
    const data = await res.json();
    
    // Numero de apartamentos que hemos traido de la API. Puesto que "data" es un array, usamos la propiedad .length para conocer su tamaño
    document.querySelector('#accomodationsInfo').style.display = "block";
    document.querySelector('#numAccomodations').textContent = data.length;
    
    // Para cada apartamento del array de objetos
    for (const a of data) {

        // Creamos un nuevo nodo de tipo "article"
        const article = document.createElement('article');

        // le añadimos la clase CSS 'card'
        article.classList.add('card');

        // Mediante el uso de template strings, creamos HTML De forma dinámica con toda la información del apartamento
        article.innerHTML = `
                <header>${a.title}</header>
                <a href="https://bravabook.onrender.com/apartment/${a._id}#reservation" style="text-decoration:none;color:inherit;">
                    <img src="${a.mainPhoto}" alt="${a.title}" style="border-radius:8px;" />
                    <footer><strong>Precio:</strong> ${a.price} €</footer>
                </a>
            `;

        // Añadimos el nodo como hijo del contenedor #accomodations (nos acordamos que HTML es una estructura de árbol)
        accomodationsDiv.appendChild(article);
    }

    // Cambiamos el estilo en linea (atributo style) para pasar de none-->block
    accomodationsDiv.style.display = 'block';
}
// Inicializar selector y evento
const selector = document.querySelector('#citySelector');
mostrarCiudad(selector.value); // Mostrar la ciudad inicial
selector.addEventListener('change', function (e) {
    // Recordar que el objeto 'event' contiene toda la información sobre el evento que se acaba de producir, entre otra, el valor seleccionado en el <select> por el usuario
    mostrarCiudad(e.target.value);
});
