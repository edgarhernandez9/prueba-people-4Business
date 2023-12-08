const { Router } = require('express');
const filterQueryController = require('../controllers/filterQueryController');

const router = Router();

router.get("/get-blog-filter", async (req, res) => {

    try {
        
        const response = await filterQueryController(req.query);

        return res.status(200).json(response);
    } catch (error) {
        throw error;
    }
});

module.exports = router;