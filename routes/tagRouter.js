const express = require('express');
const Tag = require('../model/tag'); // Assuming you have the Tag model defined
const jwtAuth = require('../middleware/jwtAuth');
const TagController = require('../controllers/tagController');

const tagRouter = express.Router();

const tagController = new TagController();

// GET request to retrieve all tags
tagRouter.get('/', async (req, res) => {
    tagController.getAllTags(req,res);
});

tagRouter.post('/addTag',(req,res)=>{
    tagController.createTag(req,res);
})


tagRouter.put('/updateTag',(req,res)=>{
    tagController.updateTag(req,res);
})

tagRouter.delete('/deleteTag',(req,res)=>{
    tagController.deleteTag(req,res);
})



module.exports = tagRouter;
