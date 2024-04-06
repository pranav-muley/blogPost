// models/post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }] // Many-to-many relationship with Tag
});

const Post = mongoose.model('Post', postSchema);
console.log("Post table created successfully!!!..");
module.exports = Post;
