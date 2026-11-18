# Mohit Backend Project

## Project Description

This project is created as part of my Backend Development Assignment.

It is a REST API backend application that performs CRUD operations on Users and Posts using MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

## Project Features

- Create User
- Get All Users
- Get User by ID
- Update User
- Delete User
- Create Post
- Get All Posts
- Get Post by ID
- Update Post
- Delete Post

## API Endpoints

### User Routes

Base URL: `/api/users`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

### Post Routes

Base URL: `/api/posts`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/posts` | Create a new post |
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get post by ID |
| PUT | `/api/posts/:id` | Update post |
| DELETE | `/api/posts/:id` | Delete post |

## Installation and Setup

1. Clone the repository.
2. Install dependencies:

   `npm install`

3. Configure MongoDB connection in the `.env` file.

4. Start the development server:

   `npm run dev`

## Server

Default Port: 4000

Base URL: `http://localhost:4000`

## Testing

All API endpoints were tested using Postman.

## Database

MongoDB Atlas is used to store User and Post data.

## Author

Mohit Sain