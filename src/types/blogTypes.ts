import { Document } from 'mongoose';
import { Request, Response } from 'express';

export type Author =
	| 'Gloria Tips'
	| 'José Robert Descuentos'
	| 'Master Descuentos';

export interface BlogDocument extends Document {
	title: string;
	content: string;
	mainTitleContent: string;
	metaDescription: string;
	categories: string[];
	publishDate: Date;
	author: Author;
	mainImage: string;
	slug: string;
	relatedLinks?: string[];
}

export type SuccessResponse = { message: string; blog?: BlogDocument };

export type ControllerFunction = (req: Request, res: Response) => void;
