import { Router } from "express";
import { createTask, getAllTasks, getTaskByID } from "../controllers/task.controller.js";

const router = Router()

router.route('/create-task').post(
    createTask
)
router.route('/').get(
    getAllTasks
)
router.route('/:taskId').get(
    getTaskByID
)

export default router;