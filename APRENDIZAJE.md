# Aprendizaje

Registro de cómo trabajo con IA en Full Stack Open. Cada sesión se agrega al final.

---

## Sesión 1 — 18 de noviembre de 2026: preparar el repo

### Conceptos que aprendí
- **Cómo funciona el curso**: 14 partes, una a la vez. Con 72 ejercicios de las partes 0-7 consigo el certificado.
- **Enviar una parte la cierra para siempre**: hay que hacer todos los ejercicios de esa parte antes de enviarla.
- **Nombres sin espacios**: en la terminal, `cd parte 0` falla; por eso uso `part0` o `parte-0`.
- **`package.json` vs `node_modules`**: el primero es la receta (dependencias + scripts), el segundo son los ingredientes que descarga `npm install`.
- **`.gitignore`**: le dice a Git qué no subir (`node_modules`, `.env`).
- **`git remote add origin`**: conecta la carpeta con el repo de GitHub.
- **`git push -u`**: deja la rama conectada con GitHub; se hace una sola vez por rama.

### Decisiones que tomamos y por qué
- **Repo público**: para que los reclutadores vean mi código.
- **Un repo, una carpeta por parte y una carpeta por app** (`part1/courseinfo`, `part1/unicafe`…): cada app tiene su propio `package.json`.
- **La IA hizo el setup inicial** (README, .gitignore, primer commit) para partir rápido. Desde la parte 0, el código lo escribo yo.

### Pendiente para la próxima sesión
- Ejecutar `git remote add origin ...` y `git push -u origin main`.
- Responder: con una rama nueva `part0`, ¿`git push` solo o `git push -u origin part0`?
- Decidir si `MENSAJE-INICIO.md` se sube al repo público o va al `.gitignore`.
- Concretar mi objetivo: cuántas horas a la semana y qué quiero saber hacer solo al terminar.
- Buscar en la parte 0 las reglas del curso sobre el uso de IA.

### Qué practicar
- Comandos básicos de Git: `remote`, `push -u`, ramas.

---

## Sesión 2 — 20 al 23 de noviembre de 2026: partes 0 y 1 (hasta el 1.9)

### Conceptos que aprendí
- **SPA y formulario tradicional**: si el formulario envía la nota, la página se recarga; si lo hace JavaScript con `preventDefault`, no.
- **Componentes y props**: el que envía pone la etiqueta y el que recibe la lee igual, letra por letra.
- **Alcance**: un componente no ve las variables de `App`, solo lo que le llega por props.
- **Objetos y arreglos**: `.` para objetos y `[0]` para listas. El dato se abre en un solo lugar.
- **Desestructuración**: `({ good, neutral, bad })` abre la caja al recibirla.
- **Estado con `useState`**: guarda el dato y le avisa a React para que ejecute el componente otra vez. Con `let`, la pantalla no cambia.
- **Eventos**: `onClick` recibe una función, no el resultado de llamarla.
- **Estado o variable**: si se puede calcular con otros datos, no es un estado.
- **No mutar el estado**: `...` para copiar objetos y `concat` para listas.
- **Renderizado condicional**: un `return` termina la función.
- **Leer la consola**: la primera línea roja casi siempre dice qué está mal.

### Decisiones que tomamos y por qué
- **1.5**: abrir `course` en `App`, para no cambiar los otros componentes.
- **1.6**: un estado por botón, porque son datos independientes.
- **1.7**: total, promedio y positivas son variables calculadas.
- **1.9**: el `if` va en `Statistics`, porque ahí vive `total`.

### Cómo usé la IA
- Preparó los proyectos y puso el código inicial del curso.
- En 0.5 y 0.6 escribió los archivos; casi todo el texto del 0.6 es suyo.
- En courseinfo y unicafe escribí el código con pistas, y a veces vi la solución explicada. Pegó partes que le mandé y corrigió detalles en 1.6, 1.8 y 1.9.
- Repetí courseinfo varias veces en una rama de práctica, hasta hacerlo sin pistas.

### Qué practicar
- Repetir unicafe del 1.6 al 1.9 sin mirar.
- Explicar el orden: `setGood` → `App` → `Statistics` → pantalla.
- Revisar nombres letra por letra.

### Pendiente para la próxima sesión
- 1.10: componentes `StatisticLine` y `Button`. Primera pregunta: qué es igual y qué cambia entre los `<p>`.
- 1.11 a 1.14, y después enviar la parte 1.

---

## Sesión 3 — 24 y 25 de noviembre de 2026: parte 1 completa (1.10 a 1.14)

### Conceptos que aprendí
- **Componentes reutilizables**: `Button` y `StatisticLine` tienen una sola estructura y cambian según sus props.
- **Funciones por props**: se pasa la función sin llamarla.
- **Tablas HTML**: `table`, `tbody`, `tr` y `td`; React avisa en la consola si la estructura no es válida.
- **Número al azar**: `Math.floor(Math.random() * lista.length)` da una posición válida.
- **Copiar un arreglo**: `[...votos]` crea una lista nueva. Si muto la misma, React cree que nada cambió.
- **Listas paralelas**: la misma posición en `votos` y en `anecdotes` habla de la misma anécdota.
- **`Math.max(...votos)`**: da el valor más alto.
- **`indexOf(valor)`**: da la posición; `-1` si no está y la primera si se repite.

### Decisiones que tomamos y por qué
- **1.13**: los votos van en un arreglo, con un casillero por anécdota.
- **1.14**: `maximo` y `posicion` son variables, porque se calculan desde `votos`.
- **Empates**: se muestra la primera de la lista; el enunciado permite cualquiera.

### Cómo usé la IA
- Preparó el proyecto, pegó el código inicial y probó la app.
- Explicó los conceptos y me dio pistas. En algunos pasos vi la solución antes de escribirla, como en 1.12 y en las dos líneas finales del JSX de 1.14.
- Repetí unicafe en una rama de práctica.

### Qué practicar
- Repetir anecdotes sin mirar.
- Distinguir valor y posición, y lista completa y un solo elemento.

### Pendiente para la próxima sesión
- Enviar la parte 1 y empezar la parte 2.
