# 📝 TODO Full-Stack Application

Production-ready TODO app with React (Vite) frontend and Express + MongoDB backend.

## Features
- Create, view, update, toggle, and delete TODO items
- Form validation on frontend and backend
- Reusable modal UI for edit and delete confirmation
- Environment-based configuration for frontend and backend

## Tech Stack
- Frontend: React, Vite, Axios
- Backend: Node.js, Express, Mongoose
- Database: MongoDB Atlas

## Project Structure
```
todo-fullstack-app/
  client/
    src/
      components/
      services/
      App.jsx
    .env.example
  server/
    controllers/
    models/
    routes/
    server.js
    .env.example
```

## Environment Setup

### Backend (`server/.env`)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

### Frontend (`client/.env`)
```
VITE_API_BASE_URL=http://localhost:5000/api/todos
```

## Run Locally

### 1) Start backend
```bash
cd server
npm install
npm run dev
```

### 2) Start frontend
```bash
cd client
npm install
npm run dev
```

Open `http://localhost:5173`.

## API Endpoints
- `GET /api/todos`
- `POST /api/todos`
- `PUT /api/todos/:id`
- `PATCH /api/todos/:id/done`
- `DELETE /api/todos/:id`

## Notes
- Client reads API URL from `client/.env` (`VITE_API_BASE_URL`)
- Server reads MongoDB and runtime config from `server/.env`
- Do not commit real credentials to git
