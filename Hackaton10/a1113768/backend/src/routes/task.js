const { Router } = require("express");
const { createTask, listTaskByUser } = require("../controllers/task.controller");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router.get("/", authMiddleware, listTaskByUser);
router.post("/", authMiddleware, createTask);

// updateTaskById :id =14
// deleteTaskById : id = 15
module.exports = router;
