import { ArgsType, Field, InputType } from 'type-graphql';

@InputType()
export class AdInput {
	@Field(() => String, { nullable: true })
	id: string;
	@Field()
	title: string;
	@Field()
	description: string;
	@Field()
	owner: string;
	@Field()
	price: number;
	@Field()
	imgUrl: string;
	@Field()
	location: string;
	@Field()
	category: string;
}

@ArgsType()
export class QueryArgs {
	@Field(() => String, { nullable: true })
	title: string;
	@Field(() => String, { nullable: true })
	category: string;
}
