import bcrypt from 'bcrypt';

import constants from '@constants/index';
import User from '@database/models/user';
import { UserCredentials } from '../types/user-credentials.type';
import BadRequest from '@utils/errors/bad-request';

export const signup = async ({
	email,
	password,
	...userCreds
}: UserCredentials) => {
	const user = await User.findOne({ email });
	if (user) {
		throw new BadRequest(constants.authMessage.DUPLICATE_EMAIL);
	}

	const hashedPassword = await bcrypt.hash(password, 12);
	const newUser = new User({
		...userCreds,
		email,
		password: hashedPassword
	});
	const result = await newUser.save();

	return result;
};
