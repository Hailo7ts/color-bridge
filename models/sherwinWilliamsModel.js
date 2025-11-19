const mongoose = require('mongoose');

const SherwinWilliamsSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('SherwinWilliams', SherwinWilliamsSchema);