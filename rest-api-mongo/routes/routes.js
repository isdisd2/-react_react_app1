const express = require("express");
const Model = require("../models/model");

const router = express.Router();

//Post Method
router.post("/create", async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Get all Method
router.get("/list", async (req, res) => {
    try {
        console.log(req.body);
        const data = await Model.find(req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get by ID Method
router.get("/get/:id", async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update by ID Method
router.post("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(id, newData, options);
        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Delete by ID Method
router.post("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        if (data) {
            res.send(`Document with id:${id} has been deleted.`);
        } else {
            res.send(`Document with id:${id} does not exist.`);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.post("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        if (data) {
            res.send(`Document with id:${id} has been deleted.`);
        } else {
            res.send(`Document with id:${id} does not exist.`);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post("/delete", async (req, res) => {
    try {
        const _id = req.body.id;
        req.body._id = req.body.id;
        // delete req.body.id;
        console.log(_id);
        const data = await Model.findByIdAndDelete(req.body);
        if (data) {
            res.send(`Document with id:${_id} has been deleted.`);
        } else {
            res.send(`Document with id:${_id} does not exist.`);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
