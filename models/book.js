const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String,
})

module.exports = mongoose.model('Book', bookSchema);

// we use this model to interact with our book collection in MongoDB