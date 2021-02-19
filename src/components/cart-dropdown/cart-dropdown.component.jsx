import React from 'react';
import CustomButton from './../custombutton/custombutton.component';
import classes from './cart-dropdown.module.scss';

const CartDropdown = () => {
	return (
		<div className={classes['cart-dropdown']}>
			<div className={classes['cart-items']}></div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
};

export default CartDropdown;
