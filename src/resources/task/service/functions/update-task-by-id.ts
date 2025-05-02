import { validateObjectId } from '@utils/helpers/db-helper';
import Task from '@database/models/task';
import NotFound from '@utils/errors/not-found';
import { CreateTaskPayload } from '../types/create-task-payload';
import constants from '@constants/index';
import { UpdateTaskPayload } from '../types/update-task-payload';

type UpdateTaskByIdOptions = {
	data: UpdateTaskPayload;
	userId: string;
};

export const updateTaskById = async ({
	data,
	userId
}: UpdateTaskByIdOptions) => {
	const { id, ...body } = data;
	validateObjectId(id);

	let conditions = {
		_id: id,
		_creator: userId
	};
	let update = body;
	let options = { new: true };

	const task = await Task.findByIdAndUpdate(conditions, update, options);
	if (!task) throw new NotFound(constants.taskMessage.TASK_NOT_FOUND);
	return task;
};
