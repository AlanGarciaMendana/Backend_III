
# BackEnd III

Proyecto de BackEnd III

##Funcionamiento del servidor

Para iniciar el servidor se debe seguir los siguientes pasos:
1- Descargar e instalar PostMan
2- descargar la carpeta Backend_III
3- Abrir la carpeta en Visual Studio Code
4- Instalar los paquetes de dependencias bajo el comando "NPM I"
5- Tipear en consola el siguiente comando "NPM RUN DEV"
6- Abrir el explorador de internet y escribir la siguiente ruta localhost:8080/
7- Para crear los usuarios ingresar la siguiente ruta "http://localhost:8080/api/mocks/mockinguser"
8- Para agregar usuarios y pets abrir Postman y por medio de una peticion POST con la siguente ruta "http://localhost:8080/api/mocks/generateData?users=(indicar la cantidad)&pets=(indicar la cantidad)"
9- Para visualizar la lista actualizada de usuarios y pets ingresar en el explorador la ruta "http://localhost:8080/api/mocks/generateData"

## 1er Entrega modulo I

-Se crea app.js con el puerto 8080 para correr el servidor.
-Se crea la ruta "/api/mocks" donde se visualizaran los siguentes endpoints:
        -"/mokcingUsers" : por medio del endPoint GET Se crean 50 usuarios a traves de faker con los detalles solicitados.
        -"/generateData : por medio del endPoint POST se toma por parametro la cantidad de usuarios y pets que se desean agregar a la lista de cada uno.
        -"/generateData : por medio del endPint GET se visualizan las listas de usuarios y pets actualizadas con los agregados en el metodo anterior.
-Se crea la carpeta Routes donde se almacenan las logicas de los endPoints en el archivo mock.router.js.
-Se crea la carpeta UTILS que contiene utils.js donde se almacena el modelo de usuario y pets con la informacion obtenida de FAKER y en el modelo de usuarios y encripta la contraseña.

