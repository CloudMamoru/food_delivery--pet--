import styles from './CartItem.module.css';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { CartItemProps } from './CartItem.props';

export const CartItem: FC<CartItemProps> = (props) => {
	const dispatch = useDispatch<AppDispatch>();

	const increase = () => {
		dispatch(cartActions.add(props.id));
	};
  
	const decrease = ( ) => {
		dispatch(cartActions.remove(props.id));
	};
  
	const remove = ( ) => {
		dispatch(cartActions.delete(props.id));
	};
 
	return (
		<div className={styles.item}>
			<div className={styles.image} style={{ backgroundImage: `url('${props.image}')` }} />
			<div className={styles.description}>
				<div className={styles.name}>{props.name}</div>  
				<div className={styles.price}>{props.price}&nbsp;₽</div>  
			</div>
			<div className={styles.actions}>
				<div className={styles.buttons} >
					<button className={styles.minus} onClick={decrease}>
						<img src="/minus-icon.svg" alt="delete from cart" />
					</button> 
					<div className={styles.num}>{props.count}</div>
					<button className={styles.plus} onClick={increase}>
						<img src="/plus-icon.svg" alt="add to cart" />
					</button> 
					<button className={styles.remove} onClick={remove}>
						<img src="/delete-icon.svg" alt="remove all" />
					</button> 
				</div>
			</div>
		</div> 
	);
};
