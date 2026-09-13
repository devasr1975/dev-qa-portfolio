# Deva S — QA Automation Portfolio

Minimal Premium single-page React/Vite portfolio for a freelance QA Automation Engineer.

## Stack

- React + Vite
- Framer Motion
- Lucide React
- Custom responsive CSS
- No backend required

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Before publishing

Open `src/main.jsx` and update:

```js
const GITHUB = "";
```

with your real GitHub profile URL.

The contact form uses `mailto:` and therefore opens the visitor's email application. The WhatsApp button uses WhatsApp's share flow because a direct WhatsApp phone number was not supplied.

## Deploy

This Vite site can be deployed to Vercel, Netlify, GitHub Pages or any static hosting service that supports Vite builds.
