import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Headling } from '../../components/Headling/Headling';
import { Input } from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent } from 'react';

export const Login = () => {
	const submit = (e: FormEvent) => {
		e.preventDefault();
		console.log(e);
	};


	return (
		<div className={styles.login}>
			<Headling>Вход</Headling>
			<form className={styles.form} onSubmit={submit}>
				<div className={styles.field}>
					<label htmlFor="email">
						Ваш email
					</label>
					<Input id="email" placeholder='Email' />
				</div>
				<div className={styles.field}>
					<label htmlFor="password">
						Ваш пароль
					</label>
					<Input id="password" placeholder='Пароль' />
				</div>
				<Button appearance="big">Вход</Button>
			</form>
			<div className={styles.link}>
				<div>Нет аккаунта?</div>
				<Link to="/auth/register">Зарегистрироваться</Link>
			</div>
		</div>
	);
};
