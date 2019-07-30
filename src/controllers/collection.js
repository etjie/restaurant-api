import config from '../config';
import connection from '../db';

exports.all = async (req, res) => {
	await connection.query('SELECT * FROM collection', function (err, rows, fields) {
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
	await connection.query(`SELECT col.*, res.* 
							FROM collection col, relation rel, restaurant res 
							WHERE col.collection_id = ? AND rel.collection_id = ? AND rel.restaurant_id = res.restaurant_id `,
		[id, id],
		function (err, rows, fields) {
			if (err) {
				console.log(err);
				console.log(err.code);
			} else {
				let result = [];
				if (rows.length > 0) {
					const collectionId = rows[0].collection_id;
					const collectionName = rows[0].collection_name;
					const restaurantArray = rows.map(val => {
										delete val.collection_id
										delete val.collection_name
										return val
									});
					result = {
						id: collectionId,
						name: collectionName,
						restaurant: restaurantArray
					}
				}
				res.json({
					status: 1,
					message: 'Success',
					code: 200,
					data: result
				});
			}
		});
};