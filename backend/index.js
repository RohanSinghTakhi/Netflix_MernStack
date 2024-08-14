const  configDotenv  = require('dotenv')
const express = require('express')

configDotenv.config({
    path:".env"
})

const app = express()
const port = process.env.PORT



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))