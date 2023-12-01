import { Like } from 'typeorm';
import { Ad } from '../entities/ad';
import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql';
import { AdInput, QueryArgs } from '../inputs/Ad';

@Resolver(Ad)
export class AdResolver {
	@Query(() => [Ad])
	async ads(@Args() args: QueryArgs) {
		if (args.title) {
			return await Ad.find({
				where: {
					title: Like(`%${args.title}%`),
				},
				relations: ['category', 'tags'],
			});
		} else if (args.category) {
			return await Ad.find({
				where: {
					category: {
						title: Like(`%${args.category}%`),
					},
				},
				relations: ['category'],
			});
		} else {
			return await Ad.find({ relations: ['category', 'tags'] });
		}
	}

	@Query(() => Ad)
	async ad(@Arg('id') id: string) {
		return await Ad.findOne({
			where: {
				id,
			},
			relations: ['category', 'tags'],
		});
	}

	@Mutation(() => Ad)
	async createAd(
		@Arg('input')
		input: AdInput
	) {
		return await Ad.save({
			...input,
			category: {
				id: input.category,
			},
		});
	}

	@Mutation(() => Ad)
	// todo: add relations
	async updateAd(
		@Arg('input')
		{
			id,
			title,
			description,
			owner,
			price,
			imgUrl,
			location,
			category,
		}: AdInput
	) {
		const adToUpdate = await Ad.findOneBy({ id });
		console.log(adToUpdate);

		const newAd = Ad.save({
			...adToUpdate,
			title,
			description,
			owner,
			price,
			imgUrl,
			location,
			category: {
				id: category,
			},
		});

		return newAd;
	}

	@Mutation(() => String)
	async deleteAd(@Arg('id') id: string) {
		await Ad.delete(id);
		return `Ad #${id} deleted !`;
	}
}
