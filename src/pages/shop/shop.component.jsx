import React from 'react';

import CollectionPreview from '../../components/preview/preview-collection.component';

import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (<div className='shop-page'>
            {
                this.state.collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps}/>
                ))
            }
        </div>)
    }
}

export default ShopPage;