import mongoose from 'mongoose';

export const connectDB = async () => {
	try {
		const db = await mongoose.connect('mongodb://localhost:27017');
		console.log(`Database is connected ${db.connection.name}`);
	} catch (error) {
		console.error(`Error on connection ${error}`);
	}
};
