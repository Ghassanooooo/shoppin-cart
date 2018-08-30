import React, { Component } from 'react';
import { Button, Card, CardText } from 'reactstrap'

import { connect } from 'react-redux'
import CheckOut from '../components/checkOut/checkOut'
import * as actions from '../store/actions/index'

class MyCard extends Component {

 state = {
  showProducts: true 
 }

checkoutHandler = () => {
  this.props.checkoutFromMediaMarket()
  this.props.checkoutFromHm()
  this.setState({showProducts: false})
}

  render() {
  
   
  

    //  if(this.props.orderedHm >  0 ){show = !this.props.showProducts}


    return (
      <div style={{width:'37.6vw', marginLeft: '50px'}}>
       
        
        
          
            <CheckOut
              products={this.props.orderedHm}
              productName={this.props.productNameHm}
              companyName={this.props.companyNameHm}
              price={this.props.priceHm}
              removeOne={this.props.OnRemoveOneHm}
              removeAll={this.props.OnRemoveAllHm}

            />

            <CheckOut 
              products={this.props.ordersMediaMarket}
              productName={this.props.productNameMediaMarket}
              companyName={this.props.companyNameMediaMarket}
              price={this.props.priceMediaMarket}
              removeOne={this.props.OnRemoveOneMediaMarket}
              removeAll={this.props.OnRemoveAllMediaMarket}


            />  
            
       
      <Card body>
        
        <CardText><span style={{fontSize: '25px', color: 'blue'}}>total price: </span>
        <span style={{fontSize: '30px', fontWeight: 'bold', color: 'red'}}>
          { this.state.showProducts || this.props.orderedHm > 0|| this.props.ordersMediaMarket > 0? this.props.orderedHm*7.99 + this.props.ordersMediaMarket*429 : 0} $
          </span>
          </CardText>
         
        <Button style={{width: '200px'}} color="warning" onClick={this.checkoutHandler}>check Out</Button>
      </Card>

 

      </div>
    )
  }
}

const mapStatesToProps = state => {
  return {
    orderedHm: state.HM.orderedHm,
    productNameHm: state.HM.productName,
    companyNameHm: state.HM.companyName,
    priceHm: state.HM.price,



    ordersMediaMarket: state.MediaMarket.ordersMediaMarket,

    productNameMediaMarket: state.MediaMarket.productName,
    companyNameMediaMarket: state.MediaMarket.companyName,
    priceMediaMarket: state.MediaMarket.price
  
  }
}

const mapDispatchToProps = dispatch => {
  return {
    OnRemoveOneHm: () => dispatch(actions.removeOneHm()),
    OnRemoveOneMediaMarket: () => dispatch(actions.removeOneMediaMarket()),
    OnRemoveAllHm: () => dispatch(actions.removeAllHm()),
    OnRemoveAllMediaMarket: () => dispatch(actions.removeAllMediaMarket()),

    checkoutFromHm: () => dispatch(actions.checkoutFromHm()),
    checkoutFromMediaMarket: () => dispatch(actions.checkoutFromMediaMarket()),


  }

}

export default connect(mapStatesToProps, mapDispatchToProps)(MyCard);
