# backend-template
NodeJS + Express + MongoDB plantilla para comenzar proyectos

# Inicializar Proyecto
> npm init

# Habilitar Express

> npm install express --save
> Copiar el código de muestra de Express (Hello World)

# Habilitar Body Parser
> npm install --save body-parser
> Poner el código que habilita Body Parser en Express

# Habilitar peticiones cruzadas
> npm install cors --save
> Habilitandolo en index.js

# Cómo instalar las dependencias? (Trás clonar el repositorio y no tener los node_modules instalados)
> npm install //(Esto instalará todas las dependencias que han sido instaladas con --save automáticamente)

# Habilitar el refresco automatico cuando estamos desarrollando

> npm install -g nodemon
> npm install --save-dev nodemon
> nodemon index.js

# Cómo lanzar el proyecto?

> npm start
> nodemon index.js (para refrescar automáticamente cada vez que guardamos los cambios)