import Task from '@database/models/task';
import { CreateTaskPayload } from '../types/create-task-payload';

export const createTask = async (data: CreateTaskPayload) => {
	let task = new Task({ ...data });
	let result = await task.save();
	return result;
};
