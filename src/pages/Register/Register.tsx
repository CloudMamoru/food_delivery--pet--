import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Headling } from '../../components/Headling/Headling';
import { Input } from '../../components/Input/Input';
import styles from './Register.module.css';
import { FormEvent, useEffect } from 'react';
import { register, userActions } from '../../store/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';

export type RegisterForm = {
	email: {
		value: string;
	}
	password: {
		value: string;
	}
	name: {
		value: string;
	}
}

export const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { jwt, errorMessage } = useSelector((e: RootState) => e.user);

	useEffect(() => {
		dispatch(userActions.clearError());
	}, [dispatch]);
	
	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]);

	const sendRegister = async (email: string, name: string, password: string) => {
		dispatch(register({email, name, password}));
	};  
	
	const submit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearError());
		const target = e.target as typeof e.target & RegisterForm;
		const { email, name, password } = target;
		sendRegister(email.value, name.value, password.value);
	};

	return (
		<div className={styles.login}>
			<Headling>Регистрация</Headling>
			<form className={styles.form} onSubmit={submit}>
				<div className={styles.field}>
					<label htmlFor="email">
						Ваш email
					</label>
					<Input id="email" name='email' placeholder='Email' type='email' />
				</div>
				<div className={styles.field}>
					<label htmlFor="password">
						Ваш пароль
					</label>
					<Input id="password" name='password' placeholder='Пароль' type='password' />
				</div>
				<div className={styles.field}>
					<label htmlFor="name">
						Ваше имя
					</label>
					<Input id="name" name='name' placeholder='Имя' type='text' />
				</div>
				{errorMessage && <div className={styles.error}>{errorMessage}</div>}
				<Button appearance="big">Зарегистрироваться</Button>
			</form>
			<div className={styles.link}>
				<div>Есть аккаунт?</div>
				<Link to="/auth/login">Войти</Link>
			</div>
		</div>
	);
};
