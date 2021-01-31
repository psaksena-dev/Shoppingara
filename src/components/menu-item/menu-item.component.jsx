import React from 'react';
import classes from './menu-item.module.scss';

const MenuItem = ({ title, imageUrl, size }) => {
	const customClass = [classes.menuitem];
	if (size) {
		customClass.push(classes.large);
	}
	console.log(customClass);
	return (
		<div className={customClass.join(' ')}>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
				className={classes.backgroundImage}
			></div>
			<div className={classes.content}>
				<h1 className={classes.title}>{title.toUpperCase()} </h1>
				<span className={classes.subtitle}>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
