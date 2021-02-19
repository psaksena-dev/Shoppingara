import React from 'react';
import classes from './header.module.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.utils.js';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
	return (
		<div className={classes.header}>
			<div className={classes.logocontainer}>
				<Link to="/">
					<Logo />
				</Link>
			</div>
			{currentUser ? <span>Welcome {currentUser.displayName}</span> : null}
			<div className={classes.options}>
				<Link to="/shop" className={classes.option}>
					SHOP
				</Link>
				<Link to="/contact" className={classes.option}>
					CONTACT
				</Link>
				{currentUser ? (
					<div className={classes.option} onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link to="/signin" className={classes.option}>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser
	};
};
export default connect(mapStateToProps)(Header);
