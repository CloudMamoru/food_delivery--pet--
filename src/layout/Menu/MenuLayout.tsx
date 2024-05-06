import { Outlet } from 'react-router-dom';
import styles from './MenuLayout.module.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const MenuLayout = () => {
	return <div className={styles.layout}>
		<Sidebar />
		<div className={styles.content}>
			<Outlet />
		</div>
	</div>;
};  
