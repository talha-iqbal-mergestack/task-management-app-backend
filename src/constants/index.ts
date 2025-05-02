export default {
	defaultServiceResponse: {
		status: 400,
		message: '',
		body: {}
	},
	productMessage: {
		PRODUCT_CREATED: 'Product created successfully',
		PRODUCT_FETCHED: 'Product fetched successfully',
		PRODUCT_UPDATED: 'Product updated successfully',
		PRODUCT_DELETED: 'Product deleted successfully',
		PRODUCT_NOT_FOUND: 'Product not found'
	},
	taskMessage: {
		TASK_CREATED: 'Task created successfully',
		TASK_FETCHED: 'Task fetched successfully',
		TASK_UPDATED: 'Task updated successfully',
		TASK_DELETED: 'Task deleted successfully',
		TASK_NOT_FOUND: 'Task not found'
	},
	authMessage: {
		SIGNUP_SUCCESS: 'Signup success',
		SIGNIN_SUCCESS: 'Signin success',
		DUPLICATE_EMAIL: 'User already exists with given email',
		USER_NOT_FOUND: 'User not found',
		INVALID_PASSWORD: 'Incorrect password'
	},
	requestValidationMessage: {
		BAD_REQUEST: 'Invalid fields',
		INVALID_ID: 'Invalid id',
		INVALID_TOKEN: 'Invalid token',
		TOKEN_MISSING: 'Token missing from headers',
		NOT_AUTHORIZED: "You're not authorized for making this request"
	},
	dbConnectionMessage: {
		DB_CONNECTION_SUCCESS: 'Database connected successfully',
		DB_CONNECTION_FAIL: 'Database connectivity error'
	}
};
