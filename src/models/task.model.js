import mongoose, {Schema} from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema)

export default Task;