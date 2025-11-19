const mongoose = require('mongoose');

const AverySchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Avery', AverySchema);