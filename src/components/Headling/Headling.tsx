import { FC } from 'react';
import styles from './Headling.module.css';
import { HeadlingProps } from './Headling.props';
import cn from 'classnames';

export const Headling: FC<HeadlingProps> = ({ children, className, ...props}) => {
	return (
		<h1 className={cn(styles.h1, className)} {...props}>{children}</h1>
	); 
};
