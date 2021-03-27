import React from 'react';
import classes from './homepage.module.scss';
import Directory from './../../components/directory/directory.component';

const HomePage = () => {
	return (
		<div className={classes.homepage}>
			<Directory />
		</div>
	);
};

export default HomePage;
