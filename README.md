# Voting Node Application

This project is a voting system built using **Node.js** and **Express.js**. The application allows users to register, log in, and vote in a secure environment. It uses **MongoDB** for data storage and **JWT** for authentication.

## Project Structure

- `server.js`: This is the entry point of the Node.js application.
- `routes/`: Contains route files to handle user authentication and voting logic.
- `models/`: Contains MongoDB schemas and models.
- `db.js`: MongoDB connection logic.
- `jwt.js`: JSON Web Token (JWT) utility functions for secure user authentication.
- `uploads/`: Folder to store uploaded files like user profile images.
- `.env`: Environment configuration file (not shared in GitHub).
- `.gitignore`: Ensures `node_modules/` and other unnecessary files are not tracked by Git.

## Dependencies

- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **JWT**: Authentication using JSON Web Tokens.
- **Multer**: Middleware for handling `multipart/form-data` (for file uploads).

## Getting Started

1. npm install
2. npm start
