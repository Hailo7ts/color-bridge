const mongoose = require('mongoose');

const KilzSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Kilz', KilzSchema);