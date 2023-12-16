import { Request, Response } from 'express';
import BlogModel from '../models/blog.model';

const postBlog = async (req: Request, res: Response) => {
	try {
		const {
			title,
			content,
			mainTitleContent,
			metaDescription,
			categories,
			author,
			mainImage,
			slug,
			relatedLinks,
		} = req.body;

		const newBlog = new BlogModel({
			title,
			content,
			mainTitleContent,
			metaDescription,
			categories,
			author,
			mainImage,
			slug,
			relatedLinks,
		});

		const savedBlog = await newBlog.save();

		res.status(201).json({
			message: 'Blog created',
			blog: savedBlog,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error creating the blog' });
	}
};

const getAllBlogs = async (_req: Request, res: Response) => {
	try {
		const blogs = await BlogModel.find();
		res.status(200).json(blogs);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error al obtener los blogs' });
	}
};

const getBlog = async (req: Request, res: Response) => {
	try {
		const blogId = req.params.id;
		const blog = await BlogModel.findById(blogId);

		if (blog) {
			res.status(200).json(blog);
		} else {
			res.status(404).json({ message: 'Blog no encontrado' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error al obtener el blog' });
	}
};

export default {
	postBlog,
	getAllBlogs,
	getBlog,
};
