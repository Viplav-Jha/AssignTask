const mongoose = require('mongoose');

var schema = new mongoose.Schema({
      task : {
        type : String,
        required: true
    },
    assignedBy: {
        type: String,
        required: true,
        unique: true
    },
    assignedTo : String,
   
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;