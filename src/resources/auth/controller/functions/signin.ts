import { Request, Response } from 'express';
import catchAsync from '@middleware/functions/catch-async';
import constants from '@constants/index';
import authService from '../../service/auth.service';

export const signin = catchAsync(async (req: Request, res: Response) => {
	let response = { ...constants.defaultServiceResponse };

	const payload = await authService.signin(req.body);
	response.status = 200;
	response.message = constants.authMessage.SIGNIN_SUCCESS;
	response.body = payload;

	return res.status(response.status).send(response);
});
