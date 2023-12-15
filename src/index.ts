import app from './app';
import { connectDB } from './db';
import './db';

connectDB();
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`);
});
