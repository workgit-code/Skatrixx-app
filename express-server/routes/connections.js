const express = require('express')
const router = express.Router()
const Connection = require('../models/connection')

//Get user connections
router.get('/', async(req,res)=> {
    try {
        const connections=await Connection.find({reciever_id : req.params.reviecer_id})
        connections.push(await Connection.find({sender_id : req.params.sender_id}))
        res.send(connections)
    }
    catch(err) {
        res.status(500).json({message: err.message})
    }
 })