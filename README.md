# ⚽ API RESTful - Gestión de Equipos de Fútbol

Este proyecto consiste en una API construida con [NestJS](https://nestjs.com/) y [TypeORM](https://typeorm.io/) para la gestión de equipos de fútbol, sus jugadores, los torneos en los que participan y los partidos disputados. Forma parte de un taller práctico enfocado en aplicar buenas prácticas en el desarrollo de APIs RESTful.

---

## 🚀 Tecnologías utilizadas

- [NestJS](https://nestjs.com/) - Framework backend Node.js
- [TypeORM](https://typeorm.io/) - ORM para TypeScript
- [MySQL](https://www.mysql.com/) - Sistema de gestión de base de datos
- [class-validator](https://github.com/typestack/class-validator) - Validación de datos
- [Postman](https://www.postman.com/) - Pruebas de endpoints
- [dotenv](https://github.com/motdotla/dotenv) - Variables de entorno

---

## 📁 Estructura del proyecto
src/
├── app.module.ts
├── main.ts
└── modules/
├── equipos/
├── jugadores/
├── torneos/
└── partidos/

Cada módulo contiene:
- Controladores (`controllers`)
- Servicios (`.service.ts`)
- Entidades TypeORM (`entities`)
- DTOs con validaciones (`dto/`)

---

Endpoints principales
Equipos
GET /equipos

GET /equipos/:id

POST /equipos

PUT /equipos/:id

DELETE /equipos/:id

Jugadores
GET /jugadores

GET /jugadores/:id

POST /jugadores

PUT /jugadores/:id

DELETE /jugadores/:id

Torneos
GET /torneos

GET /torneos/:id

POST /torneos

PUT /torneos/:id

DELETE /torneos/:id

Partidos
GET /partidos

GET /partidos/:id

POST /partidos

PUT /partidos/:id

DELETE /partidos/:id


Colecciones Postman
Se incluyen dos archivos .json con los endpoints para pruebas:

postman_equipos_api.json

postman_jugadores_torneos_partidos.json

Puedes importarlos en Postman para probar rápidamente la API.

Validaciones y manejo de errores
Todos los DTOs utilizan class-validator para asegurar integridad de datos.

Se usa HttpException y HttpStatus para respuestas controladas.


Estado del proyecto
✅ CRUD funcional para:

Equipos

Jugadores

Torneos

Partidos

✅ Relaciones:

Equipo ↔ Jugador

Partido ↔ Equipo (local y visitante)

Partido ↔ Torneo

✅ Modularización por entidad
✅ Pruebas Postman incluidas
✅ Documentación lista para GitHub

