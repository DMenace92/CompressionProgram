const express = require('express');
const Compress = require('./CompressModule/Compress')
const Router = new express.Router();

Router.post('/',(req,res,next)=>{
    render(Compress)
    next
})
module.exports = Router;
