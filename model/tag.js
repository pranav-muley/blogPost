// models/tag.js
const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // Ensure tag names are unique
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] // Many-to-many relationship with Post
});

const Tag = mongoose.model('Tag', tagSchema);
console.log("Tag table created successfully!!!..");
module.exports = Tag;
