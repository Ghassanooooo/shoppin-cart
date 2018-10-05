import React from 'react'

import { Card, Button, CardTitle, CardText } from 'reactstrap';


const checkOut = (props) => props.products > 0 ?


    

<Card body style={{marginBottom: '20px'}}>
        <CardTitle>you had added to your cart: ( {props.products} ) 
         {props.productName}{props.products > 1 ? 's' : null}
        </CardTitle>
        <CardText>from {props.companyName} the price is :{props.price * props.products}$ </CardText>
        <Button color="danger" style={{marginLeft:'10px',width: '200px',marginTop: '20px'}} onClick={props.removeOne}>Remove One</Button >
        <Button color="danger" style={{marginLeft:'10px',width: '200px',marginTop: '20px'}} onClick={props.removeAll}>Remove All</Button >
        </Card>
    : null




export default checkOut