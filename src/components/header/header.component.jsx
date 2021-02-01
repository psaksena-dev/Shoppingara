import React from 'react';
import classes from './header.module.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.logocontainer}>
				<Link to="/">
					<Logo />
				</Link>
			</div>
			<div className={classes.options}>
				<Link to="/shop" className={classes.option}>
					Shop
				</Link>
				<Link to="/contact" className={classes.option}>
					Contact
				</Link>
				<Link to="/signin" className={classes.option}>
					Sign In
				</Link>
			</div>
		</div>
	);
};

export default Header;
