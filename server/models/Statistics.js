const { Schema, model } = require('mongoose');
//const bcrypt = require('bcrypt'); //Needed if this is the User model

const statisticsSchema = new Schema({
    //Schema properties go here
    category_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    category_count: {
        type: Number,
        default: 0
    },
    category_correct: {
        type: Number,
        default: 0
    },
    update_date: {
        type: Date,
        default: Date.now
    }
}
);

module.exports = statisticsSchema;