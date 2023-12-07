const express = require('express');
const axios = require('axios');
const app = express();

app.get('/',(req,res)=>{
    res.send('Server is running!!')
})

app.get('/login',(req,res)=>{
    res.send('Login page running!!!')
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'Joke 1',
            content: 'First joke'
        },
        {
            id: 2,
            title: 'Joke 2',
            content: 'Second joke'
        },
        {
            id: 3,
            title: 'Joke 3',
            content: 'Third Joke'
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is running at localhost ${port}`)
})