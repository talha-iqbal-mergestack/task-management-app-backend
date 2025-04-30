import Task from '@database/models/task';
import { validateObjectId } from '@utils/helpers/db-helper';

type GetAllTasksOptions = {
	query: { skip?: string; limit?: string };
	userId: string;
};

export const getAllTasks = async ({ query, userId }: GetAllTasksOptions) => {
	validateObjectId(userId);
	const { skip = '0', limit = '10' } = query;

	const tasks = await Task.find({
		_creator: userId
	})
		.select('-_creator')
		.skip(parseInt(skip))
		.limit(parseInt(limit));
	return tasks;
};
