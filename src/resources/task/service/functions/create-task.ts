import Task from '@database/models/task';
import { CreateTaskPayload } from '../types/create-task-payload';
import { validateObjectId } from '@utils/helpers/db-helper';

type CreateTaskOptions = {
	data: CreateTaskPayload;
	userId: string;
};

export const createTask = async ({ data, userId }: CreateTaskOptions) => {
	validateObjectId(userId);

	let task = new Task({ ...data, _creator: userId });
	let result = await task.save();
	return result;
};
