import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'
import { selectCollectionsFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionsFetching
})

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
//using compose
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;