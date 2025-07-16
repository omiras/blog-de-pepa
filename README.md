# El Blog de Pepa

Pepa ha creado un blog sobre estancias veraniegas en la Costa Brava.
La app de Pepa es una aplicación puramente Front End, que debes abrir con Live Server.

Recomendación: intentad hacer el ejercicio sin pedir explícitamente solucionarlo a la IA.
Si tras 30 minutos por Iteración no podéis avanzar, podéis usar Copilot. 
Para cada iteración, se han adjuntado ejemplos de código usando Chat GPT que no dan una solución directa al ejercicio pero ayudan a resolverlo

# Arquitectura

**index.html**: Contiene el HTML estático de la app  
**script.js**: Contiene un objeto con la información sobre las dos ciudades sobre la que Pepa ha escrito información  
**style.css**: Fichero de estilos  

## Iteración 1

Puntos claves:

- Asociar eventos a elementos de control
- Estado de la aplicación
- Cambiar estilos en línea
- Rellenar de forma dinámica elementos del DOM

Habiltia el selector de ciudad para que al seleccionar cualquiera de las dos ciudades, se cargue la información correspondiente.

[Ejemplos creados con Chat GPT](https://chatgpt.com/share/6877f91f-bb08-8002-b900-69b982452b48)

## Iteración 2

Puntos claves:

- Hacer una petición _fetch_ a un servidor externo
- Creación de nodos de forma dinámica


Pepa quiere consumir la API https://bravabook.onrender.com/api/apartments/search que permite obtener apartamentos de la exitosa app de reservas turisticas BravaBook Al seleccionar cualquiera de las dos ciudades, debería aparecer todos los apartamentos de dicha ciudad a modo de recomendación de donde alojarse. El endpoint permite buscar apartamentos por ciudad. Así, una petición GET `https://bravabook.onrender.com/api/apartments/search?city=palamos` , obtendrá un JSON con todos los apartamentos. Seguidamente, dichos apartamentos deben mostrarse dentro del contenedor #accomodations

[Snippets de código útiles usando Chat GPT](https://chatgpt.com/share/6877fabb-d09c-8002-a074-78eeaa9cd642)

## Iteración BONUS

Puntos clave:

- Modificar DOM sin necesidad de realizar nuevos fetch

Añade un selector de manera que podamos ordenar los apartamentos por precio ascendente o descendente

## Iteración BONUS

Adapta la app para que ahora consuam tu propia API de tu práctica.


