import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Headling } from '../../components/Headling/Headling';
import { Input } from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';

export type LoginForm = {
	email: {
		value: string;
	}
	password: {
		value: string;
	}
}

export const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { jwt, loginErrorMessage} = useSelector((s: RootState) => s.user);


	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]);

	const sendLogin = async (email: string, password: string) => {
		dispatch(login({email, password}));
	};  

	const submit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearLoginError());
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		sendLogin(email.value, password.value);
	};

	return (
		<div className={styles.login}>
			<Headling>Вход</Headling>
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
					<Input id="password" name='password' placeholder='Пароль' type='password ' />
				</div>
				{loginErrorMessage && <div className={styles.error}>{loginErrorMessage}</div>}
				<Button appearance="big">Вход</Button>
			</form>
			<div className={styles.link}>
				<div>Нет аккаунта?</div>
				<Link to="/auth/register">Зарегистрироваться</Link>
			</div>
		</div>
	);
};
