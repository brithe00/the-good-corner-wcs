import { Request, Response } from 'express';
import { Category } from '../entities/category';

const categoryController = {
	read: async (_req: Request, res: Response) => {
		try {
			const results = await Category.find();
			res.send(results);
		} catch (error) {
			console.log(error);
			res.send('Error');
		}
	},
	readById: async (req: Request, res: Response) => {
		try {
			const data = await Category.findOne({
				where: {
					id: Number(req.params.id),
				},
			});

			res.send(data);
		} catch (error) {
			console.log('error :', error);
			res.send('An error occured while fetching the category.');
		}
	},
	create: async (req: Request, res: Response) => {
		try {
			await Category.save(req.body);
			res.send('Category has been created');
		} catch (error) {
			console.log(error);
			res.send('Error');
		}
	},
	update: async (req: Request, res: Response) => {
		try {
			const categoryToEdit = await Category.findOneBy({
				id: Number(req.params.id),
			});

			Category.save({
				...categoryToEdit,
				...req.body,
			});

			res.send('Category has ben updated');
		} catch (error) {
			console.log('error :', error);
			res.send('An error occured while updating the category.');
		}
	},
	delete: async (req: Request, res: Response) => {
		try {
			await Category.delete(req.params.id);
			res.send('Category deleted !');
		} catch (error) {
			console.log('error :', error);
			res.send('An error occured while deleting the category.');
		}
	},
};

export default categoryController;
