Here's a `README.md` for your Netflix clone project:

---

# Netflix Clone - MERN Stack

This is a Netflix clone built using the MERN stack (MongoDB, Express, React, Node.js). The project mimics the basic functionalities of Netflix, including user authentication, browsing movies, searching, and more.

## Features

- User Authentication (Sign Up, Log In)
- Browse Movies
- Search Functionality
- Responsive UI

## Screenshots

### Sign In
![image](https://github.com/user-attachments/assets/3ec69297-bfce-49ea-8e7d-ef6fa522407c)


### Log In
![image](https://github.com/user-attachments/assets/4cb3ed09-22c2-4c8b-a00b-44bb63be6bfc)



### Home
![image](https://github.com/user-attachments/assets/560ea7a2-d402-4a3e-b17a-99fd0da74dbe)


### Search
![image](https://github.com/user-attachments/assets/5b5f2e70-a8c1-40f1-866d-0a8db9a319ee)


## Installation

To run this project on your local machine, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/RohanSinghTakhi/Netflix_MernStack
```

### Install Dependencies

#### Frontend

Navigate to the frontend directory and install the dependencies:

```bash
cd frontend
npm install
```

#### Backend

Navigate to the backend directory and install the dependencies:

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the Application

#### Backend

To start the backend server, run:

```bash
npm run server
```

This will start the backend on `http://localhost:5000`.

#### Frontend

To start the frontend server, run:

```bash
npm start
```

This will start the frontend on `http://localhost:3000`.

### How to Use

1. **Sign Up**: Create an account to get started.
2. **Log In**: Use your credentials to log in.
3. **Browse**: Browse the available movies on the home page.
4. **Search**: Use the search functionality to find specific movies.

## Tech Stack

### Frontend

- React
- Redux Toolkit
- Axios
- React Icons
- React Router DOM
- React Hot Toast

### Backend

- Node.js
- Express
- Mongoose
- JWT for Authentication
- Bcrypt.js for Password Hashing
- Axios
- Cookie Parser
- CORS
- Dotenv

## License

This project is licensed under the MIT License.

---

Make sure to replace the placeholders for the images with actual images when you add them to the repository.
