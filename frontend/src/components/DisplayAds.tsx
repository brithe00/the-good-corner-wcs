import Link from 'next/link';
import AdCard, { AdCardProps } from './AdCard';
import { gql, useMutation } from '@apollo/client';
import { GET_ADS } from './RecentAds';

type DisplayAdsType = {
	ads: AdCardProps[];
	title: string;
};

const DELETE_AD = gql`
	mutation Mutation($deleteAdId: String!) {
		deleteAd(id: $deleteAdId)
	}
`;

const DisplayAds = ({ ads, title }: DisplayAdsType) => {
	const [deleteAd, { data, loading, error }] = useMutation(DELETE_AD, {
		refetchQueries: [GET_ADS, 'GetAds'],
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<>
			<h2>{title}</h2>
			<section className="recent-ads">
				{ads.map((ad) => (
					<div key={ad.id}>
						<AdCard
							imgUrl={ad.imgUrl}
							link={ad.link}
							title={ad.title}
							price={ad.price}
						/>
						<Link href={`/ad/${ad.id}`}>Details</Link> |{' '}
						<Link href={`/ad/${ad.id}/edit`}>Edit</Link>
						<br />
						<button
							onClick={() => deleteAd({ variables: { deleteAdId: ad.id } })}
						>
							Delete
						</button>
					</div>
				))}
			</section>
		</>
	);
};

export default DisplayAds;
