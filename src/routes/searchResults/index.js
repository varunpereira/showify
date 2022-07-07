import db from '@src/utils/db';
import showModel from '@src/models/showModel';
import celebModel from '@src/models/celebModel';


db();

export async function post({ request }) {
	var {searchTerm} = await request.json();
	var shows = await showModel.find({
		title: { $regex: searchTerm, $options: 'i' }
	});
	var celebs = await celebModel.find({
		title: { $regex: searchTerm, $options: 'i' }
	});
	var searchResults = shows.concat(celebs)
	return {
		body: {
			searchResults
		}
	};
}
