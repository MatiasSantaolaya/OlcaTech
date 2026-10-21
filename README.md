# OLCA Tech

Sitio web de OLCA Tech: la unidad de tecnología, innovación y crecimiento del ecosistema OLCA.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Internacionalización por subruta: `/es` (por defecto) y `/en`
- Deploy en Vercel

## Estructura

- `src/app/[lang]/` — páginas y layout por idioma
- `src/app/[lang]/dictionaries/` — textos en `es.json` y `en.json`
- `src/proxy.ts` — redirige `/` al idioma preferido del navegador

## Desarrollo

```bash
npm install
npm run dev
```

El diseño visual es provisorio hasta definir el manual de marca.
