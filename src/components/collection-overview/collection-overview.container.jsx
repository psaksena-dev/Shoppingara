import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from './../../redux/shop/shop.selector';
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsFetching
});

const CollectionOverviewContainer = connect(mapStateToProps)(
	WithSpinner(CollectionOverview)
);

export default CollectionOverviewContainer;
