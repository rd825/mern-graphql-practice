const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number,
})

module.exports = mongoose.model('Author', authorSchema);

// we use this model to interact with our author collection in MongoDB