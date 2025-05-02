import constants from '@constants/index';
import catchAsync from '@middleware/functions/catch-async';
import taskService from '@resources/task/service/task.service';
import { Request, Response } from 'express';

export const getAllTasks = catchAsync(async (req: Request, res: Response) => {
	let response = { ...constants.defaultServiceResponse };

	const payload = await taskService.getAllTasks({
		query: req.query,
		userId: req.user.id
	});
	response.status = 200;
	response.message = constants.taskMessage.TASK_FETCHED;
	response.body = payload;

	return res.status(response.status).send(response);
});
