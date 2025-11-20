const express = require("express");
const router = express.Router();
const Task = require("../data/tasks");   // Import model

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
});

router.get("/status/completed", async (req, res) => {
    try {
        const tasks = await Task.find({ isCompleted: true });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch completed tasks" });
    }
});

router.get("/status/pending", async (req, res) => {
    try {
        const tasks = await Task.find({ isCompleted: false });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch pending tasks" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const task = await Task.findOne({ id: req.params.id });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch task" });
    }
});

module.exports = router;
