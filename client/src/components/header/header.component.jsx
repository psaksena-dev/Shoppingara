import React from 'react';
import classes from './header.module.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { Link } from 'react-router-dom';
// import { auth } from './../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from './../../redux/cart/cart.selector';
import { selectCurrentUser } from './../../redux/user/user.selector';
import { signOutStart } from './../../redux/user/user.action';

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<div className={classes.header}>
			<div className={classes.logocontainer}>
				<Link to="/">
					<Logo />
				</Link>
			</div>
			<div className={classes.options}>
				<Link to="/shop" className={classes.option}>
					SHOP
				</Link>
				<Link to="/contact" className={classes.option}>
					CONTACT
				</Link>
				{currentUser ? (
					<div className={classes.option} onClick={signOutStart}>
						SIGN OUT
					</div>
				) : (
					<Link to="/signin" className={classes.option}>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
