const mongoose = require('mongoose');

const ValsparSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Valspar', ValsparSchema);