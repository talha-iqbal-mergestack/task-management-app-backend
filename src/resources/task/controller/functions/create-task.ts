import { Request, Response } from 'express';
import constants from '@constants/index';
import catchAsync from '@middleware/functions/catch-async';
import taskService from '@resources/task/service/task.service';

export const createTask = catchAsync(async (req: Request, res: Response) => {
	let response = { ...constants.defaultServiceResponse };

	const payload = await taskService.createTask({
		data: req.body,
		userId: req.user.id
	});
	response.status = 200;
	response.message = constants.taskMessage.TASK_CREATED;
	response.body = payload;

	return res.status(response.status).send(response);
});
