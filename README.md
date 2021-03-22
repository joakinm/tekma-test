# TekmaTest

Este proyecto fue generado con Angular, version 9.1.7. Es una aplicación de educación, con temarios y lecciones para los usuarios.
Rutas: 
/temario       Desde aqui puede visualisar los diferentes trimestres con las lecciones visualizadas, 
			   al clickear un trimestre, podemos navegar hacia las lecciones según la posicion de los trimestres, a sus lecciones
			   
/temario/:id   En esta ruta podemos ver las diferentes lecciones de cada temario, y si estan visualizadas, o no, 
			   al hacer click en una, vamos a un previsualizador de lecciones, con un mensaje

/leccion/:id   Tenemos un aviso con una leyenda "Antes de empezar..." y recomendaciones. El boton "Empezar pase" en un futuro redirigira a un video capacitorio,
			   por el momento, solo marca la lección como leída, y redirige a /temario 
			   
## Para correr la aplicación

Vaya con una consola hacia la carpeta raiz y escriba `npm i` para instalar todas las dependencias y librerias necesarias para que la aplicacion funcione. 
Corra `ng serve` para poder correr la aplicación.
abra su navegador y vaya a la dirección `http://localhost:4200/`. 
La aplicación se refresca cada vez que se guarda un cambio.
