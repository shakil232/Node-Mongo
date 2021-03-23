const express = require('express');


const app = express();

app.get('/', (req,res)=>{
    res.send('I Know How To Open Node');
})
app.listen(5400, ()=> console.log('Listening to port 5400'));