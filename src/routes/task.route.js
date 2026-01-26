import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTaskByID, isCompleteTask, updateTask } from "../controllers/task.controller.js";

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
router.route('/:taskId/isComplete').patch(
    isCompleteTask
)
router.route('/update-task/:taskId').patch(
    updateTask
)
router.route('/delete-Task/:taskId').delete(
    deleteTask
)
export default router;