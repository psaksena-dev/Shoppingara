import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from './../../components/collection-overview/collection-overview.component';
import CollectionPage from './../../pages/collection/collection.component';
import {
	firestore,
	convertCollectionsSnapshotToMap
} from './../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { updateShopCollection } from './../../redux/shop/shop.action';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateShopCollection } = this.props;
		const collectionRef = firestore.collection('collections');
		collectionRef.onSnapshot(async (snapshot) => {
			const collectionMap = convertCollectionsSnapshotToMap(snapshot);
			updateShopCollection(collectionMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateShopCollection: (collections) =>
			dispatch(updateShopCollection(collections))
	};
};

export default connect(null, mapDispatchToProps)(ShopPage);
