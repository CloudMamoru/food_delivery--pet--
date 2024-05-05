import { Headling } from '../../components/Headling/Headling';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Search } from '../../components/Search/Search';
import styles from './Menu.module.css';

export const Menu = () => {
	return (
		<>
			<div className={styles.head}>
				<Headling>Menu</Headling>
				<Search placeholder='Enter a dish or ingredients' />
			</div>
			<div className={styles.cards}>
				<ProductCard
					id={1}
					title="pizza"
					description="Tomato, cheese, olives, dough"
					rating={4.5}
					price={350} 
					image={'/pizza_test.png'}
				/>
			</div>
		</>
	);
};
 