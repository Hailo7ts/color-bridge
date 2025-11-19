const mongoose = require('mongoose');

const ColorhouseSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('colorhouse', ColorhouseSchema);