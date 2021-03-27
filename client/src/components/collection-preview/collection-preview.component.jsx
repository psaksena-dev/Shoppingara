import React from 'react';
import classes from './collection-preview.module.scss';
import CollectionItem from './../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className={classes.collectionPreview}>
			<h1 className={classes.title}>{title.toUpperCase()}</h1>
			<div className={classes.preview}>
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
