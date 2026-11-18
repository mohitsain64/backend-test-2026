# Mohit Backend CRUD API Project

## 1. Project Overview

This project is developed as part of my Backend Development Assignment. It demonstrates the implementation of RESTful APIs using Node.js, Express.js and MongoDB.

The project provides CRUD (Create, Read, Update and Delete) operations for managing users and posts.

## 2. Technologies Used

- Node.js – JavaScript runtime environment
- Express.js – Backend web framework
- MongoDB – NoSQL database
- Mongoose – MongoDB object modeling
- Postman – API testing tool
- Git & GitHub – Version control

## 3. Project Structure

```text
mohit-backend-project/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── postController.js
│   │   └── userController.js
│   │
│   ├── models/
│   │   ├── Post.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── app.js
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── Mohit_Backend_CRUD_APIs.json
```

## 4. Features

- Create new users
- Retrieve all users
- Retrieve a user by ID
- Update user information
- Delete users
- Create and manage posts
- MongoDB database connectivity
- REST API testing using Postman

## 5. API Endpoints

### User APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/users | Create a user |
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get user by ID |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

### Post APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/posts | Create a post |
| GET | /api/posts | Get all posts |
| GET | /api/posts/:id | Get post by ID |
| PUT | /api/posts/:id | Update post |
| DELETE | /api/posts/:id | Delete post |

## 6. Installation and Setup

Step 1: Clone the repository.

```bash
git clone https://github.com/mohitsain64/backend-test-2026.git
```

Step 2: Open the project folder.

```bash
cd backend-test-2026
```

Step 3: Install dependencies.

```bash
npm install
```

Step 4: Configure environment variables in `.env`.

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

Step 5: Start the server.

```bash
npm run dev
```

The backend server will run on:

http://localhost:4000

## 7. API Testing

All API endpoints were tested using Postman.

The Postman collection is included in this repository:

`Mohit_Backend_CRUD_APIs.json`

It contains requests for creating, retrieving, updating and deleting users.

## 8. Database

MongoDB is used to store application data, while Mongoose manages database models and operations.

## 9. Author

**Mohit Sain**

B.Tech Computer Science Engineering

BML Munjal University