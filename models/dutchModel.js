const mongoose = require('mongoose');

const DutchSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Dutch', DutchSchema);