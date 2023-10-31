import { AdCardProps } from '@/components/AdCard';
import DisplayAds from '@/components/DisplayAds';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchResults = () => {
	const [searchedAds, setSearchedAds] = useState<AdCardProps[]>([]);

	const router = useRouter();
	const { keyword } = router.query;
	const searchParams = useSearchParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(
					`http://localhost:8000/ads?title=${keyword}`
				);

				setSearchedAds(result.data);
			} catch (error) {
				console.log('error :', error);
			}
		};

		fetchData();
	}, [keyword]);

	return (
		<>
			{console.log(keyword)}
			{console.log(router)}
			{console.log(searchParams)}
			<DisplayAds
				ads={searchedAds}
				title={`Displaying search results for: ${keyword}`}
			/>
		</>
	);
};

export default SearchResults;
