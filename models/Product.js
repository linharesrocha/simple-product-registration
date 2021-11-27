const mongoose = require('mongoose')
const { Schema } = mongoose

const Product = mongoose.model(
    'Product',
    new Schema({
        name: {type: String, required: true},
        price: {type: Number, require: true},
        description: {type: String, required: false},
        image: {type: String, required: false},
    }),
)


module.exports = Product