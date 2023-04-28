const mongoose = require('mongoose');
const finalProjectSchema = new mongoose.Schema({
    comment:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model ('FinalProjectNode',finalProjectSchema);