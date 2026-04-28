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

## MongoDB Connection Notes
- The application uses Mongoose to connect to MongoDB.
- You can provide either a local MongoDB URI (e.g., `mongodb://localhost:27017/todo-app`) or a MongoDB Atlas connection string.
- If using MongoDB Atlas, ensure your network IP is whitelisted in the Atlas dashboard and you replace `<password>` with your actual database user password in the URI.

## Assumptions and Limitations
- **Assumption:** The frontend is running on `http://localhost:5173` locally. If running elsewhere, `CORS_ORIGIN` must be updated in `.env`.
- **Limitation:** There is no rate limiting (e.g., `express-rate-limit`) implemented, assuming a light-load testing environment.
- **Limitation:** User authentication is not implemented as per the basic requirements.
