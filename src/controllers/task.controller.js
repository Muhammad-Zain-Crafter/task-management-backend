import { isValidObjectId } from 'mongoose';
import Task from '../models/task.model.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const createTask = asyncHandler(async (req, res) => {
    const {title, description} = req.body;

    if (!title) {
        throw new ApiError(400, 'title is required')
    }
    const task = await Task.create({
        title,
        description
    })

    return res.status(201)
    .json(new ApiResponse(
        201,
        'Task created successfully',
        task
    ))
})

const getAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
    if (!tasks) {
        throw new ApiError(404, 'No tasks found')
    }

    return res.status(200)
    .json(
        new ApiResponse(
            201, 'Tasks fetched successfully',
            tasks
        )
    )
})

const getTaskByID = asyncHandler(async(req, res) => {
    const { taskId } = req.params
    if (!isValidObjectId(taskId)) {
        throw new ApiError(400, 'Invalid task ID')
    }

    const task = await Task.findById(taskId)
    if (!task) {
        throw new apiError(404, 'Task not found')
    }
    return res.status(200)
    .json(
        new ApiResponse(
            200, 'Task fetched successfully',
            task
        )
    )
})

export {createTask, getAllTasks, getTaskByID}