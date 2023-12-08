const { registerService } = require('../services/registerService');

const registerController = async (data) => {
    const { titulo, autor, fechaPublicacion, contenido } = data;

    try {
        const parseDate = new Date(Date.parse(fechaPublicacion));
        const blogData = {
            titulo,
            autor,
            fechaPublicacion: parseDate,
            contenido
        };
        const blog = await registerService(blogData);
    
        return blog;

    } catch (error) {
        throw error;
    }
}


module.exports = registerController;
