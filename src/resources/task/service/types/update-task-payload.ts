import { CreateTaskPayload } from './create-task-payload';

export type UpdateTaskPayload = CreateTaskPayload & { id: string };
