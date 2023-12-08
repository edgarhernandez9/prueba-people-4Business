const { getAllBlogs } = require('../services/queryService');

const getAllController = async () => {

    try {
        const getBlogs = await getAllBlogs();
        return getBlogs;
    } catch (error) {
        throw error;
    }
}

module.exports = getAllController;