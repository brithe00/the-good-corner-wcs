import { useMutation, gql } from '@apollo/client';

const ADD_TAG = gql`
	mutation CreateTag($input: TagInput!) {
		createTag(input: $input) {
			id
		}
	}
`;

const NewTag = () => {
	const [createTag, { data, loading, error }] = useMutation(ADD_TAG);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				const form = e.target;
				const formData = new FormData(form as HTMLFormElement);

				const formJson = Object.fromEntries(formData.entries());

				createTag({
					variables: {
						input: formJson,
					},
				});
			}}
		>
			<label>
				Nom du tag: <br />
				<input className="text-field" name="name" />
			</label>

			<button className="button">Submit</button>
		</form>
	);
};

export default NewTag;
