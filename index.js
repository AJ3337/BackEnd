require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const server = express()

const rout = require('./Routing/Route')
const dat = require('./Data/Data')

const port = process.env.PORT || 9090
const uri =  'mongodb://localhost:27017/office';

server.use(express.json())

server.use('/mid', rout)
server.use('/middle', dat)


server.get('/', (req, res) => {
    res.send('hello server')
})

server.listen(port, async () => {
    try {
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('mongoconnect now')
        console.log(port)
    } catch (err) {
        console.log(err)
    }
})
