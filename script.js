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

function mostrarCiudad(ciudadKey) {
    if (!ciudadKey) {
        $('#cityInfo').hide(); // función hide , oculta el contenedor (no tienes que ir jugando con el display:none)
        $('#accomodations').empty();
        $('#accomodationsInfo').hide();
        return;
    }

    const info = ciudades[ciudadKey];

    $('#cityInfo').show();
    $('#cityNombre').text(info.nombre);

    $('#cityImagen').attr('src', info.imagen).attr('alt', info.nombre);

    $('#cityDescripcion').text(info.descripcion);

    mostrarAlojamientos(ciudadKey);
}

async function mostrarAlojamientos(ciudadKey) {
    const $accomodationsDiv = $('#accomodations'); // querySelector
    $accomodationsDiv.empty(); // empty -> limpiar el contenedor

    try {
        const res = await fetch('https://bravabook.onrender.com/api/apartments/search?city=' + ciudadKey);
        const data = await res.json();

        $('#accomodationsInfo').show();
        $('#numAccomodations').text(data.length);

        data.forEach(a => {
            const $article = $('<article>').addClass('card').html(`
                <header>${a.title}</header>
                <a href="https://bravabook.onrender.com/apartment/${a._id}#reservation" style="text-decoration:none;color:inherit;">
                    <img src="${a.mainPhoto}" alt="${a.title}" style="border-radius:8px;" />
                    <footer><strong>Precio:</strong> ${a.price} €</footer>
                </a>
            `);
            $accomodationsDiv.append($article);
        });

        $accomodationsDiv.show(); // mostrar el contenedor
    } catch (error) {
        console.error("Error al obtener alojamientos:", error);
    }
}

$(document).ready(function () {
    $('#citySelector').on('change', function () {
        mostrarCiudad($(this).val());
    });
});
