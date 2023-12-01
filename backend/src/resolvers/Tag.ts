import { TagInput } from '../inputs/Tag';
import { Tag } from '../entities/tag';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';

@Resolver(Tag)
export class TagResolver {
	@Query(() => [Tag])
	async tags() {
		return await Tag.find({
			relations: ['ads'],
		});
	}

	@Query(() => Tag)
	async tag(@Arg('id') id: string) {
		return await Tag.findOneBy({
			id,
		});
	}

	@Mutation(() => Tag)
	async createTag(@Arg('input') input: TagInput) {
		return await Tag.save({ ...input });
	}

	@Mutation(() => Tag)
	async updateTag(@Arg('input') { id, name }: TagInput) {
		const tagToUpdate = await Tag.findOneBy({
			id,
		});

		const newTag = Tag.save({ ...tagToUpdate, name });

		return newTag;
	}

	@Mutation(() => String)
	async deleteTag(@Arg('id') id: string) {
		await Tag.delete(id);
		return `Tag #${id} deleted !`;
	}
}
