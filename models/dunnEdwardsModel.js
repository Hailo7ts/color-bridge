const mongoose = require('mongoose');

const DunnEdwardSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('DunnEdward', DunnEdwardSchema);