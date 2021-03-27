import React from 'react';
import classes from './collection-item.module.scss';
import CustomButton from './../custombutton/custombutton.component';
import { connect } from 'react-redux';
import { addItem } from './../../redux/cart/cart.action';

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<div className={classes.collectionItem}>
			<div
				className={classes.image}
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className={classes.collectionFooter}>
				<span className={classes.name}>{name}</span>
				<span className={classes.price}>${price}</span>
			</div>
			<CustomButton inverted onClick={() => addItem(item)}>
				Add To Cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (item) => dispatch(addItem(item))
	};
};

export default connect(null, mapDispatchToProps)(CollectionItem);
