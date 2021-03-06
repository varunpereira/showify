import db from '@src/utils/db';
import showModel from '@src/models/showModel';
import celebModel from '@src/models/celebModel';

db();

export async function post({ request }) {
	var { showId } = await request.json();
	var show = await showModel.findOne({ _id: showId });
	var celebs = await celebModel.find({ showIds: showId });
	return {
		body: {
			show,
			celebs
		}
	};
}
