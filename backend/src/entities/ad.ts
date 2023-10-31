import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Category } from './category';
import { Tag } from './tag';
import { Field, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export class Ad extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id: string;

	@Column()
	@Field()
	title: string;

	@Column()
	@Field()
	description: string;

	@Column()
	@Field()
	owner: string;

	@Column()
	@Field()
	price: number;

	@Column()
	@Field()
	imgUrl: string;

	@Column()
	@Field()
	location: string;

	@ManyToOne(() => Category, (category) => category.ads, {
		onDelete: 'CASCADE',
	})
	category: Category;

	@ManyToMany(() => Tag, (tag) => tag.ads, { onDelete: 'CASCADE' })
	tags: Tag[];

	@CreateDateColumn()
	@Field()
	createdAt: Date;

	@UpdateDateColumn()
	@Field()
	updatedAt: Date;
}
