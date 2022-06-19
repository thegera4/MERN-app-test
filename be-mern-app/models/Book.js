const MONGOOSE = require('mongoose');
const BOOK_SCHEMA = MONGOOSE.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
});

module.exports = MONGOOSE.model('Book', BOOK_SCHEMA);