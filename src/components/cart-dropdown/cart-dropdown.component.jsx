import React from 'react';
import CustomButton from './../custombutton/custombutton.component';
import classes from './cart-dropdown.module.scss';
import CartItem from './../cart-item/cart-item.component';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className={classes['cart-dropdown']}>
			<div className={classes['cart-items']}>
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => {
	return {
		cartItems
	};
};

export default connect(mapStateToProps)(CartDropdown);
