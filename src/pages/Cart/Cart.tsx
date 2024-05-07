import { useDispatch, useSelector } from 'react-redux';
import { Headling } from '../../components/Headling/Headling';
import { AppDispatch, RootState } from '../../store/store';
import { CartItem } from '../../components/CartItem/CartItem';
import { ProductInterface } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PREFIX } from '../../helpers/api';
import styles from './Cart.module.css';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/cart.slice';

const DELIVERY_FEE = 169;

export const Cart = () => {
	const [cartProducts, setCartProducts] = useState<ProductInterface[]>([]);
	const jwt = useSelector((s: RootState) => s.user.jwt);
	const items = useSelector((s: RootState) => s.cart.items);
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const totalPrice = items.map(i => {
		const product = cartProducts.find(p => p.id === i.id);
		if (!product) {
			return 0;
		}
		return i.count * product.price;
	}).reduce((acc, i) => acc += i, 0);

	const totalCount = items.map(i => {
		const product = cartProducts.find(p => p.id === i.id);
		if (!product) {
			return 0;
		}
		return i.count;
	}).reduce((acc, i) => acc += i, 0);

	const getItem = async (id: number) => {
		const { data } = await axios.get<ProductInterface>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setCartProducts(res);
	};

	const checkout = async () => {
		// TODO Сделать получение данных о доставке
		await axios.post(`${PREFIX}/order`, {
			products: items
		}, {
			headers: {
				Authorization: `Bearer ${jwt}`
			}
		});
		dispatch(cartActions.cleanAllItems());
		navigate('/success');
	};

	useEffect(() => {
		loadAllItems();
	}, [items]);


	return (
		<div>
			<Headling className={styles.headling}>Корзина</Headling>
			{items.map(i => {
				const product = cartProducts.find(p => p.id === i.id);
				if (!product) {
					return;
				}
				return <CartItem key={product.id} count={i.count} {...product} />;
			})}
			<div className={styles.line}>
				<div className={styles.text}>Итог</div>
				<div className={styles.price}>{totalPrice}&nbsp;<span>₽</span></div>
			</div>
			<hr className={styles.hr} />
			<div className={styles.line} >
				<div className={styles.text}>Доставка</div>
				<div className={styles.price}>{DELIVERY_FEE}&nbsp;<span>₽</span></div>
			</div>
			<hr className={styles.hr} />
			<div className={styles.line}>
				<div className={styles.text}>Общая <span className={styles.totalCount}>({totalCount})</span></div>
				<div className={styles.price}>{totalPrice + DELIVERY_FEE}&nbsp;<span>₽</span></div>
			</div>
			<div className={styles.checkout}>
				<Button appearance='big' onClick={checkout}>Оформить</Button>
			</div>
		</div>
	);
};
