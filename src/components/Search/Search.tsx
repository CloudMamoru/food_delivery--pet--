import { forwardRef } from 'react';
import { SearchProps } from './Search.props';
import cn from 'classnames';
import styles from './Search.module.css';

export const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ className, isValid = true, ...props }, ref) {
	return (
		<div className={styles.inputWrapper}>
			<input ref={ref} className={cn(styles.input, className, {
				[styles.invalid]: isValid
			})} {...props} />
			<img className={styles.icon} src="/search-icon.svg" alt="search" />
		</div>
	);
}); 