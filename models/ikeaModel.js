const mongoose = require('mongoose');

const IkeaSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Ikea', IkeaSchema);