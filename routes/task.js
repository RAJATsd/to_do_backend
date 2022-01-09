const express = require('express');
const taskController = require('../controllers/task');

const router = express.Router();


router.post('/addTask',taskController.addATask);
router.get('/allTasks',taskController.getAllTasks);
router.get('/taskStatus/change/:taskId',taskController.changeTaskStatus);

module.exports = router;