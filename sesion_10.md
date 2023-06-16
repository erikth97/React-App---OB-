// Depuracion de Codigo en React
Debugging es el proceso de encontrar y eliminar errores en piezas de software. Literalmente significa quitar "bichos" o "bugs". Puede sonar un poco raro, pero en los programas de software, sobre todo los complejos, siempre hay errores. Es decir, que por mucho esfuerzo que hagamos para que nuestro programa no tenga errores, siempre habrá casos límite o condiciones que hagan que nuestro programa falle. Por tanto, vamos a tener que asumir que siempre habrá errores y vivir con ello, y tener siempre una herramienta donde tener un listado de errores (o issues) por solucionar.
Los errores se introducen en nuestro programa por muy diversas causas. Ya sea por desconocimiento del lenguaje y sus peculiaridades. Y por desconocimiento de otras herramientas o librerías usadas en nuestro programa. Por otro lado, podemos introducir errores también por no entender bien los requisitos de la aplicación, sucediendo esto mucho más a menudo de lo que se pudiera esperar. A veces el propio dominio del problema tiene mucha complejidad, o aunque no sea muy complejo el desarrollador siempre puede tener despistes de forma habitual o puntual por tema de cansancio.
Devtools breakpoints
Una herramienta sofisticada de debugging, es decir, para solucionar errores de código, son las DevTools de Chrome. En otros navegadores existen herramientas similares, pero nos centramos en esta sección vamos a ver cómo funcionan los breakpoints y herramientas asociadas en este navegador.
Un breakpoint o punto de interrupción es una forma de parar la ejecución de un código en un punto determinado. Al parar la ejecución en ese punto podremos inspeccionar todo el contexto de ejecución desde el valor de las variables en ese momento hasta la pila (stack) de funciones que se están ejecutando.
Podemos crear puntos de interrupción asociados a distintas situaciones donde queremos pasar la ejecución. Lo haremos siempre desde la pestaña de "Sources". Los más usados son
en una línea de código concreta
en respuesta a un evento, por ejemplo, un click
Cuando paramos la ejecución en un breakpoint podemos realizar distintas acciones
ejecutar la función línea a línea y ver los resultados
cuando una función se llama desde la actual podemos ver el resultado directamente o ejecutar la otra también paso a paso
inspeccionar el valor de variable locales, en el panel Scope
observar el valor de una watch expression, es decir, el valor de una expresión definidas en función de las variables del contexto con las que podemos hacer operaciones
En esta sección vamos a ver pasos a seguir para solucionar errores y en qué consiste cada uno.
1) Reproducir el error
Para poder solucionarlo, tenemos que ser capaces de reproducir el error. Por ejemplo, el error puede suceder al arrancar la página, solo cuando hago clic en un botón, o solo la quinta vez que hago clic. Por tanto, tengo que tener claro qué pasos tengo que dar para que se reproduzca. Como hemos hablado antes, reproducirlo va a ser mucho más complicado si depende del contexto. Por ejemplo, un error de rutas que no tengo en local pero que aparece al subir mi código a un servidor.
2) Aislar el error
Muchas veces podemos observar que tenemos un error pero no sabemos de dónde viene. Si es un error que se manifiesta en la consola, el paso natural es buscar el fichero y número de línea que ahí se indica. Pero a veces se dan situaciones más complicada. Por ejemplo, puede ser que el error sucede en una parte del programa pero debido a un fallo en otra parte. O que varios errores se manifiesten juntos. Para encontrar el origen del error cuando no sabemos de dónde viene es conseguir aislarlo.
Para aislar un error que no sabemos de dónde viene, lo mejor es ir descartando errores más generales que podrían estar sucediendo. Por ejemplo, tenemos una aplicación de compra que al añadir un producto mediante un botón no actualiza la cantidad total. En este caso no tenemos un error en la consola que nos diga dónde buscar porque es un error de comportamiento de la aplicación. Vamos a ir aislando desde errores más generales a errores más concretos:
Nos aseguramos que la web que estamos probando en el navegador corresponde al fichero fuente que estamos modificando; por ejemplo, escribiendo algo más en la página o haciendo un console.log nos aseguramos de estar viendo el resultado en el navegador del fichero fuente que creemos
Buscamos la función JS que responde al evento de ese botón. Nos aseguramos que esa función se ejecuta.
Buscamos el cálculo del nuevo precio, y comprobamos que es correcto
Comprobamos que se pinta correctamente en el DOM
3) Entender el error
Una vez que hemos identificado y aislado el error, es hora de entender por qué sucede. Antes de intentar solucionar el error debemos asegurarnos de entender por qué sucede. La razón va a depender mucho del error que sea, y en la siguiente sección veremos algunos tipos de errores en JavaScript y herramientas para solucionarlos. Algo que nos puede ayudar bastante a entender cuándo y por qué sucede un error es el stack trace, es decir, el listado de las llamadas a funciones donde ha sucedido el error. En este ejemplo, el error sucede en la función drawTotal, que es llamada por updateTotal que a su vez es llamada desde una función anónima.

4) Solucionar el error
Ya sabemos qué error está sucediendo y por qué: ya solo falta solucionarlo. Fácil de decir pero, en ocasiones, nada fácil de realizar. Toca desarrollar código para solucionar el problema. Muchas veces este paso nos cuesta más porque no acabamos de entender por qué sucede el error.


