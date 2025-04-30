class AppError extends Error {
	status: number;
	body?: Record<string, any>;
	name: string;
	constructor(status: number, message: string, body?: Record<string, any>) {
		super(message);
		this.status = status;
		this.body = body;
		this.name = this.constructor.name;

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

export default AppError;
