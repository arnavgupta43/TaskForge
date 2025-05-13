const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const getAllTasks = asyncWrapper(async (req, res) => {
  const all_Task = await Task.find({});
  res.status(200).json({ all_Task });
});

const createtask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(
      createCustomError(`Task with id: ${taskID} does not exits`, 404)
    );
  }
  res.status(200).json({ task });
});
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID} update`, 404));
  }
  res.status(200).json({ task });
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID} to delete`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createtask,
  getTask,
  updateTask,
  deleteTask,
};
