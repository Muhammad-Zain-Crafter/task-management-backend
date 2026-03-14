import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({ // encodeed data that comes from url
    limit: '30kb',
    extended: true
}))

app.use(cookieParser()); // for parsing cookies
app.use(express.static('public')) // for serving static files like images

// import routes
import taskRouter from './routes/task.route.js';
import userRouter from './routes/user.route.js';
import aiRouter from './routes/ai.route.js';

app.use('/api/v1/task-track/tasks', taskRouter)
app.use('/api/v1/task-track/users', userRouter)
app.use('/api/v1/task-track/ai', aiRouter)

export default app