import { validateObjectId } from '@utils/helpers/db-helper';
import Task from '@database/models/task';
import NotFound from '@utils/errors/not-found';
import { CreateTaskPayload } from '../types/create-task-payload';
import constants from '@constants/index';

export const updateTaskById = async ({
	id,
	body
}: {
	id: string;
	body: CreateTaskPayload;
}) => {
	validateObjectId(id);

	let conditions = {
		_id: id
	};
	let update = body;
	let options = { new: true };

	const task = await Task.findByIdAndUpdate(conditions, update, options);
	if (!task) throw new NotFound(constants.taskMessage.TASK_NOT_FOUND);
	return task;
};
