# Weather App (React + Vite + Material UI)

A modern and responsive weather dashboard built using **React**, **Vite**, and **Material UI**.  
This application allows users to search for any city and view real-time weather information with dynamic UI updates, animated elements, and a clean glass-style interface.

---

## Features

-  Search weather by city name
-  Real-time temperature display
-  Min / Max temperature
-  Humidity, Pressure & Feels Like information
-  Dynamic background based on weather condition
-  Weather-based icon rendering
-  Loading spinner during API requests
-  Animated temperature counter
-  Glassmorphism UI design
-  Fully responsive layout
-  Error handling for invalid city searches
-  Secure API key using environment variables

---

## Tech Stack

- React (Vite)
- Material UI (MUI)
- OpenWeather API
- React Hooks (useState, useEffect)
- CSS + MUI `sx` styling

---

## Installation & Setup

-  Follow these steps to run the project locally:

## 1️⃣ Clone the repository

-  git clone https://github.com/manas-jha19/weather-app-mui.git
-  cd weather-app


## 2️⃣ Install dependencies

-  npm install

## 3️⃣ Create Environment Variables

-  Create a .env file in the root directory and add:

-  VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
-  VITE_WEATHER_API_KEY=your_api_key_here

#  You can generate your API key from:
👉 https://openweathermap.org/api

⚠️ Make sure your .env file is included in .gitignore so your API key remains private.

## 4️⃣ Start the development server

-  npm run dev

# Now open your browser and visit:

- http://localhost:5173

## 📂 Project Structure

```
weather-app/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── clearBg.jpg
│   │   ├── Cloud.jpg
│   │   ├── rainy.jpg
│   │   ├── thunder.jpg
│   │   ├── winter.jpg
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── InfoBox.jsx
│   │   ├── InfoBox.css
│   │   ├── SearchBox.jsx
│   │   └── WeatherApp.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```