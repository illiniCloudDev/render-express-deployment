const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

//middle ware to handle the local request w/ cors 
// npm install cors --save on CLI 
app.use(cors())

const rappers = {
    '21 savage':{
        'age' : 29,
        'birthName':'Sheyaa Bin Abraham-Joseph',
        'birthocatio': 'London, England'
    },
    'chance the rapper':{
        'age' : 29,
        'birthName':'Chancelor Bennett',
        'birthocatio': 'Chicago, Illinois'
    },
    'unknown':{
        'age' : 0,
        'birthName':'unknown',
        'birthocatio': 'unknown'
    },
}

app.get('/https://render-express-deployment-pqwl.onrender.com/', (req,res)=>{
    //__dirname is starting where ever server.js is located first
    res.sendFile(__dirname + '/index.html')
    

})
//we are now entering a query parameter in the api request
// /:name is the query param
app.get('/https://render-express-deployment-pqwl.onrender.com/api/:name', (req,res)=>{
    //we are responding with JSON
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
    

})

//this is our server actually listening for the request 
app.listen(PORT, ()=>{
    console.log(`The server is running my boi. It is on port: ${PORT}. Congrats on the launch!`)
})