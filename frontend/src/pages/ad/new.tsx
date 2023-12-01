import { useQuery, useMutation, gql } from '@apollo/client';
import { GET_CATEGORIES } from '@/graphql/queries/queries';
import { useRouter } from 'next/router';
import { GET_ADS } from '@/components/RecentAds';
import { useState } from 'react';
import axios from 'axios';

const CREATE_AD = gql`
	mutation CreateAd($input: AdInput!) {
		createAd(input: $input) {
			id
		}
	}
`;

const GET_TAGS = gql`
	query Tags {
		tags {
			id
			name
		}
	}
`;

const NewAd = () => {
	const [file, setFile] = useState<File>();
	const [imageURL, setImageURL] = useState<String>();
	// let tagsToAd = [];
	// const [tagsIdsSelected, setTagsIdsSelected] = useState(tagsToAd);
	const router = useRouter();

	const {
		loading: loadingCategories,
		error: errorCategories,
		data: dataCategories,
	} = useQuery(GET_CATEGORIES);

	const {
		loading: loadingTags,
		error: errorTags,
		data: dataTags,
	} = useQuery(GET_TAGS);

	const [createAd, { data, loading, error }] = useMutation(CREATE_AD, {
		refetchQueries: [GET_ADS, 'GetAds'],
		onCompleted: () => router.push('/') as any,
	});

	if (loading || loadingCategories || loadingTags) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	if (errorCategories) return <p>Error : {errorCategories.message}</p>;
	if (errorTags) return <p>Error : {errorTags.message}</p>;

	// const removeTag = (index: any) => {
	// 	setTagsIdsSelected((prevTags) => {
	// 		const newTags = [...prevTags];
	// 		newTags.splice(index, 1);
	// 		return newTags;
	// 	});
	// };

	return (
		<>
			<div>
				<input
					type="file"
					onChange={(e) => {
						if (e.target.files) {
							setFile(e.target.files[0]);
						}
					}}
				/>
				<button
					onClick={async (event) => {
						event.preventDefault();
						if (file) {
							const url = 'http://localhost:8000/upload';
							const formData = new FormData();
							formData.append('file', file, file.name);
							try {
								const response = await axios.post(url, formData);
								setImageURL(response.data.filename);
							} catch (err) {
								console.log('error', err);
							}
						} else {
							alert('select a file to upload');
						}
					}}
				>
					Upload Image
				</button>
				{imageURL ? (
					<>
						<br />
						<img
							width={'500'}
							alt="uploadedImg"
							src={'http://localhost:8000' + imageURL}
						/>
						<br />
					</>
				) : null}
			</div>
			<form
				onSubmit={(e) => {
					e.preventDefault();

					const form = e.target;
					const formData = new FormData(form as HTMLFormElement);

					const formJson = Object.fromEntries(formData.entries());

					createAd({
						variables: {
							input: {
								...formJson,
								imgUrl: imageURL,
								price: parseFloat(formJson.price as any),
							},
						},
					});
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
				{/* <br />
				<label>
					Image de l&apos;annonce: <br />
					<input className="text-field" name="imgUrl" />
				</label> */}
				<br />
				<label>
					Location de l&apos;annonce: <br />
					<input className="text-field" name="location" />
				</label>
				<br />
				<select name="category">
					{dataCategories.categories?.map((category: any) => (
						<option value={category.id} key={category.id}>
							{category.title}
						</option>
					))}
				</select>
				{/* <br />
			<select
				name="tags"
				onChange={(e) =>
					setTagsIdsSelected((tagsToAd) => [...tagsToAd, e.target.value])
				}
			>
				{dataTags.tags?.map((tag: any) => (
					<option value={tag.id} key={tag.id}>
						{tag.name}
					</option>
				))}
			</select>
			<div>Tags selected:</div>
			<div>
				{tagsIdsSelected.map((tag, index) => (
					<div key={index} style={{ display: 'flex' }}>
						<div>{tag}</div>
						<button onClick={() => removeTag(index)}>x</button>
					</div>
				))}
			</div> */}

				<button className="button">Submit</button>
			</form>
		</>
	);
};
export default NewAd;
