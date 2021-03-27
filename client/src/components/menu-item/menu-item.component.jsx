import React from 'react';
import classes from './menu-item.module.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
	const customClass = [classes.menuitem];
	if (size) {
		customClass.push(classes.large);
	}
	return (
		<div
			className={customClass.join(' ')}
			onClick={() => {
				history.push(`${match.url}${linkUrl}`);
			}}
		>
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

export default withRouter(MenuItem);
