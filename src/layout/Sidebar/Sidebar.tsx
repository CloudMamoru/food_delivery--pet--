import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { Button } from '../../components/Button/Button';

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
				<Link to='/' className={styles.link}>
					<img src="/menu-icon.svg" alt="menu" />
          Menu
				</Link>
				<Link to='/cart' className={styles.link}>
					<img src="cart-icon.svg" alt="cart" />
          Cart
				</Link>
			</div>
      
			<Button appearance='small' className={styles.exit}>
				<img src="/exit-icon.svg" alt="exit" />
        Exit
			</Button> 
		</div>
	);
};
