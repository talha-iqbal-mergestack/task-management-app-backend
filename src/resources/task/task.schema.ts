import Joi from 'joi';

export const createTaskSchema = Joi.object().keys({
	name: Joi.string().required(),
	completed: Joi.boolean().required()
});

export const getAllTasksSchema = Joi.object().keys({
	skip: Joi.string(),
	limit: Joi.string()
});

export const updateTaskSchema = Joi.object().keys({
	name: Joi.string(),
	completed: Joi.boolean().required()
});
