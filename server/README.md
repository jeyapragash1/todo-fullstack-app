# Server (Express + MongoDB)

Backend REST API for the TODO application.

## Environment
Create `server/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

You can also use `MONGO_URI` instead of `MONGODB_URI`.

## Run
```bash
npm install
npm run dev
```

## Endpoints
- `GET /api/todos`
- `POST /api/todos`
- `PUT /api/todos/:id`
- `PATCH /api/todos/:id/done`
- `DELETE /api/todos/:id`
- `GET /health`

## Notes
- CORS is restricted by `CORS_ORIGIN`
- JSON payload limit is `1mb`
- Graceful shutdown handlers included for `SIGINT` and `SIGTERM`
