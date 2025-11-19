const mongoose = require('mongoose');

const BenjaminMooreSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('BenjaminMoore', BenjaminMooreSchema);