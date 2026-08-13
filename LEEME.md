# Sitio Barreiro & Barriola

Sitio estático de 4 páginas (Inicio, Nosotras, Áreas de práctica, Contacto), construido con el sistema de marca ya definido (Uva #2D1F2F, Bronce #A68F6B, Marfil #F4F1EB, Playfair Display + Montserrat).

## Cómo verlo
Abrí `index.html` con doble clic, o mejor, servilo local para que los links entre páginas funcionen bien:

```bash
cd site
python3 -m http.server 8000
```

Y entrá a `http://localhost:8000`.

## Assets
Ya están los reales:
- `assets/img/BB-monograma-uva.svg`, `BB-monograma-bronce.svg`, `BB-monograma-marfil.svg`, `BB-monograma-negro-100.svg` — del Kit de Logos.
- `assets/img/guadalupe.png` (foto de cuerpo completo) y `assets/img/guillermina.png` (retrato) — recortadas con `object-position` para que se vea bien la cara en cada marco. Si el recorte no queda perfecto en algún lugar, se ajusta el `object-position` de ese `<img>` puntual.
- Favicon con el monograma uva ya está puesto en las 4 páginas.

Nota: no se usaron los avatares cuadrados (`BB-avatar-*.png`) ni el banner de LinkedIn (`BB-banner-linkedin-1584x396.png`) — quedan disponibles en `/mnt/user-data/uploads/` para redes sociales, no hacen falta en el sitio.

## Pendiente: texto de Guadalupe
El texto de Guadalupe en Inicio y Nosotras es un texto genérico armado en el mismo tono que el de Guillermina, a la espera de que ella confirme su bio real (en las piezas originales decía "[TEXTO A CONFIRMAR CON GUADALUPE]").

## Cómo publicarlo (GitHub + Vercel)

1. **Crear el repo en GitHub**: entrá a github.com/new, nombre sugerido `barreiro-barriola-web`, dejalo público o privado (da igual para esto), sin agregar README/gitignore (ya los tenemos).

2. **Subir el código** — parado dentro de esta carpeta (`barreiro-barriola-sitio`), corré:
   ```bash
   git init
   git add .
   git commit -m "Sitio inicial Barreiro & Barriola"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/barreiro-barriola-web.git
   git push -u origin main
   ```

3. **Crear cuenta en Vercel** (vercel.com) usando "Continuar con GitHub" — así quedan conectadas las dos cuentas automáticamente, sin passwords nuevas.

4. **Importar el proyecto**: en el dashboard de Vercel, "Add New… → Project", elegí el repo `barreiro-barriola-web`. Vercel detecta que es un sitio estático (no hace falta configurar nada, ni build command). Click en "Deploy".

5. En un minuto queda publicado en una URL como `barreiro-barriola-web.vercel.app`. Ya es un sitio real y funcionando, para compartir mientras esperan el dominio.

6. **Cuando tengan el dominio** `barreiroybarriola.com.ar`: en el proyecto de Vercel, ir a Settings → Domains → Add, escribir el dominio. Vercel te va a mostrar qué registros DNS (tipo A o CNAME) tenés que configurar en el panel de donde compraron el dominio. Una vez que el DNS propaga (puede tardar de minutos a un día), el dominio queda apuntando al sitio.

7. **De ahí en adelante**: cada vez que hagan `git push` a `main`, Vercel redespliega solo. No hace falta tocar nada más.

## Contacto
No hay formulario: la página de Contacto y el footer de todo el sitio van directo a Email, WhatsApp, Instagram y LinkedIn.

**Verificar antes de publicar:**
- **WhatsApp**: el link es `https://wa.me/541150600248`. Si ese número no está dado de alta en WhatsApp Business tal cual, el link no va a abrir un chat — probalo en el celular antes de publicar.
- **Instagram**: usé `@estudiojuridico.byb` (sin tilde, todo minúscula, con punto) porque el usuario real de Instagram no admite tildes ni "&". Si el usuario real es distinto, avisame y cambio el link en 4 archivos.
- **LinkedIn**: puse un link genérico a `linkedin.com/company/barreiro-barriola` — reemplazalo por el real cuando tengan la página creada.
