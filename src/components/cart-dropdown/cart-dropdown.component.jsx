import React from 'react';
import CustomButton from './../custombutton/custombutton.component';
import classes from './cart-dropdown.module.scss';
import CartItem from './../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from './../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from './../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<div className={classes['cart-dropdown']}>
			<div className={classes['cart-items']}>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className={classes['empty-message']}>Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartDropdown());
				}}
			>
				Go To Checkout
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
