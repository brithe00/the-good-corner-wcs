import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { CategoryCardProps } from '@/components/CategoryCard';

const EditPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [owner, setOwner] = useState('');
	const [price, setPrice] = useState(0);
	const [imgUrl, setImgUrl] = useState('');
	const [location, setLocation] = useState('');
	const [category, setCategory] = useState({});

	const [categories, setCategories] = useState<CategoryCardProps[]>();

	useEffect(() => {
		const fetchAd = async () => {
			try {
				const result = await axios.get(`http://localhost:8000/ads/${id}`);

				const { title, description, owner, price, imgUrl, location, category } =
					result.data;

				setTitle(title);
				setDescription(description);
				setOwner(owner);
				setPrice(price);
				setImgUrl(imgUrl);
				setLocation(location);
				setCategory(category);
			} catch (error) {
				console.log('error :', error);
			}
		};

		fetchAd();

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
	}, [id]);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				const form = e.target;
				const formData = new FormData(form as HTMLFormElement);

				const formJson = Object.fromEntries(formData.entries());

				axios.put(`http://localhost:8000/ads/${id}`, formJson);
				console.log(formJson);
			}}
		>
			<label>
				Titre de l&apos;annonce: <br />
				<input
					className="text-field"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Description de l&apos;annonce: <br />
				<input
					className="text-field"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Auteur de l&apos;annonce: <br />
				<input
					className="text-field"
					name="owner"
					type="email"
					value={owner}
					onChange={(e) => setOwner(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Prix de l&apos;annonce: <br />
				<input
					className="text-field"
					name="price"
					type="number"
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
				/>
			</label>
			<br />
			<label>
				Image de l&apos;annonce: <br />
				<input
					className="text-field"
					name="imgUrl"
					value={imgUrl}
					onChange={(e) => setImgUrl(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Location de l&apos;annonce: <br />
				<input
					className="text-field"
					name="location"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
			</label>
			<br />

			{category && (
				<select name="category">
					<option value={category.id}>-- {category.title} --</option>

					{categories?.map((r) => (
						<option value={r.id} key={r.id}>
							{r.title}
						</option>
					))}
				</select>
			)}

			<button className="button">Edit</button>
		</form>
	);
};

export default EditPage;
