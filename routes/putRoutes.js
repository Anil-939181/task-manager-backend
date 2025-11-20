const express = require("express");
const router = express.Router();
const Task = require("../models/task.model");   // Import model


router.put("/", async (req, res) => {
    try {
        const { name, description, isCompleted } = req.body;

        // Check if task exists
        const existingTask = await Task.findOne({ name: name });

        if (existingTask) {
            return res.status(400).json({ message: "Task already exists with this ID" });
        }

        // Create new task
        const newTask = await Task.create({
            name,
            description,
            isCompleted: false
        });

        res.status(201).json({
            message: "Task created successfully",
            task: newTask
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to create task" });
    }
});
