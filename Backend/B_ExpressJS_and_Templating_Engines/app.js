const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to my new WebApp!</h1>')
})

app.get('/about', (req,res)=>{
    res.send('<p>This is the about page!</p>')
})

app.listen(3000,()=>{
    console.log('App is started/connected on port 3000')
})