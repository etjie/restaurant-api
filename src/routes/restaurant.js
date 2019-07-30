import Restaurant from '../controllers/restaurant';

import { wrapAsync } from '../utils/controllers';

module.exports = api => {
	api.route('/api/restaurant').get(wrapAsync(Restaurant.all));
	api.route('/api/restaurant/:id').get(wrapAsync(Restaurant.id));
};
