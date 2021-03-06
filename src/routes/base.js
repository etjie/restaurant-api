import Base from '../controllers/base';

import { wrapAsync } from '../utils/controllers';

module.exports = api => {
	api.route('/').get(wrapAsync(Base.get));
	api.route('/api').get(wrapAsync(Base.get));
};
