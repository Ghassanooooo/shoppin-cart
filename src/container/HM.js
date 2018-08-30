import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import AddToCard from '../components/addToCard/addToCard'


class HM extends Component {


  componentDidMount(){
    console.log(this.props)
   this.props.fetchHmData()
  }


  render() {

    return (
      <Fragment>
        <AddToCard 
          products={this.props.itemsHm}
          addHandler={this.props.orderFromHm}
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
    itemsHm: state.HM.itemsHm,
    productName: state.HM.productName,
    companyName: state.HM.companyName,
    src: state.HM.src,
    price: state.HM.price,
    info: state.HM.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    orderFromHm: () => dispatch(actions.orderFromHm()),
    fetchHmData: () => dispatch(actions.fetchHmData())

  }

}

export default connect(mapStatesToProps, mapDispatchToProps)(HM);