const mongoose = require('mongoose');

const RalSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Ral', RalSchema);