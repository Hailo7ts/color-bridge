const mongoose = require('mongoose');

const FarrowBallSchema = new mongoose.Schema({
    name: String,
    label: String,
    hex: String,
});

module.exports = mongoose.model('FarrowBall', FarrowBallSchema);