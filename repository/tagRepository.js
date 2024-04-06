const Tag  = require('../model/tag'); // Assuming you have the Tag model defined

class TagRepository {
    async getAllTags() {
        return await Tag.find();
    }

    async createTag(name) {
        return await Tag.create({ name });
    }

    async updateTag(id, name) {
        const tag = await Tag.findByIdAndUpdate(id);
        if (!tag) {
            throw new Error('Tag not found');
        }
        tag.name = name;
        await tag.save();
        return tag;
    }

    async deleteTag(id) {
        const tag = await Tag.findByIdAndDelete(id);
        if (!tag) {
            throw new Error('Tag not found');
        }
        await tag.destroy();
    }
}

module.exports = TagRepository;
