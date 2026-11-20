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
