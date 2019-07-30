export default {
	env: process.env.NODE_ENV || 'production',
	server: {
		port: 5000,
	},
	db: {
		host: 'localhost',
		user: 'syafrullah',
		password: 'password123',
		database: 'restaurant_db'
	}
};