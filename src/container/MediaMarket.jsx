import React, { Component,Fragment } from 'react';

import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import AddToCard from '../components/addToCard/addToCard'

class MediaMarket extends Component {



  componentDidMount(){
    console.log(this.props)
   this.props.fetchMediaMarketData()
  }
  
  render() {

    return (
      <Fragment>

        <AddToCard 
          products={this.props.itemsMediaMarket}
          addHandler={this.props.orderFromMediaMarket}
          productName={this.props.productName}
          companyName={this.props.companyName}
          src={this.props.src}
          price={this.props.price}
          info={this.props.info}
        />
      </Fragment>
    )
  }
}
const mapStatesToProps = state => {
  return {
    itemsMediaMarket: state.MediaMarket.itemsMediaMarket,
    productName: state.MediaMarket.productName,
    companyName: state.MediaMarket.companyName,
    src: state.MediaMarket.src,
    price: state.MediaMarket.price,
    info: state.MediaMarket.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    orderFromMediaMarket: () => dispatch(actions.orderFromMediaMarket()),
    fetchMediaMarketData: () => dispatch(actions.fetchMediaMarketData())

  }

}

export default connect(mapStatesToProps, mapDispatchToProps)(MediaMarket);
