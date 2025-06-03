require('dotenv').config()
const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/login', (req,res)=>{
    res.send('Login page')
})

app.listen(process.env.port, () => {
  console.log(`Server listening on port ${port}`)
})
