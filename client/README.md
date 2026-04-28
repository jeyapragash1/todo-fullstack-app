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

