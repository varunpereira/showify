import db from '@src/utils/db';
import showModel from '@src/models/showModel';

db();

export async function post({ request }) {
	var {searchTerm} = await request.json();
	var shows = await showModel.find({
		title: { $regex: searchTerm, $options: 'i' }
	});
	return {
		body: {
			searchResults:shows
		}
	};
}
