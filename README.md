# trainedbyvinto

Marketing site for **trainedbyvinto** — 1:1 and online personal training coaching by Vincent, based in Luzern, Switzerland.

Live at [trainedbyvinto.com](https://trainedbyvinto.com).

## Tech stack

- [React](https://react.dev/) + [React Router](https://reactrouter.com/) for client-side routing
- [Vite](https://vitejs.dev/) for dev server and build tooling
- Deployed on [Vercel](https://vercel.com/), auto-deploying from this GitHub repo
- Contact form submissions are handled by [Web3Forms](https://web3forms.com/) (no backend required)

## Project structure

```
public/
  images/       static images (portraits, before/after photos)
  favicon.svg
  sitemap.xml
src/
  components/   shared UI (Header, Footer, ProgramCard, BeforeAfterSlider, ScrollToTop)
  pages/        one component per route (Home, Programs, Results, Contact)
  App.jsx       route definitions + shared layout
  main.jsx      app entry point
  index.css     global styles and CSS variables
index.html      Vite entry template
vercel.json     domain redirects + SPA rewrite for client-side routing
```

## Pages / routes

| Route          | Content                              |
|----------------|---------------------------------------|
| `/`            | Hero + about                          |
| `/programme`   | Coaching program pricing cards         |
| `/ergebnisse`  | Before/after client transformations    |
| `/kontakt`     | Contact form                          |

## Getting started

Requires Node.js 18+.

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build into dist/
npm run preview # preview the production build locally
```

## Deployment

Pushing to the connected branch on GitHub triggers an automatic deploy on Vercel. `vercel.json` handles:
- redirecting the old `.ch` domains to `trainedbyvinto.com`
- rewriting all routes to `index.html` so React Router's client-side routes work on direct load/refresh
