PROYECTO 3 DASHBORD APP

En este proyecto estudiamos la forma de implementar las funciones asincronicas para la ejecucion de servicios APIs

El ejercicio utiliza un sistema modular import export; en el primer modulo llamado news.js hacemos referencia a noticias de primera pagina el cual recupera la informacion de una base de datos .json creada localmente en el archivo db.json y para que pueda ser visualizado en el navegador lo ejecutamos con el codigo en terminal "npm run miservidor" que hace referencia a la dependencia miservidor que se encuentra en el archivo package.json.

El segundo modulo llamado forex.js utilizamos la API de alphavantage, esta API cuenta con una apiKey que solo arroja 100 peticiones.

El tercer modulo llamado cripto.js llamamos a la API criptocoin la cual nos devuelve el valor de las criptomonedas en tiempo real, la cual es de uso libre.

El ultimo modulo inflation.js ejecutamos una grafica preinstalando chart.js en package.json con el uso datos otorgados por la API de alphavantage, esta API implica el uso de una KEY que permite hasta 100 peticiones en la version demo.
