const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
// middleware
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    const name1 = 'Johnpaul'
    const nickname = 'JP'
    const arr = ['HTML', 'CSS', 'JavaScript','Nodejs']
    res.render('index', {data: name1,arr,nickname})
})

app.get('/contact', (req, res)=>{
    // console.log(req.body)
    res.render('contact')
})
app.post('/success', (req, res)=>{
    console.log(req.body)
    res.render('success', {data: req.body})
})

app.listen(3000, ()=>{
    console.log('App connected on port 3000')
})