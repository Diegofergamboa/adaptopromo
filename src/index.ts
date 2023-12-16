import app from './app';
import blogRoutes from './routes/auth.routes';
import { connectDB } from './db';

connectDB();

app.use('/api', blogRoutes);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`);
});
