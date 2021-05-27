import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../preview/preview-collection.component';
import {selectCollections} from '../../redux/shop/shop.selector';

const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherProps}) => (
            <CollectionPreview key={id} {...otherProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);