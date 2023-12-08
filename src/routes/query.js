const { Router } = require('express');
const queryController = require('../controllers/queryController');

const router = Router();

router.get("/getAll-blog", async (req, res) => {

    try {
        const response = await queryController();
        console.log(response);
        return res.status(200).json(response);
    } catch (error) {
        throw error;
    }
});

module.exports = router;