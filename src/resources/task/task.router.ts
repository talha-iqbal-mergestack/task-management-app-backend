import { Router } from 'express';
const router = Router();
import taskController from './controller/task.controller';
import {
	getAllTasksSchema,
	createTaskSchema,
	updateTaskSchema
} from './task.schema';
import {
	validateBody,
	validateQueryParams
} from '@middleware/functions/validate-schema';
import { validateToken } from '@middleware/functions/auth';

router
	.route('/')
	.get(
		validateToken,
		validateQueryParams(getAllTasksSchema),
		taskController.getAllTasks
	)
	.post(
		validateToken,
		validateBody(createTaskSchema),
		taskController.createTask
	);

router
	.route('/:id')
	// .get(taskController.getTaskById)
	.patch(
		validateToken,
		validateBody(updateTaskSchema),
		taskController.updateTaskById
	)
	.delete(validateToken, taskController.deleteTask);

module.exports = router;
