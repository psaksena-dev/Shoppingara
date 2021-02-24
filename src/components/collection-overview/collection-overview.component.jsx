import React from 'react';
import './collection-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopCollectionsForPreview } from './../../redux/shop/shop.selector';
import CollectionPreview from './../../components/collection-preview/collection-preview.component';

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionPreviewProps }) => (
				<CollectionPreview key={id} {...otherCollectionPreviewProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: shopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
