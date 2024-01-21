# POKEAPP

<p align="center"><a href="" target="_blank" ><img width="220" height="180"src="./assets/itr.jpg" alt="logo" style="max-width: 100%;border-radius: 10px;padding: 5px;"></a></p>

Aplicación que nos permite listar todos los pokemones y poder visualizar el detalle de cada uno.

## Consignas

Como consigna debo realizar una app que permita brindar algo de lo aprendido en el curso de react native, brindado por ITR/UTN.
El cual esta dictado por el ***Ing. Marcelo Bettini***.

### Prerrequisitos para ejecutar el proyecto 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Tener nodejs instalado en nuestra pc
- Si queremos correrlo en plataforma android o ios, debemos contar con un emulador instalado en nuestra pc. Se lo puede crear con android studio (https://developer.android.com/studio?gclsrc=ds)
- Si queresmos correrlo en plataforma web, debemos tener instalado un navegador web (ej, chrome, mozilla, otros...)

## Iniciar Proyecto 🚀

Primero, para ejecutar el proyecto. Debemos correr el siguiente comando:

```bash
npm install
# o
yarn install
```

NPM o YARN son una herramienta fundamental en el desarrollo con JavaScript. Consisten en un administrador de paquetes que permite a los desarrolladores de JavaScript trabajar con lo que llamamos dependencias.

## Ejecutando las Pruebas ⚙️

Para correr nuestro proyecto en un emulador android (El utilizado por mí)

```bash
npm run android
# o
yarn run android
```

Para correr nuestro proyecto en un emulador ios

```bash
npm run ios
# o
yarn run ios
```

Para correr nuestro proyecto en web

```bash
npm run web
# o
yarn run web
```

## Trabajo realizado 🛠️

### React Native
React Native es un framework JavaScript para crear aplicaciones reales nativas para iOS y Android, basado en la librearía de JavaScript React.
Para poder desarollar la aplicación, me llevo mucho tiempo ver la documentación para poder trabajar bien con los componentes que tiene definidos y algunos problemas que me surgieron, de los cuales aún no los conocía.
Unos de los problemas que tuve es que lo estaba corriendo en modo 'web' al proyecto porque me siento mas cómodo cuando estoy realizando muchos cambios y la api me traía imagenes en formato .svg los cuales se visualizaban de manera correcta, pero a la vez lo estaba visualizando en mi emulador android, pero no podia visualizar nada y contaba con un error. Tuve que leer la documentacion y la cual descubrí de que debia utilizar el componente SvgUri de "react-native-svg" que me permite visualizar ese formato. Pero tambien descubrí que al utilizarlo, se me rompía en web, de lo cual lo solucioné poniendo un condicional (Platform.OS === "web" || format !== "svg") que si no era un formato svg o estaba en web, debia utilar el componente Image, de lo contrario el componente SvgUri, para no tener algun problema.
En mi trabajó quise agregarle tema de oscuro y claro a mi app, para sumar algo como iniciativa, de lo cual utilicé ThemeProvider de "@react-navigation/native". Aquí tambien me llevó su tiempo, porque queria hacerlo de manera correcta para obtener los temas y no tener que utilizar algun context creado con 'useContext', asi poder aprovechar todo de ThemeProvider. Lo solucioné creandome mis propios temas 'dark' y 'light' y poder controlarlos con useTheme de "@react-navigation/native" que te permite obtener cual tema esta actualmente.

### Typescript
TypeScript es un lenguaje de programación de código abierto, es decir, de acceso y distribución libre, pensado para ejecutar grandes proyectos y que permite trabajar de manera estructurada.
Me decidí por utilizar este lenguaje porque es un lenguaje que se esta utilizando bastante, el cual me siento cómodo y me gusta.

### Expo
Expo es un marco de trabajo que opera sobre React Native para facilitar el desarrollo con esta tecnología.

### Expo-router
Expo Router es una biblioteca de enrutado para aplicaciones nativas Universal React construidas con Expo.
Decidí llevar a cabo con la biblioteca porque nunca la habia utilizado y lo tomé como una iniciativa tenerla en cuenta porque actualmente me encuentro en 2 proyectos que utilizamos next.js que trabaja con el mismo sistema de enrutamiento pero en otro lenguaje de desarrollo.


### zustand
Redux y Zustand son dos herramientas populares de gestión de estado en aplicaciones React.
Lo tomé como iniciativa utilizar zustand porque es una herramienta que nunca habia utilizado, y me pareció muy bien tenerlo presente para futuros proyectos que llevaré a cabo.

### API
En la web, podemos encontrar con muchas APIs gratuitas que podia utilizar para este proyecto. Me decidí por una api gratuita de pokemon que ya la habia utilizado para un proyecto en otro lenguaje de programación, y tambien contaba con el conocimiento de otra api complementaria para poder obtener las fotos de cada pokemon.
A las consultas la llevé a cabo con fetch porque era algo simple.

## Consejos que se debe tener en cuenta 📝
A este proyecto lo llevé a cabo en menos de 24hs por falta de tiempo. Algo que se debe tener en cuenta como buenas practicas, es manejar mejor el tema de estilos. Los cuales muchos componentes tienen los estilos definidos como objeto en la propiedad 'style' y no tanto utilizando StyleSheet o algun otro manejador de estilos.

Algo que no llegué a desarrolar es una pagina que tenga detalles de mi perfil, la cual podria acceder mediante un menu desplegable en el header que contaria con 'ir a mi perfil' y el icono de modo oscuro/claro. Solo quedo el icono de oscuro/claro.

## Wiki 📖

- [Expo](https://docs.expo.dev/router/installation/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [API Pokemon](https://pokeapi.co/)
- [API Pokemon photo](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world)
- [zustand](https://github.com/pmndrs/zustand)

## Versionado 📌

Usamos [Git](https://git-scm.com) para el versionado. Para las versiones disponibles, ve las [etiquetas en este repositorio](https://github.com/bertini91/pokeapp).

### Desarrollador ✒️

[Nicolás Bertini Argañaras](https://www.linkedin.com/in/nicolas-bertini-argañaras/)
