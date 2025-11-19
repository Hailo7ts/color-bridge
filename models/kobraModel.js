const mongoose = require('mongoose');

const KobraSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Kobra', KobraSchema);