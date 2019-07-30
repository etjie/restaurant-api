function wrapAsync(fn) {
	return function(req, res, next) {
		fn(req, res, next).catch(e => {
			next(e);
		});
	};
}

function ok(values, res) {
	const data = {
		'status' : 200,
		'values' : values
	};
	res.json(data);
	res.end();
}

exports.ok = ok;
exports.wrapAsync = wrapAsync;
