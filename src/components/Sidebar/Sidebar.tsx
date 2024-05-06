import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { Button } from '../../components/Button/Button';
import cn from 'classnames';

export const Sidebar = () => {
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
          Menu
				</NavLink>
				<NavLink to='/cart' className={({isActive}) => cn(styles.link, {
					[styles.activeLink]: isActive
				})}>
					<img src="cart-icon.svg" alt="cart" />
          Cart 
				</NavLink>
			</div>
      
			<Button appearance='small' className={styles.exit}>
				<img src="/exit-icon.svg" alt="exit" />
        Exit
			</Button> 
		</div>
	);
};
