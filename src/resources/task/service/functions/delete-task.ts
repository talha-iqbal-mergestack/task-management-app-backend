import { validateObjectId } from '@utils/helpers/db-helper';
import Task from '@database/models/task';
import NotFound from '@utils/errors/not-found';

export const deleteTask = async ({ id }: { id: string }) => {
	validateObjectId(id);
	const task = await Task.findByIdAndDelete(id);
	if (!task) throw new NotFound('deletion error');
	return task;
};
