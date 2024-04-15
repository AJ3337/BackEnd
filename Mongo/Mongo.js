const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('NewData', ProductSchema);

module.exports = Product;