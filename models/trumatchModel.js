const mongoose = require('mongoose');

const TrumatchSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Trumatch', TrumatchSchema);