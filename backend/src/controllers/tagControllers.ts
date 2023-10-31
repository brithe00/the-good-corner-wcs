import { Request, Response } from 'express';
import { Tag } from '../entities/tag';

const tagControllers = {
	read: async (_req: Request, res: Response) => {
		try {
			const result = await Tag.find({ relations: { ads: true } });
			res.send(result);
		} catch (error) {
			console.log(error);
			res.send('Error fetching tags !');
		}
	},
	create: async (req: Request, res: Response) => {
		try {
			await Tag.save(req.body);
			res.send('Tag created !');
		} catch (error) {
			console.log(error);
			res.send('Error creating a tag !');
		}
	},
	update: async (req: Request, res: Response) => {
		try {
			const tagToEdit = await Tag.findOneBy({
				id: req.body.tagToEdit,
			});

			Tag.save({ ...tagToEdit, ...req.body.newTag });

			res.send('Tag has been updated !');
		} catch (error) {
			console.log(error);
			res.send('Error updating a tag !');
		}
	},
	delete: async (req: Request, res: Response) => {
		try {
			await Tag.delete(req.body.id);
			res.send('Tag deleted !');
		} catch (error) {
			console.log(error);
			res.send('Error deleting tag !');
		}
	},
};

export default tagControllers;
