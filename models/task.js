const mongoose = require('mongoose');

const schema = mongoose.Schema;

const taskSchema = new schema({
    taskText: {
        type : String,
        required:true
    },
    taskPriority: {
        type: String,
        required:true
    },
    taskCompleted: {
        type: Boolean,
        default:false
    }
});

module.exports = mongoose.model('task',taskSchema);