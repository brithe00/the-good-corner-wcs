import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AdCardProps } from '@/components/AdCard';
import DisplayAds from '@/components/DisplayAds';

const SearchResults = () => {
	const [searchedAds, setSearchedAds] = useState<AdCardProps[]>([]);

	const router = useRouter();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get<AdCardProps[]>(
					`http://localhost:8000/ads?category=${router.query.category}`
				);
				setSearchedAds(result.data);
			} catch (err) {
				console.log('error', err);
			}
		};
		fetchData();
	}, [router.query.category]);
	return (
		<DisplayAds
			ads={searchedAds}
			title={`Displaying ads for category id: ${router.query.category}`}
		/>
	);
};

export default SearchResults;
