# Optimización de Consultas en MongoDB: Configuración de Índices y Análisis de Rendimiento usando MongoDB Shell y Node.js con Mongoose.
la actividad nos tiene como objetivo reforzar lo que se ha enseñado en clases y se comprenda la importancia de los indices y su ejecucion, como afectan la eficiencia de los datos usando multiples tecnologias de desarrollo.

## **Tecnologías utilizadas**

*   Mongoose
*   JavaScript
*   Node.js
*   Express
*   MongoDB

## Instalación

1.  Instala las dependencias:

    npm install  express mongodb mongoose cors  
    
## Uso

1.  Inicia el servidor:
    
bash
    node src/index.js

2.  La API estará disponible en http://localhost:3002.

## **Rutas de la API**

1. Obtener usuarios por Rol
- Método: GET
- Ruta: /api/usuarios/role/:role
#### Ejemplo de respuesta:
```json
[
    {
        _id: ObjectId(67d7b479e1eda23728de39d4),
        "name": "User0",
        "email": "user0@gmail.com",
        "password": "password123",
        "role": "admin",
        "createdAt": 2025-12-28T06:00:00.000+00:00
    },
    {
        _id: ObjectId(67d7b479e1eda23728de39d5),
        "name": "User1",
        "email": "user1@gmail.com",
        "password": "password123",
        "role": "admin",
        "createdAt":2025-12-28T06:00:00.000+00:00
    }
]

```

2. Buscar productos por nombre
- Método: GET
- Ruta: /api/usuarios/name/User0
#### Ejemplo de respuesta:
```json
    {
        _id: ObjectId(67d7b479e1eda23728de39d4),
        "name": "User0",
        "email": "user0@gmail.com",
        "password": "password123",
        "role": "admin",
        "createdAt": 2025-12-28T06:00:00.000+00:00
    }
```

3. Obtener usuarios por rango de fechas
- Método: GET
- Ruta: /api/usuarios/2025-12-28T06:00:00.000+00:00
- Descripción: Obtiene productos cuya fecha esté dentro de un rango específico.
#### Ejemplo de respuesta:
```json
    {
        _id: ObjectId(67d7b479e1eda23728de39d4),
        "name": "User0",
        "email": "user0@gmail.com",
        "password": "password123",
        "role": "admin",
        "createdAt": 2025-12-28T06:00:00.000+00:00
    }

```
## **CRUD de la API**
1. Crear un nuevo usuario
- Método: POST
- Ruta: /api/nuevoUsuario
- Descripción: Crea un nuevo producto en la base de datos.
#### Body (JSON):
```json
    {
        _id: ObjectId(67d7b479e1eda23728de39d4),
        "name": "User0",
        "email": "user0@gmail.com",
        "password": "password123",
        "role": "admin",
        "createdAt": 2025-12-28T06:00:00.000+00:00
    }
```

2. Obtener todos los usuarios
- Método: GET
- Ruta: /api/obtenerUsuarios
- Descripción: Obtiene todos los productos de la base de datos.
#### Ejemplo de respuesta:
```json
    {
        _id: ObjectId(67d7b479e1eda23728de39d4),
        "name": "User0",
        "email": "user0@gmail.com",
        "password": "password123",
        "role": "admin",
        "createdAt": 2025-12-28T06:00:00.000+00:00
    }

```

3. Obtener un usuario por ID
- Método: GET
- Ruta: /api/obtenerUsuariosporId/67d7b479e1eda23728de39d4
#### Ejemplo de respuesta:
```json
    {
        _id: ObjectId(67d7b479e1eda23728de39d4),
        "name": "User0",
        "email": "user0@gmail.com",
        "password": "password123",
        "role": "admin",
        "createdAt": 2025-12-28T06:00:00.000+00:00
    }
```

4. Actualizar un usuario por ID
- Método: PUT
- Ruta: /api/actualizarUsuario/67d7b479e1eda23728de39d4
#### Body (JSON):
```json
    {
        _id: ObjectId(67d7b479e1eda23728de39d4),
        "name": "User0 actualizado",
        "email": "user0@gmail.com",
        "password": "password123",
        "role": "admin",
        "createdAt": 2025-12-28T06:00:00.000+00:00
    }
```

5. Eliminar un usuario por ID
- Método: DELETE
- Ruta: /api/eliminarUsuario/67d7b479e1eda23728de39d4
#### Ejemplo de respuesta:
```json
{
  "message": "Usuario eliminado exitosamente"
}
```

### MODELO
- `name`: 
- `email`: 
- `password`: 
- `role`: 

### Comparacion de tiempos de ejecucion:
#### Sin indices:
- Consulta por Roles: **Tiempo sin índices: 50 ms**
- Consulta por nombre: **Tiempo sin índices: 63 ms**
- Consulta por fecha: **Tiempo sin índices: 53 ms**

#### Con indices:
- Consulta por Roles: **Tiempo con índices: 14 ms**
- Consulta por nombre: **Tiempo con índices: 35 ms**
- Consulta por fecha: **Tiempo con índices: 26 ms**

## Conclusion
usar indices se tiene que analizar detenidamente ya que si no se utilizan de la manera correcta en vez de ayudar afectan mas las operaciones.

