// repository/postRepository.js
const Post = require('../model/post');

class PostRepository {
    async getAllPosts() {
        return await Post.find().populate('tags');
    }

    async getPostById(id) {
        return await Post.findById(id).populate('tags');
    }

    async createPost(postData) {
        const post = new Post(postData);
        return await post.save();
    }

    async updatePost(id, postData) {
        return await Post.findByIdAndUpdate(id, postData, { new: true }).populate('tags');
    }

    async deletePost(id) {
        return await Post.findByIdAndDelete(id);
    }
}

module.exports = PostRepository;
