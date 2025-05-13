const Task = require("../models/Task");
const asyncWrapper=require('../middleware/async')
const getAllTasks = async (req, res) => {
  try {
    const all_Task = await Task.find({});
    res.status(200).json({ all_Task });
  } catch (error) {
    return res.send(400).send({ msg: "Cannot retrive tasks" });
  }
};

const createtask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No taks with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    return res.send(400).send({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    return res.send(400).send({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createtask,
  getTask,
  updateTask,
  deleteTask,
};
