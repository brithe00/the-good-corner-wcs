import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Ad } from './ad';
import { Field, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export class Category extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id: string;

	@Column()
	@Field()
	title: string;

	@OneToMany(() => Ad, (ad) => ad.category)
	ads: Ad[];
}
