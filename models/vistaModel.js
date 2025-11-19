const mongoose = require('mongoose');

const VistaSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Vista', VistaSchema);