import axios from 'axios';

const NewCategory = () => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				const form = e.target;
				const formData = new FormData(form as HTMLFormElement);

				const formJson = Object.fromEntries(formData.entries());

				axios.post('http://localhost:8000/categories', formJson);
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
