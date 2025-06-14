# 🍽️ Food Recipe Search App

## Overview

The **Food Recipe Search App** is a modern web application that allows users to search for recipes by ingredient or dish name. Built with React and Material UI, it provides a clean, responsive, and user-friendly interface. The app fetches real-time recipe data from the [Edamam Recipe API](https://developer.edamam.com/edamam-recipe-api) and displays results in an elegant card-based layout. To securely handle API requests and avoid CORS issues, the app uses a Node.js/Express backend server as a proxy.

---

## Features

- **Live Recipe Search:** Instantly search for recipes by entering any ingredient or dish.
- **Elegant UI:** Responsive design using Material UI for a seamless experience on all devices.
- **Recipe Cards:** Each recipe is displayed with an image, title, calories, and a preview of ingredients.
- **View Full Recipe:** Click "View Recipe" to open the full recipe in a new tab.
- **Ingredient Preview:** Top ingredients are shown as chips, with a "+N more" chip for longer lists.
- **Backend Proxy:** Node.js/Express server securely communicates with the Edamam API and handles required headers.

---

## How It Works

1. **Frontend:**  
   - Built with React and Material UI.
   - Users enter a search term and submit the form.
   - The app sends a request to the backend server.

2. **Backend:**  
   - Built with Node.js and Express.
   - Receives search requests from the frontend.
   - Forwards the request to the Edamam API, including necessary authentication and headers.
   - Returns the recipe data to the frontend.

3. **Display:**  
   - Recipes are shown as cards with images, names, calories, and ingredient chips.
   - Users can click to view the full recipe on the source website.

---

## Technologies Used

- **Frontend:** React, Material UI, Axios
- **Backend:** Node.js, Express, Axios
- **API:** Edamam Recipe API


