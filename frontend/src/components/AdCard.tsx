import styles from '../styles/AdCard.module.css';

export type AdCardProps = {
	id?: string;
	title: string;
	imgUrl: string;
	price: number;
	link: string;
};

const AdCard = ({ title, imgUrl, price, link }: AdCardProps) => {
	return (
		<div className={styles.container}>
			<a className={styles.link} href={link}>
				<img className={styles.image} src={imgUrl} />
				<div className={styles.text}>
					<div className={styles.title}>{title}</div>
					<div>{price}</div>
				</div>
			</a>
		</div>
	);
};

export default AdCard;
