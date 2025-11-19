const mongoose = require('mongoose');

const MpcSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Mpc', MpcSchema);