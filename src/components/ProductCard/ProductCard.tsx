import { FC } from 'react';
import styles from './ProductCard.module.css';
// import cn from 'classnames';
import { ProductCardProps } from './ProductCard.props';
import { Link } from 'react-router-dom';

export const ProductCard: FC<ProductCardProps> = (props) => {
 
	return (
		<Link to={`/product/${props.id}`} className={styles.link}>
			<div className={styles.card}>
				<div className={styles.head} style={{backgroundImage: `url('${props.image}')`}}>
					<div className={styles.price}>
						{props.price}&nbsp; 
						<span className={styles.currency}>₽</span>  
					</div>
					<button className={styles.addToCart}>
						<img src="/cart-button-icon.svg" alt="add to cart" />
					</button>
					<div className={styles.rating}>
						{props.rating}&nbsp; 
						<img src="/rating-icon.svg" alt="rating" />
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.title}>{props.title}</div>
					<div className={styles.description}>{props.description}</div>
				</div>
			</div>
		</Link>
	);
};
