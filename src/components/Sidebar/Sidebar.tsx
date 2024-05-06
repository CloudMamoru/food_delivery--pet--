import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { Button } from '../../components/Button/Button';
import cn from 'classnames';

export const Sidebar = () => {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem('jwt');
		navigate('/auth/login');
	};

	return (
		<div className={styles.sidebar}>
       
			<div className={styles.user}>
				<img src="/avatar.svg" alt="user_avatar" className={styles.avatar} />
				<div className={styles.name}>
          Mamoru Tschernakow
				</div>
				<div className={styles.email}>
          mamoru@mamoru.ru
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
				</NavLink>
			</div>
      
			<Button appearance='small' className={styles.exit} onClick={logout}>
				<img src="/exit-icon.svg" alt="exit" />
        Выход
			</Button> 
		</div>
	);
};
