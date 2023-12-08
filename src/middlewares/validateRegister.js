const validateRegister = async (req, res, next) => {

    try {
        const { titulo, autor, fechaPublicacion, contenido } = req.body;

        if (!titulo || !autor || !fechaPublicacion || !contenido) {
            return res.status(400).json({ message: 'Por favor, complete todos los campos'})
        }

        next();
    } catch (error) {
        throw error;
    }
}

module.exports = validateRegister;