# Social Media Blog Application Backend (RESTful API)

This project is a backend service for a social media blog platform. It provides RESTful APIs for managing users, authentication, and blog posts. Built with Node.js, Express, and MongoDB, it follows a modular architecture for scalability and maintainability.

---

## Features

- User authentication and management
- Blog creation, retrieval, update, and deletion
- RESTful API endpoints
- MongoDB integration using Mongoose
- Environment variable configuration using dotenv
- Structured routing for users and blogs

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Environment Management:** dotenv
- **Password Hashing:** bcryptjs
- **Development Tool:** nodemon

---

## Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/shishirshebbar/Blog-Application-RESTful-API.git
```

### 2.Install dependencies:

```bash
npm install
```

### 3.Create a .env file in the project root and add your MongoDB connection string. Example content:

```bash
CONNECTION_STRING=your_mongodb_connection_uri
```

Replace your_mongodb_connection_uri with your actual MongoDB URI.

### 4.Start the server in development mode:

```bash
npm start
```
