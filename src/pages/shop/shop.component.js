import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../collection/collection.container';
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
// import { updateCollections } from '../../redux/shop/shop.actions';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';



class ShopePage extends React.Component {
    /* removed for redux thunk
       state = {
           loading: true
       }
       /* removed for redux thunk
         unsubscribeFromSnapshot = null;*/

    componentDidMount() {
        /* removed for redux thunk
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        //firebase method
        collectionRef.onSnapshot(async snaphot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snaphot);
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })

        //api call method hide
        /*
        fetch('https://firestore.googleapis.com/v1/projects/ecommerce-service-8752f/databases/(default)/documents/collections')
            .then(response => response.json)
            .then(collections => console.log(collections))
           */
        //for thunk
        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        // const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route
                    exact path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    // render={(props) => <CollectionsPageWithSpinner
                    //     isLoading={!isCollectionLoaded}
                    //     {...props} />
                    // }
                    component={CollectionsPageContainer}
                />
            </div>
        )
    }

}
/* removed for redux thunk
const mapDispatchToProps = dispatch => ({
 updateCollections: collectionsMap =>
     dispatch(updateCollections(collectionsMap))
})
*/

//for react thunk
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopePage);