# Plantas

Este proyecto implementa una aplicación para almacenar plantas. Consta de dos partes: la primera, dónde se inserta el nombre de la planta y elegimos el tipo de la misma y la opción de borrar o guardar la planta; la segunda, un listado de las plantas que vamos creando con l opción de eliminarlas de la lista o marcarlas como favorita.

## Instalar Proyecto

Usamos el comando `npm install -g @angular/cli` para instalar Angular. A continuación usamos `ng new plantas` para la instalación del proyecto /la aplicación junto con todos sus archivos.

## Instalar Tailwind CSS

Accedemos a la carpeta que contiene nuestro proyecto /aplicación mediante `cd plantas` y usamos el comando `npm install -D tailwindcss postcss autoprefixer` para instalar Tailwind CSS y sus dependencias. A continuación usamos `npx tailwindcss init` el cual va a crear el archivo de configuración de Tailwind que encontraremos con el nombre `tailwind.config.js`.

## Instalar Componentes
Usamos el comando `ng generate component choice /list` o de manera abreviada `ng g c choice /list` para generar los componentes que vamos a usar los cuales son elementos reutilizables. Estos se instalan en una carpeta con cuatro archivos distintos de los cuales vamos a hacer uso de dos de ellos: el .html, el que se va a visualizar en la interfaz de usuario y el .ts, contiene las propiedades que se van a usar en la vista (HTML) y los métodos, que será las acciones que se ejecutarán en la vista.

## Instalar Interfaz
Usamos el comando `ng generate interface data` o de manera abreviada `ng g i data` para generar la interfaz que va a determinar propiedades que deben ser implementados luego por uno o más archivos.

Esto nos va a servir para indicar al array que tenemos en el componente, en el cual vamos a almacenar las plantas que se vayan creando, que tienen que que tener las propiedades que se determinan en la interfaz para poder crearlo.

## Instalar Servicio
Usamos el comando `ng generate service data` o de manera abreviada `ng g s data` para generar el servicio el cual se encarga de controlar la información, desde obtenerla, almacenarla, actualizarla y compartirla con los componentes.

Esto nos va a servir a la hora de generar el array de las plantas en el componente choice, poder llamarlo desde el componente list y de esta manera los muestre y los actualice de acuerdo a la configuración que le hayamos dado, en nuestro caso, orden alfabético. De tal manera que es el servicio el encargado de mandarle el array del componente choice al componente list para que este muestre los elementos conforme se van creando.

## Visualizar Aplicación
Usamos el comando `ng serve` o `ng serve --open` de tal manera que abre directamente el navegador. Otra forma de acceder es usando las teclas `Ctrl + C` o bien `Ctrl + click` sobre la dirección que aparece o incluso acceder directamente desde el navegador con la dirección `http://localhost:4200/`. Esto nos va a permitir visualizar la aplicación creada y a la hora de realizar cambios se actualiza automáticamente.
