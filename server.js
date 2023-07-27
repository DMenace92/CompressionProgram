const express = require('express');
const cors = require('cors');
const Compress = require('./Routes')


const app = express();

const PORT = process.env.PORT || 9000;
app.use(cors())
app.use(express.json())
app.use(Compress)

app.listen (PORT, (err)=>{
    if(err){
      throw err;
    }
    console.log(`Server is running on Port: ${PORT}` )
  })