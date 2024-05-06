import { FC } from 'react';
import { ProductCard } from '../../../components/ProductCard/ProductCard';
import { MenuProps } from './MenuList.props';
import styles from './MenuList.module.css';

export const MenuList: FC<MenuProps> = ({products}) => {
	return <div className={styles.wrapper}> 
		{products.map(product => (
			<ProductCard
				key={product.id}
				id={product.id}
				name={product.name}
				description={product.ingredients.join(', ')}
				rating={product.rating}
				price={product.price}
				image={product.image}
			/>))}
	</div>;
};