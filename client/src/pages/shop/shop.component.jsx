import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionStart } from './../../redux/shop/shop.action';

import CollectionContainer from './../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

const ShopPage = ({ fetchCollectionStart, match }) => {
	useEffect(() => {
		fetchCollectionStart();
	}, [fetchCollectionStart]);

	return (
		<div>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionOverviewContainer}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionContainer}
			/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
