import db from '@src/utils/db';
import showModel from '@src/models/showModel';
import celebModel from '@src/models/celebModel';

db();

export async function post({ request }) {
	var { celebId } = await request.json();
	var celeb = await celebModel.findOne({ _id: celebId });
	var shows = await showModel.find({ celebIds: celebId });
	return {
		body: {
			celeb,
			shows
		}
	};
}
