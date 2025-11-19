const mongoose = require('mongoose');

const DicSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('Dic', DicSchema);