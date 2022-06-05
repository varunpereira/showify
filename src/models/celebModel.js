import mongoose from 'mongoose';

var schema = new mongoose.Schema(
	{
		title: {
			type: String
		},
		description: {
			type: String
		},
		pics: {
			type: Array,
			default: []
		},
		shows: {
			type: Array,
			default: []
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.models.celeb || mongoose.model('celeb', schema, 'celeb');
