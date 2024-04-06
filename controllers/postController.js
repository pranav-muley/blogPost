// controllers/postController.js
const PostRepository = require('../repository/postRepository');

class PostController {
    constructor() {
        this.postRepository = new PostRepository();
    }

    async searchByTag(req, res) {
        const { tag } = req.query;
        try {
            const posts = await Post.find({ tags: tag }).populate('tags');
            res.json(posts);
        } catch (error) {
            console.error('Error searching posts by tag:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async deletePost(req, res) {
        const postId = req.params.id;
        try {
            // Check if user is admin
            if (req.user.role !== 'admin') {
                return res.status(403).json({ error: 'Permission denied' });
            }
            // Proceed with deleting post
            await Post.findByIdAndDelete(postId);
            res.sendStatus(204);
        } catch (error) {
            console.error('Error deleting post:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }


    async getAllPosts(req, res) {
        try {
            const posts = await this.postRepository.getAllPosts();
            res.json(posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getPostById(req, res) {
        const postId = req.params.id;
        try {
            const post = await this.postRepository.getPostById(postId);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.json(post);
        } catch (error) {
            console.error('Error fetching post:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async createPost(req, res) {
        const postData = req.body;
        try {
            const post = await this.postRepository.createPost(postData);
            res.status(201).json(post);
        } catch (error) {
            console.error('Error creating post:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async updatePost(req, res) {
        const postId = req.params.id;
        const postData = req.body;
        try {
            const updatedPost = await this.postRepository.updatePost(postId, postData);
            if (!updatedPost) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.json(updatedPost);
        } catch (error) {
            console.error('Error updating post:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

   
}

module.exports = PostController;
