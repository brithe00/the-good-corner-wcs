export type CategoryCardProps = {
	id?: number;
	title: string;
	link: string;
};

const CategoryCard = ({ title, link }: CategoryCardProps) => {
	return (
		<>
			<a href={link} className="category-navigation-link">
				{title}
			</a>
			•
		</>
	);
};

export default CategoryCard;
