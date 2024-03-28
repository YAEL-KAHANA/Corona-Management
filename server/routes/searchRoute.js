const express = require("express");
const { searchResults, getAllPatients } = require("../BL/searchBL");

const router = express.Router();

router.get('/:query', async (req, res) => {
    try {
        const results = await searchResults(req.params.query);
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/patients', async (req, res) => {
    try {
        console.log("entered patients route")

        const patients = await getAllPatients();
        res.json(patients);
    } catch (error) {
        res.status(502).send("Error fetching patients")
    }
})

module.exports = router;





