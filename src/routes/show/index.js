import db from '@src/utils/db';
import showModel from '@src/models/showModel';

db();

export async function post({ request }) {
	var {showId} = await request.json();
	var show = await showModel.findOne({ _id: showId });
	return {
		body: {
			show
		}
	};
}
