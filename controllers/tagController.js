const TagRepository = require('../repository/tagRepository');

class TagController {
    constructor() {
        this.tagRepository = new TagRepository();
    }

    async getAllTags(req, res) {
        try {
            const tags = await this.tagRepository.getAllTags();
            res.json(tags);
        } catch (error) {
            console.error('Error fetching tags:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async createTag(req, res) {
        const { name } = req.body;
        try {
            const tag = await this.tagRepository.createTag(name);
            res.status(201).json(tag);
        } catch (error) {
            console.error('Error creating tag:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async updateTag(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        try {
            const tag = await this.tagRepository.updateTag(id, name);
            res.json(tag);
        } catch (error) {
            console.error('Error updating tag:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async deleteTag(req, res) {
        const { id } = req.params;
        try {
            await this.tagRepository.deleteTag(id);
            res.sendStatus(204);
        } catch (error) {
            console.error('Error deleting tag:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = TagController;
