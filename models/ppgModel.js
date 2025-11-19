const mongoose = require('mongoose');

const PpgSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Ppg', PpgSchema);