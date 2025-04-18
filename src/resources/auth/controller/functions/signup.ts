import { Request, Response } from 'express';
import catchAsync from '@middleware/functions/catch-async';
import constants from '@constants/index';
import authService from '../../service/auth.service';

export const signup = catchAsync(async (req: Request, res: Response) => {
	let response = { ...constants.defaultServiceResponse };

	const payload = await authService.signup(req.body);
	response.status = 200;
	response.message = constants.authMessage.SIGNUP_SUCCESS;
	response.body = payload;

	return res.status(response.status).send(response);
});
