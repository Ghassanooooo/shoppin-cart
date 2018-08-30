import React, { Component } from 'react';

import { CardGroup } from 'reactstrap';

import HM from './container/HM';
import MediaMarket from './container/MediaMarket';
import MyCard from './container/MyCard';



class App extends Component {
  render(){
    return(
      <div>
        <CardGroup style={{width:'80vw',  marginTop: '30px'}}>
         <MediaMarket style={{width:'20%'}}/>
          <HM style={{width:'20%'}}/>
          <MyCard style={{width:'40%'}}/>
        </CardGroup>
 
      </div>
    )
  }
  
}



export default App;
