import Collection from '../controllers/collection';

import { wrapAsync } from '../utils/controllers';

module.exports = api => {
	api.route('/api/collection').get(wrapAsync(Collection.all));
	api.route('/api/collection/:id').get(wrapAsync(Collection.id));
	
	api.route('/api/collection').post(wrapAsync(Collection.name));
};
