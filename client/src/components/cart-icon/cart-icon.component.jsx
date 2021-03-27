import React from 'react';
import { ReactComponent as ShoppingBag } from './../../assets/shopping-bag.svg';
import classes from './cart-icon.module.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from './../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
	return (
		<div className={classes['cart-icon']}>
			<ShoppingBag
				className={classes['shopping-icon']}
				onClick={toggleCartDropdown}
			/>
			<span className={classes['item-count']}>{itemCount}</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartDropdown: () => dispatch(toggleCartDropdown())
	};
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
