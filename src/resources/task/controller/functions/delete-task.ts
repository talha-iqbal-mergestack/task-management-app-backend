import constants from '@constants/index';
import catchAsync from '@middleware/functions/catch-async';
import taskService from '@resources/task/service/task.service';
import { Request, Response } from 'express';

export const deleteTask = catchAsync(async (req: Request, res: Response) => {
	let response = { ...constants.defaultServiceResponse };

	const payload = await taskService.deleteTask({
		id: req.params.id,
		userId: req.user.id
	});
	response.status = 200;
	response.message = constants.taskMessage.TASK_DELETED;
	response.body = payload;

	return res.status(response.status).send(response);
});
