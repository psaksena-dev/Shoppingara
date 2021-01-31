import React from 'react';
import classes from './collection-item.module.scss';

const CollectionItem = ({ name, imageUrl, price }) => {
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
		</div>
	);
};

export default CollectionItem;
