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

import taskRouter from './routes/task.route.js';
app.use('/api/v1/tasks', taskRouter)

export default app