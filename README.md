Live: https://dish-craft-4uly.onrender.com/

Video Overview:


https://github.com/user-attachments/assets/3b6ef2ee-b74e-485d-b0d6-2e42059dba83





---

## 🧾 Overview

**Dish Craft** is a full-stack web application designed to help users discover, view, and manage recipes. The project is organized into two main parts:

* **Backend**: Node.js + Express
* **Frontend**: React + Vite + Tailwind CSS

The application is structured for **scalability, maintainability**, and **ease of development**.

---

## 🏗️ Architecture

### 🔙 Backend (`/backend`)

* **Entry Point**: `index.js`
  Initializes the Express server, sets up middleware, and connects routing.

#### 📂 Controllers (`/controllers`)

* `authController.js`: Handles user authentication (login, registration).
* `userController.js`: Manages user operations like profiles and preferences.

#### 📂 Models (`/models`)

* `recipeModel.js`: Schema and logic for recipes.
* `userModel.js`: Schema and logic for users.

#### 📂 Routes (`/routes`)

* `authRoute.js`: API endpoints for authentication.
* `recipeRoute.js`: Endpoints for recipe CRUD operations.
* `userRoute.js`: Endpoints for user management.

#### 🛠️ Utils (`/utils`)

* `error.js`: Custom error handling.
* `verifyUser.js`: Middleware for authentication/authorization.

---

### 💻 Frontend (`/frontend`)

* **Entry Points**: `index.html`, `main.jsx`
  Bootstraps the React app using Vite.

#### ⚙️ Configuration

* `package.json`: Frontend dependencies and scripts.
* `vite.config.js`: Vite build configuration.
* `tailwind.config.js` & `postcss.config.js`: Tailwind CSS setup.

#### 📁 Assets (`/src/assets`)

* Contains static files and food images used in recipes.

#### 🧩 Components (`/src/components`)

* Reusable UI components like `Header`, `Spinner`, and `RecipesCard`.

#### 📄 Pages (`/src/pages`)

* Page components such as `Home.jsx`, responsible for rendering content like recipe lists and loading states.

#### 🔄 Redux (`/src/redux`)

* State management for global application state.

#### 🌐 Public (`/public`)

* Static assets served directly (e.g., images, icons).

---

## ✨ Key Features

* **🍲 Recipe Discovery**
  Browse a curated list of recipes, each with images and full details.

* **🔐 User Authentication**
  Secure login and registration system powered by backend logic.

* **👤 User Profiles**
  Manage user profiles and view personalized recipes.

* **📝 Recipe Management**
  Add, edit, and delete recipes using full CRUD functionality.

* **📱 Responsive UI**
  Mobile-friendly interface built with Tailwind CSS and React.

* **⏳ Loading States**
  Spinners and UI feedback during data fetching.

* **🖼️ Image Gallery**
  A rich collection of food images for an engaging user experience.

* **🔗 API Integration**
  Frontend communicates with backend via RESTful APIs using Axios.

---

## ⚙️ How It Works

1. The **frontend** loads and displays recipes by fetching data from assets or the backend API.
2. User actions (e.g., login, add/edit/delete recipe) trigger **HTTP requests** to the backend.
3. The **backend** processes these requests, interacts with the database via models, and sends responses.
4. The **frontend** dynamically updates the UI based on API responses, showing spinners or errors where needed.

---


