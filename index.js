const express = require('express')
const app = express()


//middleware
// app.use((req, res)=>{
// res.send('mid')
// })

app.use(express.urlencoded({extended: true}))
app.use(express.json())


//normal get request
app.get('/', (req, res)=>{
    res.send('good morning!')
})
app.post('/', (req, res)=>{
    console.log(req.body)
    res.send('nothing')

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