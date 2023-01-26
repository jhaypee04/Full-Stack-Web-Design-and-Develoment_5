const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
// Middleware
app.use('/assets', express.static('assets'))

app.get('/' , (req, res)=>{
    // res.send('<h1>Welcome to my new WebApp!</h1>')
    const name1 = 'Johnpaul'
    const nickname = 'JP'
    const arr = ['HTML', 'CSS', 'JavaScript','Nodejs']
    res.render('index', {data: name1,arr,nickname})
})

app.get('/about', (req,res)=>{
    res.send('<p>This is the about page!</p>')
})

app.get('/contact', (req, res)=>{
    // console.log(req.body)
    res.render('contact')
})

app.listen(3000,()=>{
    console.log('App is started/connected on port 3000')
})