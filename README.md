<img src="https://pbs.twimg.com/media/B33SGbYIMAAhrVR.png" width="250"></img>

# ENTREVISTA PERSONAL DE SERVICIO

Aplicación para la realización en entrevistas al personal de servicio

## Instrucciones

- Preparar proyecto:

  1. Clonar el repositorio.
  2. Instalar dependencias necesarias:
     - `npm install` <small>(Si usa <a href="https://www.npmjs.com/">Npm</a> como gestor de paquetes)</small>
     - `yarn install` <small>(Si usa <a href="https://yarnpkg.com/">Yarn</a> como gestor de paquetes)</small>
  3. Preparar archivo de variables de entorno: _En este punto deberá duplicar el archivo_ **"_.example.env_"** _y deberá llamar a este nuevo archivo_ **"_.env_"**. Este archivo contiene las siguientes variables:
     - **DATABASE_URI**: Uri de su base de datos _MongoDB_ <small>(Ejemplo: mongodb://localhost:27017/nombre_db)</small>
     - **SESSION_KEY**: Llave secreta para el manejo de sesiones <small>(Se recomienda el uso de <a href="https://keygen.io/">KeyGen.io</a> para la generación de hashes)</small>
  4. Cargar datos relacionados al personal:
     - `npm run seed` <small>(Si usa <a href="https://www.npmjs.com/">Npm</a> como gestor de paquetes)</small>
     - `yarn seed` <small>(Si usa <a href="https://yarnpkg.com/">Yarn</a> como gestor de paquetes)</small>

- Ejecutar como entorno de desarrollo:

  - `npm run dev` <small>(Si usa <a href="https://www.npmjs.com/">Npm</a> como gestor de paquetes)</small>
  - `yarn dev` <small>(Si usa <a href="https://yarnpkg.com/">Yarn</a> como gestor de paquetes)</small>

- Ejecutar en producción:
  - `npm start` <small>(Si usa <a href="https://www.npmjs.com/">Npm</a> como gestor de paquetes)</small>
  - `yarn start` <small>(Si usa <a href="https://yarnpkg.com/">Yarn</a> como gestor de paquetes)</small>

### Tecnologías requeridas el despligue en producción

- <a href="https://nodejs.org/es/">PM2</a> <small>(Administrador de procesos de Node.js)</small></a>
- Servidor web para el uso de proxy, ejemplos:
  - <a href="https://www.nginx.com/">Nginx</a>
  - <a href="https://httpd.apache.org/">Apache</a>

## Tecnologías utilizadas para el desarrollo

- <a href="https://nodejs.org/es/">NodeJS <small>(Entorno de ejecución para JavaScript)</small></a>
- <a href="https://expressjs.com/">ExpressJS <small>(Micro framework para aplicaciones web)</small></a>
- <a href="https://ejs.co/">EJS <small>(Embedded JavaScript templating)</small></a>
- <a href="https://www.mongodb.com/">MongoDB <small>(MongoDB es un sistema de base de datos NoSQ)</small></a>
