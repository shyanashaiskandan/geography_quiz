# 🌍 Geography Quiz Application

A full-stack web application for testing and improving your geography knowledge through interactive quizzes.

---

## ✨ Features

- Interactive geography quiz interface  
- Real-time score tracking  
- Multiple question types  
- User result history  
- Responsive design for all devices  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Redux for state management  
- Custom hooks for reusable logic  
- Modern CSS styling  

### Backend
- Node.js with Express  
- MongoDB database  
- RESTful API architecture  

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (v14 or higher)  
- MongoDB  
- npm or yarn  

### 📥 Installation

1. **Clone the repository**
```bash
git clone https://github.com/shyanashaiskandan/geography_quiz.git
```

2. **Install dependencies for both client and server**
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. **Set up environment variables**
- Create a `.env` file in both `client/` and `server/` directories  
- Add `REACT_APP_SERVER_HOSTNAME` in the client `.env`  
- Add `PORT` and `ATLAS_URI` in the server `.env`  

4. **Start the development servers**
```bash
# Start the client (from client directory)
npm start

# Start the server (from server directory)
npm start
```

Application will be available at:  
- Frontend: http://localhost:3000  
- Backend: http://localhost:8080  

---

## 📡 API Endpoints

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | `/api/questions`   | Get quiz questions      |
| POST   | `/api/questions`   | Add new questions       |
| DELETE | `/api/questions`   | Delete all questions    |
| GET    | `/api/result`      | Get user results        |
| POST   | `/api/result`      | Store user results      |
| DELETE | `/api/result`      | Delete all results      |

---
