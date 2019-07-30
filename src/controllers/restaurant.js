import config from '../config';
import connection from '../db';

exports.all = async (req, res) => {
	await connection.query('SELECT * FROM restaurant', function (err, rows, fields) {
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

exports.id = async (req, res) => {
	const id = req.params.id;
	await connection.query('SELECT * FROM restaurant WHERE id = ?', [id], function (err, rows, fields) {
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
