
# El Blog de Pepa

<a href="https://ibb.co/Z6dRb53t"><img width="150"  src="https://i.ibb.co/hRsxTbkh/Chat-GPT-Image-Jul-16-2025-09-58-44-PM.png" alt="Chat-GPT-Image-Jul-16-2025-09-58-44-PM" border="0"></a>

Pepa ha creado un blog sobre estancias veraniegas en la Costa Brava.
La app de Pepa es una aplicación puramente Front End, que debes abrir con Live Server.

**Recomendación:** intentad hacer el ejercicio sin pedir explícitamente la solución a la IA.
Si tras 30 minutos por _iteración_ no podéis avanzar, podéis usar Copilot. 
Para cada iteración, se han adjuntado ejemplos de código usando ChatGPT que no dan una solución directa al ejercicio pero ayudan a resolverlo.

El **diseño** no tiene por qué quedar igual que en la demo (de hecho se parece demasiado al de BravaBook, pero eso es por usar PicoCSS para la maquetación 🫠)

# Arquitectura

**index.html**: Contiene el HTML estático de la app  
**script.js**: Contiene un objeto con la información sobre las dos ciudades sobre las que Pepa ha escrito información  
**style.css**: Fichero de estilos  

## Iteración 1

[Vídeo iteración 1](https://oscarm.tinytake.com/df/178f1c4/thumbnail?type=attachments&version_no=0&file_version_no=0&thumbnail_size=preview)

Puntos clave:

- Asociar eventos a elementos de control
- Estado de la aplicación
- Cambiar estilos en línea
- Rellenar de forma dinámica elementos del DOM

Habilita el selector de ciudad para que, al seleccionar cualquiera de las dos ciudades, se cargue la información correspondiente.

1. Asocia el evento 'change' al selector de ciudades
2. Cuando cambie el valor del selector, actualiza el contenedor #cityInfo con la información del objeto 'ciudades'

[Ejemplos creados con ChatGPT](https://chatgpt.com/share/6877f91f-bb08-8002-b900-69b982452b48)

## Iteración 2

[Vídeo iteración 2](https://oscarm.tinytake.com/df/178f20a/thumbnail?type=attachments&version_no=0&file_version_no=0&thumbnail_size=preview)

Puntos clave:

- Hacer una petición _fetch_ a un servidor externo
- Creación de nodos de forma dinámica

Pepa quiere consumir la API https://bravabook.onrender.com/api/apartments/search, que permite obtener apartamentos de la exitosa app de reservas turísticas BravaBook. Al seleccionar cualquiera de las dos ciudades, deberían aparecer todos los apartamentos de dicha ciudad a modo de recomendación de dónde alojarse. El endpoint permite buscar apartamentos por ciudad. Así, una petición GET a `https://bravabook.onrender.com/api/apartments/search?city=palamos` obtendrá un JSON con todos los apartamentos. Seguidamente, dichos apartamentos deben mostrarse dentro del contenedor #accomodations.

1. Al seleccionar una ciudad, se hace una llamada _fetch_ pasando como parámetro de la _query string_ la ciudad seleccionada
2. Debemos procesar la respuesta que nos devuelve la API y convertir el JSON a un array de objetos
3. Crea tantos apartamentos como objetos recibes de la llamada de la API y añádelos al contenedor #accomodations
4. Al hacer clic en cualquiera de los apartamentos, nos lleva a la página de BravaBook mostrando la vista detalle del apartamento. Por ejemplo: https://bravabook.onrender.com/apartment/6877ef2eda87b827a9a3b9c3


[Snippets de código útiles usando ChatGPT](https://chatgpt.com/share/6877fabb-d09c-8002-a074-78eeaa9cd642)

## Iteración BONUS - 1

Puntos clave:

- Estos derivados

Haz que el precio del apartamento se muestra de un color u otro dependiendo del precio:

1. Haz que aparezca el número de apartamentos totales que tiene cada ciudad

<img width="400" src="https://oscarm.tinytake.com/media/178fadc?filename=1752764918209_TinyTake17-07-2025-05-08-25_638883617162511949.png&sub_type=thumbnail_preview&type=attachment&width=1199&height=880" title="Powered by TinyTake Screen Capture"/><br>

2. Si el apartamento cuesta menos de 100€ por noche, mostrar el precio en verde
3. Si el apartamento cuesta más de 200€ por noche, mostrar el precio en rojo


## Iteración BONUS - 2

Puntos clave:

- Modificar el DOM sin necesidad de realizar nuevos fetch

Añade un selector de manera que podamos ordenar los apartamentos por precio ascendente o descendente.

## Iteración BONUS - 3

Adapta la app para que ahora consuma tu propia API de tu práctica.


