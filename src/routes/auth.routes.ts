import { Router } from 'express';
import authController from '../controllers/auth.controller';

const router = Router();

router.get('/blogs', authController.getAllBlogs);
router.get('/blog/:id', authController.getBlog);
router.post('/blog', authController.postBlog);

export default router;
