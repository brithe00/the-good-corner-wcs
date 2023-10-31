import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

type AdDetails = {
	id?: string;
	title: string;
	description: string;
	owner: string;
	price: number;
	imgUrl: string;
	location: string;
	createdAt?: string;
	category?: [];
	tags?: [];
};

const AdDetails = () => {
	const [data, setData] = useState<AdDetails>();

	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const result = await axios.get<AdDetails>(
					`http://localhost:8000/ads/${id}`
				);
				setData(result.data);
			} catch (error) {
				console.log('error :', error);
			}
		};

		fetchProduct();
	}, [id]);

	return (
		data && (
			<main className="main-content">
				<h2 className="ad-details-title">{data.title}</h2>
				<section className="ad-details">
					<div className="ad-details-image-container">
						<img className="ad-details-image" src={data.imgUrl} />
					</div>
					<div className="ad-details-info">
						<div className="ad-details-price">{data.price} €</div>
						<div className="ad-details-description">{data.description}</div>
						<hr className="separator" />
						<div className="ad-details-owner">
							Annonce publiée par <b>{data.owner}</b> le{' '}
							<Moment format="DD-MM-YYYY HH:mm">{data.createdAt}</Moment>
						</div>
						<a
							href={`mailto:${data.owner}`}
							className="button button-primary link-button"
						>
							<svg
								aria-hidden="true"
								width="16"
								height="16"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
								className="styled__BaseIcon-sc-1jsm4qr-0 llmHhT"
								stroke="currentColor"
								strokeWidth="2.5"
								fill="none"
							>
								<path d="M25 4H7a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5ZM7 6h18a3 3 0 0 1 2.4 1.22s0 0-.08 0L18 15.79a3 3 0 0 1-4.06 0L4.68 7.26H4.6A3 3 0 0 1 7 6Zm18 20H7a3 3 0 0 1-3-3V9.36l8.62 7.9a5 5 0 0 0 6.76 0L28 9.36V23a3 3 0 0 1-3 3Z"></path>
							</svg>
							Envoyer un email
						</a>
					</div>
				</section>
			</main>
		)
	);
};

export default AdDetails;
