import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Headling } from '../../components/Headling/Headling';
import { Input } from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/api';

export type LoginForm = {
	email: {
		value: string;
	}
	password: {
		value: string;
	}
}

export const Login = () => {
	const [error, setError] = useState<string | null>(null);


	const sendLogin = async (email: string, password: string) => {
		try {
			const { data } = await axios.post(`${PREFIX}/auth/login`, {
				email, 
				password
			});
			console.log(data);
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.response?.data.message);
			}
		}
	};  

	const submit = (e: FormEvent) => {
		e.preventDefault();
		setError(null);
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
				{error && <div className={styles.error}>{error}</div>}
				<Button appearance="big">Вход</Button>
			</form>
			<div className={styles.link}>
				<div>Нет аккаунта?</div>
				<Link to="/auth/register">Зарегистрироваться</Link>
			</div>
		</div>
	);
};
