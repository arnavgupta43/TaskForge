const Task = require("../models/Task");
const getAllTasks = (req, res) => {
  res.send("all items from the file");
};

const createtask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("Update a task");
};
const deleteTask = (req, res) => {
  res.send("Delete a task");
};

module.exports = {
  getAllTasks,
  createtask,
  getTask,
  updateTask,
  deleteTask,
};
