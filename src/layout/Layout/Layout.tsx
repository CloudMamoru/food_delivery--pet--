import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
	return <>
		<div>
			<Link to=''>Menu</Link>
			<Link to='/cart'>Cart</Link>
		</div>
		<div>
			<Outlet />
		</div>
	</>;
};
