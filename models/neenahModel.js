const mongoose = require('mongoose');

const NeenahSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Neenah', NeenahSchema);