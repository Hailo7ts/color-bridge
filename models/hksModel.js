const mongoose = require('mongoose');

const HksSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Hks', HksSchema);