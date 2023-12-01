import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useQuery, gql } from '@apollo/client';

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

const GET_AD = gql`
	query Ad($adId: String!) {
		ad(id: $adId) {
			id
			title
			description
			imgUrl
			location
			owner
			price
			tags {
				id
				name
			}
			category {
				id
				title
			}
			createdAt
			updatedAt
		}
	}
`;

const AdDetails = () => {
	const router = useRouter();
	const { id } = router.query;

	const { loading, error, data } = useQuery(GET_AD, {
		variables: { adId: id },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		data && (
			<main className="main-content">
				<h2 className="ad-details-title">{data.ad.title}</h2>
				<section className="ad-details">
					<div className="ad-details-image-container">
						<img className="ad-details-image" src={data.ad.imgUrl} />
					</div>
					<div className="ad-details-info">
						<div className="ad-details-price">{data.ad.price} €</div>
						<div className="ad-details-description">{data.ad.description}</div>
						<hr className="separator" />
						<div className="ad-details-owner">
							Annonce publiée par <b>{data.ad.owner}</b> le{' '}
							<Moment format="DD-MM-YYYY HH:mm">{data.ad.createdAt}</Moment>
						</div>
						<a
							href={`mailto:${data.ad.owner}`}
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
