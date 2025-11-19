const mongoose = require('mongoose');

const HlSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Hl', HlSchema);