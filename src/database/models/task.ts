import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
	{
		name: String,
		completed: Boolean
	},
	{
		timestamps: true,
		toObject: {
			transform: function (doc, ret, options) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
				return ret;
			}
		},
		toJSON: {
			transform: function (doc, ret, options) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
				return ret;
			}
		}
	}
);

export default model('Task', taskSchema);
