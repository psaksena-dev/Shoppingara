import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from './../../redux/shop/shop.action';

import CollectionContainer from './../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { fetchCollectionStartAsync } = this.props;
		fetchCollectionStartAsync();
	}

	render() {
		const { match } = this.props;

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
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
