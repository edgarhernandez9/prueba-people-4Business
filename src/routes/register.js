const { Router } = require('express');
const registerController = require('../controllers/registerController');

const router = Router();

router.post("/register-blog", async (req, res) => {

    try {
        
        const response = await registerController(req.body);
        return res.status(201).json(response);
    } catch (error) {
        throw error;
    }
});


module.exports = router;