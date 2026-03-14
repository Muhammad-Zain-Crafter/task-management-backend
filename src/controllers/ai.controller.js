import { ApiResponse } from "../utils/ApiResponse.js";
import { generateAIResponse } from "../utils/gemini.utils.js";

const breakTaskWithAI = async (req, res) => {
  const { task } = req.body;

  const prompt = `
  Break this task into smaller actionable subtasks:
  ${task}
  `;

  const aiResponse = await generateAIResponse(prompt);

  return res.status(200)
  .json(
    new ApiResponse(
        200, aiResponse,
        "Task broken into subtasks successfully"
    )
  )
};

export  {breakTaskWithAI}