import { validateObjectId } from '@utils/helpers/db-helper';
import Task from '@database/models/task';
import NotFound from '@utils/errors/not-found';
import constants from '@constants/index';

type DeleteTaskOptions = {
	id: string;
	userId: string;
};

export const deleteTask = async ({ id, userId }: DeleteTaskOptions) => {
	validateObjectId(id);
	const task = await Task.findOneAndDelete({
		_id: id,
		_creator: userId
	});
	if (!task) throw new NotFound(constants.taskMessage.TASK_NOT_FOUND);
	return task;
};
