const Blog = require('../models/blogModel');

const registerService = async (blogData) => {
    const blog = await Blog.create(blogData);
    return blog;
}

module.exports = { registerService };