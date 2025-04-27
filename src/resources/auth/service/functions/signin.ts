import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import constants from '@constants/index';
import User from '@database/models/user';
import { UserCredentials } from '../types/user-credentials.type';
import NotFound from '@utils/errors/not-found';
import BadRequest from '@utils/errors/bad-request';

export const signin = async ({ email, password }: UserCredentials) => {
	const user = await User.findOne({ email });
	if (!user) {
		throw new NotFound(constants.authMessage.USER_NOT_FOUND);
	}

	const isValid = await bcrypt.compare(password, user.password as string);
	if (!isValid) {
		throw new BadRequest(constants.authMessage.INVALID_PASSWORD);
	}

	const token = jwt.sign(
		{ id: user._id, email: user.email, username: user.username },
		process.env.SECRET_KEY!,
		{
			expiresIn: '1d'
		}
	);

	return { token };
};
