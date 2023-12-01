import DisplayAds from './DisplayAds';

import { useQuery, gql } from '@apollo/client';

export const GET_ADS = gql`
	query Ads {
		ads {
			id
			title
			description
			imgUrl
			price
			owner
			location
			createdAt
			updatedAt
			tags {
				id
				name
			}
			category {
				id
				title
			}
		}
	}
`;

const RecentAds = () => {
	const { loading, error, data } = useQuery(GET_ADS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return <DisplayAds ads={data.ads} title="Recent Ads" />;
};

export default RecentAds;
