# 📝 TODO Full-Stack Application

A full-stack TODO application built using React, Node.js, Express, and MongoDB.  
This project demonstrates RESTful API design, CRUD operations, and clean full-stack architecture.

---

## 🚀 Features

- Create a new TODO
- View all TODOs
- Edit TODO (title & description)
- Mark TODO as completed / uncompleted
- Delete TODO
- Responsive and clean UI
- Proper error handling and validation

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS (or any UI library)

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

---

## 📂 Project Structure

/backend
  /controllers
  /routes
  /models
  server.js

/frontend
  /components
  /pages
  /services

---

## ⚙️ Setup Instructions

### 1. Clone the repository
git clone https://github.com/jeyapragash1/todo-fullstack-app.git 
cd todo-fullstack-app  

---

### 2. Backend Setup
cd backend  
npm install  

Create a `.env` file and add:  
PORT=5000  
MONGO_URI=your_mongodb_connection_string  

Run backend:  
npm run dev  

---

### 3. Frontend Setup
cd frontend  
npm install  
npm run dev  

---

## 🔌 API Endpoints

GET /api/todos → Get all todos  
POST /api/todos → Create new todo  
PUT /api/todos/:id → Update todo  
PATCH /api/todos/:id/done → Toggle done status  
DELETE /api/todos/:id → Delete todo  

---

## 🧠 Approach

The project was developed by first defining the database schema and API structure, followed by backend implementation and frontend integration. Each feature was tested to ensure smooth interaction between client and server.

---

## ⚠️ Assumptions & Limitations

- No authentication system is implemented  
- Basic validation is applied  
- Designed for single-user usage  

---

## 🎥 Demo

https://drive.google.com/file/d/1qAcIgpkPmQNxTtPCH0gXyQGqyV5Y3mC5/view?usp=sharing

---

## 📌 Future Improvements

- Add authentication (JWT)  
- Add search and filtering  
- Improve UI/UX with animations  
- Pagination support  

---

## 🙌 Author

Kisho Jeyapragash
