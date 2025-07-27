# 🌤️ Weather App using MEAN Stack

A full-stack weather application built with the **MEAN stack (MongoDB, Express.js, Angular, Node.js)** that fetches real-time weather data using the **OpenWeatherMap API**. Users can search for cities, toggle between light and dark themes, view dynamic weather icons, and see their search history with the option to delete entries.

---

## 🚀 Features

- 🌍 Search real-time weather by city name
- ☁️ Weather icons from OpenWeatherMap
- 🔁 Search history with delete option
- ⏳ Loading spinner during API calls
- ❌ Error handling for invalid cities
- 💾 Backend stores search history in MongoDB

---

## 🧰 Technologies Used

### Frontend:

- Angular 20
- HTML/CSS
- Angular Animations
- Angular HTTP Client

### Backend:

- Node.js
- Express.js
- MongoDB (via Mongoose)

### APIs:

- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📦 Installation & Run Locally

### 🔧 Prerequisites:

- Node.js & npm
- MongoDB installed or cloud MongoDB URI
- Angular CLI installed globally

### ⚙️ Backend Setup:

```bash
cd backend
npm install
npm start
```

---

### 💻 Frontend Setup:

```bash
cd frontend
npm install
ng serve
```

---

## Now visit: http://localhost:4200

### 📁 Folder Structure :

```bash
weather-app/
├── backend/             # Node.js + Express API
│   └── models/          # Mongoose schemas
│   └── routes/          # API routes
│   └── server.js        # Entry point
├── frontend/            # Angular app
│   └── src/app/         # Components and services
│       ├── weather/     # Main weather component
│       ├── services/    # Weather service
│   └── index.html       # Root HTML
│   └── styles.css       # Global styling

```

## 🙋‍♂️ Author

**Subhamoy Saha**  
[GitHub Profile](https://github.com/subhamoy05)
