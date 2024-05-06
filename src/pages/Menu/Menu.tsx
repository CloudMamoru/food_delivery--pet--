import { useEffect, useState } from 'react';
import { Headling } from '../../components/Headling/Headling';
import { Search } from '../../components/Search/Search';
import { PREFIX } from '../../helpers/api';
import { ProductInterface } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export const Menu = () => {
	const [products, setProducts] = useState<ProductInterface[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<ProductInterface[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);


	return (
		<>
			<div className={styles.head}>
				<Headling>Меню</Headling>
				<Search placeholder='Введите блюдо или состав' />
			</div>
			<div className={styles.cards}>
				{!isLoading && <MenuList products={products} />}
				{isLoading && <div>Loading...</div>}
				{error && <div>{error}</div>}
			</div>
		</>
	);
};