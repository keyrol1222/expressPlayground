const express = require('express')
const app = express()


//middleware
// app.use((req, res)=>{
// res.send('mid')
// })

//normal get request
app.get('/', (req, res)=>{
    res.send('good morning!')
})

//param request
app.get('/reddit/:subreddit',(req,res)=>{
    const {subreddit} = req.params
    res.send(`<h1>This is the ${subreddit} subreddit</h1>`)
})

//query request
app.get('/query',(req,res)=>{
    const {id, name} = req.query
    res.send(`<h1>search is ${name}</h1>`)
})

// default request
app.get('*', (req, res)=>{
    res.send('nothing')
})


app.listen(3000, ()=>{
    console.log('listening')
})