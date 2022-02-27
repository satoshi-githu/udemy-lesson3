const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    coverImage: String,
    name: { type: String, required: true, max: [60, '最大60文字までです。']},
    price: Number,
    description: String,
    heding1: String,
    heding2: String,
    heding3: String,
    heding4: String,
});

module.exports = mongoose.model('Products', schema);



