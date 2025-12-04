# Futuristic Online Portfolio — Educational Tour

This is a minimal Vite + React + Tailwind prototype for a futuristic portfolio featuring:

- Journal (auto-save + export markdown)
- Gallery (image upload + captions)
- Certificates (upload + modal previews)
- Reflection article and Contact page

Designed for a futuristic aesthetic: glassmorphism, neon accents, smooth motions.

---

## Quick start (Windows PowerShell)

1. Install dependencies

```powershell
npm install
# if npm shows peer dependency errors, run
npm install --legacy-peer-deps
```

2. Run dev server

```powershell
npm run dev
```

3. Open the app: visit http://localhost:5173 (Vite default)

---

Notes:
- Add a high-resolution hero image at `assets/faf.jpg` to replace the fallback SVG used in the hero.
- This repo stores uploaded images/certificates in localStorage for a lightweight demo — for production you should use a proper backend or cloud storage.

Developer notes:
- This project uses an ESM Vite config and `@vitejs/plugin-react` (ESM). package.json contains `"type": "module"` so Vite loads the config as ESM.
- If you hit issues starting `npm run dev`, ensure you have a compatible Node.js version (Node 18+ is recommended) and install packages with `--legacy-peer-deps` to avoid strict peer resolution issues.

---

Author: Rudino R. Zapanta Jr. — BSIT-3B
