export default {
	env: process.env.NODE_ENV || 'production',
	server: {
		port: 5000,
	},
	db: {
		host: 'localhost',
		user: 'root',
		password: '12199727',
		database: 'restaurant_db'
	}
};