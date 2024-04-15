const mongoose = require('mongoose')

const ProdSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    founded: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
})

const Product = mongoose.model('Data', ProdSchema);

module.exports = Product;