const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name:{type:String, required:true},
    author:{type:String, required:true},
    description:{type:String, required:true},
    releaseDate:{type:Date}
    });

const Book = mongoose.model('Book',bookSchema);
module.exports = Book;