import { Request, Response } from 'express';
import { Ad } from '../entities/ad';
import { Like } from 'typeorm';

const adControllers = {
	read: async (req: Request, res: Response) => {
		let result: Ad[] = [];

		try {
			if (req.query.title !== undefined) {
				result = await Ad.find({
					where: {
						title: Like(`%${req.query.title}%`),
					},
					relations: ['category', 'tags'],
				});
			} else if (req.query.category !== undefined) {
				result = await Ad.find({
					where: {
						category: {
							title: Like(`%${req.query.category}%`),
						},
					},
				});
			} else {
				result = await Ad.find({
					relations: ['category', 'tags'],
				});
			}

			res.send(result);
		} catch (err) {
			res.send('An error occured while fetching ads.');
		}
	},
	readById: async (req: Request, res: Response) => {
		try {
			const data = await Ad.findOne({
				where: {
					id: req.params.id,
				},
				relations: ['category', 'tags'],
			});

			res.send(data);
		} catch (error) {
			console.log('error :', error);
			res.send('An error occured while fetching the ad.');
		}
	},
	create: async (req: Request, res: Response) => {
		try {
			const ad = await Ad.save(req.body);

			res.send(ad);
		} catch (err) {
			console.log(err);
			res.send('An error occured while creating ad.');
		}
	},
	update: async (req: Request, res: Response) => {
		try {
			const adToEdit = await Ad.findOneBy({
				id: req.params.id,
			});

			Ad.save({ ...adToEdit, ...req.body });

			res.send('Ad has ben updated');
		} catch (err) {
			res.send('An error occured while updating ad.');
		}
	},
	delete: async (req: Request, res: Response) => {
		try {
			await Ad.delete(req.params.id);
			res.send('Ad deleted !');
		} catch (err) {
			console.log(err);
			res.send('An error occured while deleting ad.');
		}
	},
};

export default adControllers;
