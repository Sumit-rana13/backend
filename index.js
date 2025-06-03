require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 5001

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/login', (req,res)=>{
    res.send('Login page')
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
