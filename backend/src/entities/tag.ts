import {
	BaseEntity,
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Ad } from './ad';
import { Field, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export class Tag extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id: string;

	@Column()
	@Field()
	name: string;

	@ManyToMany(() => Ad, (ad) => ad.tags)
	@JoinTable()
	@Field(() => [Ad])
	ads: Ad[];
}
