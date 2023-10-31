import { CategoryCardProps } from '@/components/CategoryCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NewAd = () => {
	const [categories, setCategories] = useState<CategoryCardProps[]>();

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const result = await axios.get<CategoryCardProps[]>(
					'http://localhost:8000/categories'
				);

				setCategories(result.data);
			} catch (error) {
				console.log('error :', error);
			}
		};

		fetchCategories();
	}, []);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				const form = e.target;
				const formData = new FormData(form as HTMLFormElement);

				const formJson = Object.fromEntries(formData.entries());

				axios.post('http://localhost:8000/ads', formJson);
			}}
		>
			<label>
				Titre de l&apos;annonce: <br />
				<input className="text-field" name="title" />
			</label>
			<br />
			<label>
				Description de l&apos;annonce: <br />
				<input className="text-field" name="description" />
			</label>
			<br />
			<label>
				Auteur de l&apos;annonce: <br />
				<input className="text-field" name="owner" type="email" />
			</label>
			<br />
			<label>
				Prix de l&apos;annonce: <br />
				<input className="text-field" name="price" type="number" />
			</label>
			<br />
			<label>
				Image de l&apos;annonce: <br />
				<input className="text-field" name="imgUrl" />
			</label>
			<br />
			<label>
				Location de l&apos;annonce: <br />
				<input className="text-field" name="location" />
			</label>
			<br />
			<select name="category">
				{categories?.map((category) => (
					<option value={category.id} key={category.id}>
						{category.title}
					</option>
				))}
			</select>

			<button className="button">Submit</button>
		</form>
	);
};
export default NewAd;
