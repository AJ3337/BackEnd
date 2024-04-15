require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const server = express()

const rout = require('./Routing/Route')
const dat = require('./Data/Data')

const port = process.env.PORT || 9090

server.use(express.json())

server.use('/mid', rout)
server.use('/middle', dat)


server.get('/', (req, res) => {
    res.send('hello server')
})
mongoose.set("strictQuery",false)
server.listen(port, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/office', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('mongoconnect now')
        console.log(port)
    } catch (err) {
        console.log(err)
    }
})
