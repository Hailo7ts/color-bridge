const mongoose = require('mongoose');

const ToyoSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Toyo', ToyoSchema);