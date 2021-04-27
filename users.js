const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    mob: String
});
module.exports = mongoose.model('user',userSchema);