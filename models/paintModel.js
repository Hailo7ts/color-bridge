const mongoose = require('mongoose');

const PaintSchema = new mongoose.Schema({
    hex: String,
    colorCode: String,
    brand: String
});

module.exports = mongoose.model('Paint', PaintSchema);