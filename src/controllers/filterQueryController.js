const { filterBlog } = require('../services/filterQueryService');
const filterQueryController = async (filters) => {

    try {
        const filter = await filterBlog(filters);
        return filter;
    } catch (error) {
        throw error;
    }
}


module.exports = filterQueryController;