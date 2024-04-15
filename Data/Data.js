const express = require('express')
const data = express.Router()

const ProdModel = require('../Mongo/Monge')

data.post('/data', async (request, response) => {
  var reqData = new ProdModel(request.body);
  await reqData.save()
  response.json({ status: true, data: reqData })
})

data.get('/fetch', async (request, response) => {
  var data = await ProdModel.find()
  response.json({ status: true, data: data })

})

module.exports = data