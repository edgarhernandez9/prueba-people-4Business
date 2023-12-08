const Blog = require('../models/blogModel');

const getAllBlogs = async () => {
    const getBlogs = await Blog.findAll();
    return getBlogs;
}

module.exports = { getAllBlogs };