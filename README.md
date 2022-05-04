# Pokedex-react-native

## Introducción
Para la contrucción de esta aplicación me basé en React native cli como framework para la creación, al igual que utilice Typescript como lenguaje de programación principal, fue desarrollado e inspeccionado para android, sin embargo, en otro contexto de desarrollo se puede optimizar para ios. 

## Decisiones de arquitectura
En cuanto a la arquitectura de la aplicacion utilice Hooks, ya que son funcionalidades que se pueden utilizar desde cualquier componente. La aplicacion tiene 2 pantallas (HomeScreen y PokemonScreen), las cuales tienen a su vez los componentes de tienen componentes
de FadeInImage para mostar una imagen desde una peticion ajax, Pokemon card para renderizar la card de un ppokemon en la pantalla Home, y Pokemon detalle el cual mostrar los detalles de cada pokemon una vez halla cargado la segunda pantalla.
Los servicios estan en los Hooks los cuales se ejecutan de manera asincronica y los llevo al componente para instanciarlos

## Depuracion en dispositivo fisico
Para depurar la aplicación en un dispositico android, es necesario instalar Android Studio (Solamente eso), luego instalar por medio de npm react-native-cli  de manera global. Luego conectar el celular por medio de usb, ir a las configuraciones -> sistema -> acerca del telefono -> presionar varias veces en el numero de complacion, luego ir a opciones de desarrollador y habilitar la dupuracion usb
Luego en la consola correr 'npx react-native run-android' y esperar 

## Depuracion en simulador de android studio
Para depurar en un simulador debemos abrir android studio, luego damos click en dispositivos virtuales, y creamos uno nuevo. Luego vamos a la consola instalamos react-native de manera global con npm y corremos el comando npx react-native run-android, el solo hara que en el simulador android se corra la aplicacion

