import Header from './Header';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="main-content">
			<Header />
			{children}
		</main>
	);
};

export default Layout;
