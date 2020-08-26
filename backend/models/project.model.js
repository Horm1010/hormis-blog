const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    
},{
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;