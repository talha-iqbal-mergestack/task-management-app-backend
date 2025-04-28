import Task from '@database/models/task';

export const getAllTasks = async ({ skip = '0', limit = '10' }) => {
	const tasks = await Task.find({}).skip(parseInt(skip)).limit(parseInt(limit));
	return tasks;
};
