const express = require("express");
const { createTask, getTasks } = require("../controllers/task");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);

module.exports = router;
