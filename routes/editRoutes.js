const express = require("express");
const router = express.Router();
const Task = require("../models/task.model");   // Import model



router.patch("/:id", async (req, res) => {
    try {
        const { name, description } = req.body;

        const updatedTask = await Task.findOneAndUpdate(
            { id: req.params.id },
            { name, description },
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({
            message: "Task updated successfully",
            task: updatedTask
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to update task" });
    }
});


// MARK TASK AS COMPLETED
router.patch("/:id/complete", async (req, res) => {
    try {
        const updatedTask = await Task.findOneAndUpdate(
            { id: req.params.id },
            { isCompleted: true },
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({
            message: "Task marked as completed",
            task: updatedTask
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to complete task" });
    }
});
