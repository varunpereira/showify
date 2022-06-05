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
		rating: {
			type: Number
		},
		cert: {
			type: String
		},
		length: {
			type: String
		},
		cast: {
			type: Array,
			default: []
		},
		categories: {
			type: Array,
			default: []
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.models.show || mongoose.model('show', schema, 'show');
