const dotenv = require('dotenv');
const express = require('express');
const db = require("./utils/database");
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/UserRoutes');  
dotenv.config({
    path: ".env"
});

db();

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Use the userRoute for /api routes
app.use("/api", userRoute);


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
