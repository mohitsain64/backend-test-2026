# Mohit Backend Project

## Project Description
This project is developed as part of the Backend Development Assignment. It is a REST API-based backend application built using Node.js, Express.js and MongoDB.

The application performs CRUD operations (Create, Read, Update and Delete) using MongoDB as the database.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- JavaScript

## Project Structure

```text
src/
├── config/
│   └── database.js
├── controllers/
│   ├── postController.js
│   └── userController.js
├── models/
│   ├── Post.js
│   └── User.js
├── routes/
│   ├── postRoutes.js
│   └── userRoutes.js
├── app.js
└── index.js

.env
.gitignore
package.json
README.md
```

## Installation

1. Clone the repository.
2. Open the project folder in VS Code.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and configure your MongoDB connection string and PORT.

## Run the Project

For development:

```bash
npm run dev
```

For normal execution:

```bash
npm start
```

## API Endpoints

Base URL: `http://localhost:4000`

| Method | Endpoint | Operation |
|---|---|---|
| POST | /api/users | Create User |
| GET | /api/users | Get All Users |
| GET | /api/users/:id | Get User By ID |
| PUT | /api/users/:id | Update User |
| DELETE | /api/users/:id | Delete User |

## API Testing

All user CRUD operations were tested successfully using Postman.

## Database

MongoDB Atlas is used for cloud database storage, and Mongoose is used to define schemas and interact with MongoDB.

## Author

Mohit Sain

B.Tech Computer Science Engineering