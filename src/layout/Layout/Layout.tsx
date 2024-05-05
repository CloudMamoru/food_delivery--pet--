import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

export const Layout = () => {
	return <div className={styles.layout}>
		<Sidebar />
		<div>
			<Outlet />
		</div>
	</div>;
};  
