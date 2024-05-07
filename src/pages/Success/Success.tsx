import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import styles from './Success.module.css';

export const Success = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.success}>
			<img src="/pizza.svg" alt="pizza" />
			<div className={styles.text}>Ваш заказ успешно<br/> оформлен!</div>
			<Button appearance='big' onClick={() => navigate('/')}>Сделать новый</Button>
		</div>
	);
};
 