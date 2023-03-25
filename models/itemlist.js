const mongoose = require('mongoose')
const itemListSchema = new mongoose.Schema({
    nameinput: {
        type: String,
        required: true
    },
    addressinput: {
        type: String,
        required: true
    },
    numinput: {
        type: String,
        required: true
    },
    instock: {
        type: String,
        possibleValues: ['yes','no'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('ItemList', itemListSchema, 'items')