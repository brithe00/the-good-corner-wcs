import { CategoryInput } from '../inputs/Category';
import { Category } from '../entities/category';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';

@Resolver(Category)
export class CategoryResolver {
	@Query(() => [Category])
	async categories() {
		return await Category.find();
	}

	@Query(() => Category)
	async category(@Arg('id') id: string) {
		return await Category.findOneBy({
			id,
		});
	}

	@Mutation(() => Category)
	async createCategory(@Arg('input') input: CategoryInput) {
		return await Category.save({
			...input,
		});
	}

	@Mutation(() => Category)
	async updateCategory(@Arg('input') { id, title }: CategoryInput) {
		const categoryToUpdate = await Category.findOneBy({
			id,
		});

		const newCategory = Category.save({
			...categoryToUpdate,
			title,
		});

		return newCategory;
	}

	@Mutation(() => String)
	async deleteCategory(@Arg('id') id: string) {
		await Category.delete(id);
		return `Category #${id} deleted !`;
	}
}
