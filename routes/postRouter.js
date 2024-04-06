// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');

const postController = new PostController();

// GET all posts
router.get('/', async (req, res) => {
    await postController.getAllPosts(req, res);
});

// Search posts by tag
router.get('/search', async (req, res) => {
    await postController.searchByTag(req, res);
});


// POST a new post
router.post('/', async (req, res) => {
    await postController.createPost(req, res);
});


// GET a single post by ID
router.get('/:id', async (req, res) => {
    await postController.getPostById(req, res);
});

// PUT update a post by ID
router.put('/:id', async (req, res) => {
    await postController.updatePost(req, res);
});

// DELETE a post by ID
router.delete('/:id', async (req, res) => {
    await postController.deletePost(req, res);
});

module.exports = router;
