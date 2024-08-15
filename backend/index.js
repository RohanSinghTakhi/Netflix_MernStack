const dotenv = require('dotenv');
const express = require('express');
const db = require("./utils/database");
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/UserRoutes');  
const cors = require("cors")
dotenv.config({
    path: ".env"
});

db();

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: ['http://localhost:3000', 'http://localhost:5173'], 
    credentials: true, 
};
app.use(cors(corsOption));


// Use the userRoute for /api routes
app.use("/api", userRoute);


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
