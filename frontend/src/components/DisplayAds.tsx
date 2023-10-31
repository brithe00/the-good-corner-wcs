import Link from 'next/link';
import AdCard, { AdCardProps } from './AdCard';
import axios from 'axios';

type DisplayAdsType = {
	ads: AdCardProps[];
	title: string;
};

const DisplayAds = ({ ads, title }: DisplayAdsType) => {
	const deleteAdHandler = async (id: string | undefined) => {
		try {
			await axios.delete(`http://localhost:8000/ads/${id}`);
		} catch (error) {
			console.log('error :', error);
		}
	};

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
						<button onClick={() => deleteAdHandler(ad.id)}>Delete</button>
					</div>
				))}
			</section>
		</>
	);
};

export default DisplayAds;
