const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstName : { type: String },
    lastName : { type: String },
    DateOfBirth : { type: Date, default:Date.now },
    contact : { type: String },
})

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;