import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { Button } from '../../components/Button/Button';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';

export const Sidebar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const profile = useSelector((s: RootState) => s.user.profile);
	const items = useSelector((s: RootState) => s.cart.items);

	useEffect(() => {
		dispatch(getProfile());
	}, [dispatch]);

	const logout = () => {
		dispatch(userActions.logoutUser());
		navigate('/auth/login');
	};



	return (
		<div className={styles.sidebar}>
       
			<div className={styles.user}>
				<img src="/avatar.svg" alt="user_avatar" className={styles.avatar} />
				<div className={styles.name}>
					{profile?.name}
				</div>
				<div className={styles.email}>
					{profile?.email}
				</div>
			</div>
      
			<div className={styles.menu}>
				<NavLink to='/' className={({isActive}) => cn(styles.link, {
					[styles.activeLink]: isActive
				})}>
					<img src="/menu-icon.svg" alt="menu" />
          Меню
				</NavLink>
				<NavLink to='/cart' className={({isActive}) => cn(styles.link, {
					[styles.activeLink]: isActive
				})}>
					<img src="cart-icon.svg" alt="cart" />
					Корзина
					<span className={styles.cartCount}>{items.reduce((acc, item) => acc += item.count, 0)}</span>
				</NavLink>
			</div>
      
			<Button appearance='small' className={styles.exit} onClick={logout}>
				<img src="/exit-icon.svg" alt="exit" />
        Выход
			</Button> 
		</div>
	);
};
