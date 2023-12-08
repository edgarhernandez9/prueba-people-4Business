const Blog = require('../models/blogModel');

const filterBlog = async (data) => {
    const where = {};

    const { titulo, autor, fechaPublicacion, contenido } = data;
    if (titulo) {
        where.titulo = titulo;
    }

    if (autor) {
        where.autor = autor;
    }

    if (fechaPublicacion) {
        where.fechaPublicacion = fechaPublicacion;
    }

    if (contenido) {
        where.contenido = contenido;
    }

    const blogFilter = await Blog.findOne({ where });
    return blogFilter;
} 

module.exports = { filterBlog };