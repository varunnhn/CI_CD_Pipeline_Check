# SapinexAI Website

Frontend and marketing site for SapinexAI (NameGuard API). Built with React (Vite) and Tailwind CSS, served via an Express backend.

## Tech Stack
- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- Express (for serving the production build and handling Stripe/Contact APIs)

## Quick Start (Local Dev)

```bash
npm install
npm run dev
```
The app will be available at `http://localhost:5173`.

## Production Build

```bash
npm run build
npm start
```
This builds the React app into `/dist` and serves it via `server.js` on `$PORT` (default 3000).

## Environment Variables
Check `.env.example` for required keys.
- `STRIPE_SECRET_KEY` & `STRIPE_PRICE_GROWTH` for the checkout flow.
- `CONTACT_TO_EMAIL` for the contact form.

## Deployment
Configured to drop easily into Hostinger's Node.js environment or any standard Node host. Point the startup command to `node server.js`.
