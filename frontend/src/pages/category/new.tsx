import { GET_CATEGORIES } from '@/components/Header';
import { useMutation, gql } from '@apollo/client';

const ADD_CATEGORY = gql`
	mutation CreateCategory($input: CategoryInput!) {
		createCategory(input: $input) {
			id
			title
		}
	}
`;

const NewCategory = () => {
	const [createCategory, { data, loading, error }] = useMutation(ADD_CATEGORY, {
		refetchQueries: [GET_CATEGORIES, 'GetCategories'],
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				const form = e.target;
				const formData = new FormData(form as HTMLFormElement);

				const formJson = Object.fromEntries(formData.entries());

				createCategory({
					variables: { input: formJson },
				});
			}}
		>
			<label>
				Titre de la catégorie: <br />
				<input className="text-field" name="title" />
			</label>

			<button className="button">Submit</button>
		</form>
	);
};

export default NewCategory;
