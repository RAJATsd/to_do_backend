const taskModel = require("../models/task");

exports.addATask = async (req, res, next) => {
  try {
    const { taskText, taskPriority } = req.body;
    const newTask = new taskModel({
      taskPriority,
      taskText,
    });
    const savedNewTask = await newTask.save();
    res.json({
      success: true,
      message: "Task saved successfully",
      data: savedNewTask,
    });
  } catch (e) {
    res.json({ success: false, message: "something went wrong" });
  }
};

exports.getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await taskModel.find();
    res.json({
      success: true,
      message: "All tasks",
      data: allTasks,
    });
  } catch (e) {
    res.json({ success: false, message: "something went wrong" });
  }
};

exports.changeTaskStatus = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const taskWithTaskId = await taskModel.findById(taskId);
    await taskModel.findByIdAndUpdate(taskId, {
      taskCompleted: !taskWithTaskId.taskCompleted,
    });
    res.json({ success: true, message: "Task updated successfully" });
  } catch (e) {
    res.json({ success: false, message: "something went wrong" });
  }
};
