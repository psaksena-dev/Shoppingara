import React from 'react';
import { ReactComponent as ShoppingBag } from './../../assets/shopping-bag.svg';
import classes from './cart-icon.module.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.action';

const CartIcon = ({ toggleCartDropdown }) => {
	return (
		<div className={classes['cart-icon']}>
			<ShoppingBag
				className={classes['shopping-icon']}
				onClick={toggleCartDropdown}
			/>
			<span className={classes['item-count']}>0</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartDropdown: () => dispatch(toggleCartDropdown())
	};
};
export default connect(null, mapDispatchToProps)(CartIcon);
