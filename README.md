# Goatcliff Admin (frontend)

Admin side of the Goatcliff reservation system. React + Vite, connected to Supabase.

## First-time setup

Needs Node.js 20.19 or newer (`node -v` to check).

1. `npm install`
2. Copy `.env.example` to `.env` and fill in the Project URL and publishable key
   (Supabase → Project Settings → API). Never use the secret / service_role key here.
3. `npm run dev` and open the address it prints (usually http://localhost:5173).

## Folder guide

| Path | What it is |
|---|---|
| `src/lib/supabase.js` | The single Supabase connection every page uses |
| `src/App.jsx` | Tracks who is logged in and decides which page shows |
| `src/components/ProtectedRoute.jsx` | Sends logged-out visitors to the login page |
| `src/pages/Login.jsx` | Admin sign-in form |
| `src/pages/Dashboard.jsx` | Placeholder; becomes the dashboard shell next |
| `src/index.css` | Colors and shared styles |

## Progress

- [x] Step 1: project setup
- [x] Step 2: admin login
- [ ] Step 3: dashboard shell with role-based menu
- [ ] Step 4: activities page (real data)
- [ ] Step 5: remaining screens
