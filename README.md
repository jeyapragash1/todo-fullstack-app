# 📝 TODO Full-Stack Application

A production-ready, feature-rich TODO application built using a modern React (Vite) frontend and an Express + MongoDB backend. 

This project was built to demonstrate a deep understanding of RESTful API design, full-stack component architecture, and modern UX engineering.

---

## ✨ Features & Bonus Implementations

Beyond the core CRUD requirements, this application implements several advanced features:

- **Optimistic UI Updates:** Toggling and deleting tasks updates the React state instantly before the server responds, making the app feel native and lightning-fast. It automatically rolls back if the API call fails.
- **Modern UI/UX (Glassmorphism):** The UI was completely redesigned using a premium "Dark Glassmorphism" aesthetic with responsive CSS Grid layouts, animated mesh-gradient backgrounds, and micro-animations (hover lifts, custom animated checkboxes).
- **Graceful Error Handling:** Full form validation on both the client and server. Errors display as animated, user-friendly banners rather than breaking the application.
- **Component-Level Architecture:** Instead of a monolithic stylesheet, CSS is strictly co-located with its respective React components (e.g., `TodoItem.jsx` pairs with `TodoItem.css`) to ensure maintainability and prevent merge conflicts.
- **Reusable Modals:** Utilizing React `children` props to create a DRY, generic `<Modal />` wrapper that handles the backdrop blur and animations for both Edit and Confirm Delete popups.
- **Monorepo Setup:** Both `client` and `server` are neatly organized within a single repository for easy setup and testing.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Axios, Vanilla CSS (Flexbox/CSS Grid)
- **Backend:** Node.js, Express.js, Cors
- **Database:** MongoDB Atlas, Mongoose ODM

---

## 📂 Project Structure
```text
todo-fullstack-app/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Co-located components & CSS
│   │   ├── services/       # API abstraction layer
│   │   └── App.jsx         # Main orchestration & state
│   └── README.md           # Client-specific docs & limitations
│
└── server/                 # Express Backend
    ├── controllers/        # Request handling logic
    ├── models/             # Mongoose schemas
    ├── routes/             # API routing
    ├── server.js           # Express configuration
    └── README.md           # Server-specific docs & DB notes
```

---

## ⚙️ Environment Setup

You must configure `.env` files in both the `client` and `server` directories before running the application.

### Backend (`server/.env`)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

### Frontend (`client/.env`)
```env
VITE_API_BASE_URL=http://localhost:5000/api/todos
```

---

## 🚀 Run Locally

### 1) Start the Backend
```bash
cd server
npm install
npm run dev
```

### 2) Start the Frontend
```bash
cd client
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/todos` | Fetch all TODOs sorted by creation date |
| `POST` | `/api/todos` | Create a new TODO |
| `PUT` | `/api/todos/:id` | Update a TODO's title and description |
| `PATCH` | `/api/todos/:id/done` | Toggle a TODO's completion status |
| `DELETE`| `/api/todos/:id` | Delete a TODO |

---

## 📝 Notes
- Please see `client/README.md` and `server/README.md` for specific assumptions, limitations, and detailed setup instructions as requested in the assignment parameters.
