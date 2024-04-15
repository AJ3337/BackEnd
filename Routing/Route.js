const express = require('express')
const route = express.Router()
const ProductModel = require('../Mongo/Mongo')

route.post('/send', async (request, response) => {
  var reqData = new ProductModel(request.body);
  await reqData.save()
  response.json({ status: true, data: reqData })
})

route.post('/login', async (request, res) => {
  try {
    const check = await ProductModel.findOne({ email: request.body.email })
    if (check.email === request.body.email) {
      res.json("Success")
    } else {
      res.json("incoorect")
    }
  } catch {
    res.json("error")
  }
})

route.get('/list', async (request, response) => {
  var data = await ProductModel.find()
  response.json({ status: true, data: data })

})

module.exports = route