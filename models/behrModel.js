const mongoose = require('mongoose');

const BehrSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Behr', BehrSchema);