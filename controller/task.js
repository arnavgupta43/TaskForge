const getAllTasks = (req, res) => {
  res.send("all items from the file");
};

const createtask = (req, res) => {
  res.json(req.body);
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
