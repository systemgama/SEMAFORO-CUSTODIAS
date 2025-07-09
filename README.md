# Semáforo Custodias

Este proyecto es una página web que visualiza información en tiempo real desde una hoja de cálculo de Google Sheets. Muestra datos de semáforo operativo con colores personalizados y permite abrir un mapa desde un enlace contenido en la hoja.

## 🔗 Enlace al script de datos

Los datos son obtenidos desde el siguiente script de Google Apps Script:

```
https://script.google.com/a/macros/s4.com.mx/s/AKfycbyOlkaoBFotjqqBySu_Wj3BYgendukAYuhJZSvgDAoMKnx6C_Re6d887xAjX-86V2c4xA/exec
```

## 📁 Archivos incluidos

- `index.html`: Página web principal que carga y muestra los datos.
- `README.md`: Este archivo de documentación.

## 📦 Cómo publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo, `semaforo-custodias`).
2. Sube los archivos `index.html` y `README.md`.
3. Ve a la sección **Settings > Pages** del repositorio.
4. Elige la rama `main` y carpeta `/ (root)` como fuente.
5. Tu sitio estará disponible en:  
   `https://<tu-usuario>.github.io/semaforo-custodias/`

## ✅ Características

- Lectura dinámica de datos desde Google Sheets.
- Visualización con colores por celda.
- Mapa embebido usando la URL contenida en la columna `J`.

Desarrollado para Custodias S4.
