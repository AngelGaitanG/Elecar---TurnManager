# Elecar

## Introducción
Elecar es un sistema de turnos para una concesionaria de autos. Los usuarios pueden registrarse, iniciar sesión y gestionar sus propios turnos para los servicios ofrecidos. Las funcionalidades incluyen:

- Registro e inicio de sesión.
- Solicitud de turnos seleccionando el servicio, día y hora.
- Visualización y cancelación de turnos.
- Cambio de foto de perfil.

## Instalación

### Backend
1. Accede a la carpeta `back`.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea tus variables de entorno para las credenciales de la base de datos.

### Frontend
1. Accede a la carpeta `front`.
2. Dentro de `front`, accede a la carpeta `concesionaria`.
3. Ejecuta `npm install` para instalar las dependencias.

## Uso

### Levantar el Backend
npm start

### Levantar el Frontend
npm run dev

# Estructura del proyecto

```
Elecar/
├── back/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── ...
├── front/
│   ├── concesionaria/
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```


# API

## Endpoints de Usuario
- **Registrar Usuario**: `POST /users/register`
- **Iniciar Sesión**: `POST /users/login`
- **Cambiar Imagen de Perfil**: `PUT /users/${userId}/configuration`
- **Obtener Información del Usuario**: `GET /users/${userId}`

## Endpoints de Turnos
- **Crear Turno**: `POST /appointments/schedule`
- **Cancelar Turno**: `DELETE /appointments/cancel/${id}`

## Entidades y Relaciones

### Usuarios (Users)
- **ID**: Identificador único del usuario.
- **Nombre**: Nombre del usuario.
- **Email**: Correo electrónico del usuario.
- **Contraseña**: Contraseña del usuario (almacenada de forma segura).

### Credenciales (Credentials)
- **ID**: Identificador único de las credenciales.
- **Usuario**: Relación uno a uno con la entidad Usuarios.

### Turnos (Appointments)
- **ID**: Identificador único del turno.
- **Servicio**: Servicio solicitado por el usuario.
- **Fecha**: Fecha del turno.
- **Hora**: Hora del turno.
- **Usuario**: Relación muchos a uno con la entidad Usuarios.

## Contribución
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y commitea (`git commit -am 'Agrega nueva funcionalidad'`).
4. Empuja tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.
"""
