import React from 'react'

import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';

const addToCard = (props) => (

  <Card style={{marginLeft:'50px',boxShadow: '1px 3px 10px #000'}}>
    <CardImg top width="100%" src={props.src} alt="Card image cap" />
    <CardBody>
      <CardTitle>{props.productName}: {props.price} USD</CardTitle>
      <CardSubtitle>{props.companyName}</CardSubtitle>
      <CardText><span style={{color: 'red', fontSize: '30px'}}>{props.products}</span> {props.productName} a variable to sole.</CardText>
      <CardText>{props.info}</CardText>
     
      {props.products > 0 ? <Button color="primary"  onClick={props.addHandler}>add to card</Button> : <Button  color="secondary" disabled>no more prodcts</Button>}
    </CardBody>
 </Card>

  
)

export default addToCard



