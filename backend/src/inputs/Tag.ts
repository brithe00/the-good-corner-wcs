import { Field, InputType } from 'type-graphql';

@InputType()
export class TagInput {
	@Field(() => String, { nullable: true })
	id: string;

	@Field()
	name: string;
}
