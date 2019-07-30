import config from '../config';
import connection from '../db';

exports.all = async (req, res) => {
	await connection.query('SELECT * FROM email', function (err, rows, fields) {
		if (err) {
			console.log(err.code);
		} else {
			res.json({
				status: 1,
				message: 'Success',
				code: 200,
				data: rows
			});
		}
	});
};
exports.email = async (req, res) => {
	const id = req.params.email;
	await connection.query('SELECT * FROM email WHERE email = ?', [email], function (err, rows, fields) {
		if (err) {
			console.log(err.code);
		} else {
			res.json({
				status: 1,
				message: 'Success',
				code: 200,
				data: rows
			});
		}
	});
};
