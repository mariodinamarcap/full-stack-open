# Lo que aprendí en app-turnos

Resumen de mi primer proyecto full stack (https://reserva-barberia.onrender.com), ordenado por capas, en el mismo orden en que viaja una reserva.

## La idea central

**El recorrido de una petición:** el frontend pide, el backend valida, la base de datos guarda y el backend responde. Todo lo demás cuelga de esta idea.

---

## 1. HTTP: cómo se hablan el frontend y el backend

- Cada **petición** tiene método, ruta, headers y body, y recibe **una sola respuesta**.
- **GET** pide información y **POST** crea algo.
- **Status:** 2xx salió bien, 4xx el problema es de la petición, 5xx falló el servidor.

| Status | Cuándo |
|---|---|
| `400` | Los datos están malos |
| `401` | No sé quién eres |
| `404` | No existe |
| `409` | Choca con algo que ya existe |
| `500` | Falló el servidor |

⚠️ **Punto débil:** en la prueba confundí el 400 con el 401 y el 409 con el 400.

## 2. Backend: Node y Express

- **Node** ejecuta JavaScript fuera del navegador. Por eso no existe `document`.
- **Un servidor se queda escuchando** en un puerto. Se detiene con `Ctrl + C`.
- **Ruta:** una función que se ejecuta **en cada petición**.
- **Middleware** `(req, res, next)`: un guardia que va antes de la ruta. Siempre tiene que **responder o llamar a `next()`**.
- **`try/catch` + `return`:** atrapan los errores y evitan mandar dos respuestas.

## 3. Base de datos: PostgreSQL y SQL

- **SQL es el idioma y PostgreSQL es el programa.** Una tabla tiene filas (cada reserva) y columnas (cada dato).
- **Los comandos básicos:** `CREATE TABLE`, `INSERT`, `SELECT` y `DELETE ... WHERE`. ⚠️ Un `DELETE` sin `WHERE` borra todo.
- **Las reglas importantes van en la base de datos:** `NOT NULL` y `UNIQUE`. Así se evita la **condición de carrera**, cuando dos personas reservan la misma hora al mismo tiempo.
- **Marcadores `$1`, `$2`:** nunca pegar los datos del usuario dentro del SQL. Así se evita la **inyección SQL**.

## 4. Seguridad

- **Validar en el servidor**, porque el frontend se puede saltar.
- **Los secretos van en `.env`**, que debe estar en el `.gitignore`. En el repo se sube un `.env.example` con valores de mentira.
- **Fallar rápido:** si falta una variable, el servidor muestra un mensaje y se detiene con `process.exit(1)`.
- **`Authorization: Bearer <token>`** sirve para proteger las rutas privadas.
- **Al cliente solo se le responde "500 Error interno".** El detalle del error va a mi terminal.
- **Si un secreto se publica, se considera robado** y hay que cambiarlo.

## 5. Tests

- Un test tiene **3 partes**: le doy algo al código, guardo lo que responde y lo comparo con lo esperado.
- **Sirven contra los bugs de regresión**: cosas que funcionaban y se rompieron sin que las tocara.
- **Cada test cambia un solo dato**, para saber qué regla falló.
- **Usar una base de datos de prueba** (`_test`), nunca la real.

⚠️ **Punto débil:** leer `rutas.test.js`.

## 6. Frontend: React

- **El frontend solo muestra y pide**, con `fetch`, que es como el `curl` de JavaScript.
- Si quiero agregar algo nuevo, también tengo que hacer su ruta en el backend.

## 7. JavaScript que tengo que dominar

- **Callback:** una función que se ejecuta después.
- **Promesas y `await`.**
- **`setTimeout` no detiene el programa:** deja la función programada y sigue. ⚠️ Pendiente: explicar por qué sale A, C, B.
- **Función, método y propiedad:** `setTimeout()` es una función, `.slice()` es un método y `.length` es una propiedad.
- **`process.env`, `||` para valores por defecto, y `{ ...objeto }` para copiar.**

## 8. Git y deploy

- **El flujo con ramas:** `pull`, rama nueva, commit, `push -u`, PR, revisar, merge, y `pull` otra vez.
- **Antes de cada merge, revisar "Files changed".**
- **Local y producción son cosas separadas.** En Render cada merge a `main` se publica solo.

---

## Lo que me tiene que quedar sí o sí

1. El recorrido de una petición.
2. Los status 400, 401, 404, 409 y 500.
3. Las reglas importantes van en la base de datos y los datos se pasan con `$1`.
4. Los secretos van en `.env`, nunca en el código ni en el chat.
5. Leer un test: qué recibe, qué espera y qué promete su nombre.

## Pregunta para repasar

Un cliente intenta reservar a las 15:00, pero esa hora ya está tomada. ¿Qué status responde el backend, y por qué no es 400?
