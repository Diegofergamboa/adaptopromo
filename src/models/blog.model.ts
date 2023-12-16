import mongoose from 'mongoose';
import { BlogDocument } from '../types/blogTypes';

const blogSchema = new mongoose.Schema<BlogDocument>({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	content: {
		type: String,
		required: true,
		trim: true,
	},
	mainTitleContent: {
		type: String,
		required: true,
		trim: true,
	},
	metaDescription: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	categories: {
		type: [String],
		required: true,
	},
	publishDate: {
		type: Date,
		required: true,
		default: Date.now,
	},
	author: {
		type: String,
		required: true,
	},
	mainImage: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
		unique: true,
	},
	relatedLinks: {
		type: [String],
	},
});

export default mongoose.model<BlogDocument>('Blog', blogSchema);
