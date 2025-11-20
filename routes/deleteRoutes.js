
const express = require("express");
const router = express.Router();
const Task = require("../data/tasks");

router.delete("/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findOneAndDelete({ id: req.params.id });

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({
            message: "Task deleted successfully",
            task: deletedTask
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to delete task" });
    }
});

module.exports = router;
