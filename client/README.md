# Client (React + Vite)

Frontend for the TODO full-stack application.

## Stack
- React 19
- Vite
- Axios
- Vanilla CSS

## Environment
Create `client/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api/todos
```

`VITE_API_BASE_URL` is required for API calls.

## Run
```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build
```bash
npm run build
```

## Project Structure
- `src/components`: UI components
- `src/services/todoService.js`: HTTP service layer
- `src/App.jsx`: app state and orchestration

## Assumptions and Limitations
- **Assumption:** The backend is running on `http://localhost:5000` by default. If running elsewhere, `VITE_API_BASE_URL` must be updated.
- **Assumption:** Modern browsers are used (relying on modern CSS Grid and backdrop-filter for glassmorphism).
- **Limitation:** There is no user authentication or session management; all TODOs are shared globally.
- **Limitation:** Pagination is not implemented, so extremely large datasets might cause UI lag (though the backend limits response sizes).
