import Email from '../controllers/email';

import { wrapAsync } from '../utils/controllers';

module.exports = api => {
	api.route('/api/email').get(wrapAsync(Email.all));
	api.route('/api/email/:email').get(wrapAsync(Email.email));
};
